require 'sqlite3'
require 'singleton'

class QuestionDBConnection < SQLite3::Database
  include Singleton
  
  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Question
  attr_accessor :title, :body, :associated_author

  def self.all
    data = QuestionDBConnection.instance.execute("SELECT * FROM questions")
    data.map { |datum| Question.new(datum) }
  end

  def self.find_by_id(id)
    id = QuestionDBConnection.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        questions
      WHERE
        id = ?
    SQL
    return nil if id.length <= 0

    Question.new(id.first)
  end

  def self.find_by_author_id(author_id)
    question = QuestionDBConnection.instance.execute(<<-SQL, author_id)
    SELECT
      *
    FROM
      questions
    WHERE
      associated_author = ?
    SQL
    return nil if question.length <= 0

    Question.new(question.first)
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @associated_author = options['associated_author']
  end

  def author
    name = QuestionDBConnection.instance.execute(<<-SQL, @associated_author)
    SELECT
      *
    FROM
      users
    WHERE
      id = ?
    SQL
    return nil if name.length <= 0

    User.new(name.first)
  end

  def replies
    Reply.find_by_question_id(@id)
  end

  def followers
    QuestionFollow.followers_for_question_id(@id)
  end

end


class User
  attr_accessor :fname, :lname

  def self.all
    data = QuestionDBConnection.instance.execute("SELECT * FROM users")
    data.map { |datum| User.new(datum) }
  end

  def self.find_by_id(id)
    id = QuestionDBConnection.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL
    return nil if id.length <= 0

    User.new(id.first)
  end

  def self.find_by_name(fname, lname)
    name = QuestionDBConnection.instance.execute(<<-SQL, fname, lname)
      SELECT
        *
      FROM
        users
      WHERE
        fname = ? AND lname = ?
    SQL
    return nil if name.length <= 0

    User.new(name.first)
  end

  def initialize(options)
    @id = options['id']
    @fname = options['fname']
    @lname = options['lname']
  end

  def authored_questions
    Question.find_by_author_id(@id)
    # temp.map { |datum| User.new(datum.) }
  end

  def authored_replies
    Reply.find_by_user_id(@id)
  end

  def followed_questions
    QuestionFollow.followed_questions_for_user_id(@id)
  end

end




class QuestionFollow
  attr_accessor :user_id, :question_id

  def self.all
    data = QuestionDBConnection.instance.execute("SELECT * FROM question_follows")
    data.map { |datum| QuestionFollow.new(datum) }
  end

  def self.find_by_id(id)
    id = QuestionDBConnection.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        question_follows
      WHERE
        id = ?
    SQL
    return nil if id.length <= 0

    QuestionFollow.new(id.first)
  end

  def self.followers_for_question_id(question_id)
    user = QuestionDBConnection.instance.execute(<<-SQL, question_id )
      SELECT
        users.id, users.fname, users.lname
      FROM
        users
      JOIN
        question_follows ON users.id = question_follows.user_id
      WHERE
        question_id = ?
    SQL
    return nil if user.length <= 0

    user.map { |datum| User.new(datum) }
  end

  def self.followed_questions_for_user_id(user_id)
    question = QuestionDBConnection.instance.execute(<<-SQL, user_id )
      SELECT
        questions.id, questions.title, questions.body, questions.associated_author
      FROM
        questions
      JOIN
        question_follows ON questions.id = question_follows.question_id
      WHERE
        user_id = ?
    SQL
    return nil if question.length <= 0

    question.map { |datum| Question.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end



end



class Reply
  attr_accessor :question_reply, :user_reply, :reply_body, :parent_id

  def self.all
    data = QuestionDBConnection.instance.execute("SELECT * FROM replies")
    data.map { |datum| Reply.new(datum) }
  end

  def self.find_by_id(id)
    id = QuestionDBConnection.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE
        id = ?
    SQL
    return nil if id.length <= 0

    Reply.new(id.first)
  end

  def self.find_by_user_id(user_id)
    id = QuestionDBConnection.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        replies
      WHERE
        user_reply = ?
    SQL
    return nil if id.length <= 0

    Reply.new(id.first)
  end

  def self.find_by_question_id(question_id)
    id = QuestionDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        replies
      WHERE
        question_reply = ?
    SQL
    return nil if id.length <= 0

    Reply.new(id.first)
  end


  def initialize(options)
    @id = options['id']
    @question_reply = options['question_reply']
    @user_reply = options['user_reply']
    @reply_body = options['reply_body']
    @parent_id = options['parent_id']
  end

  def author
    name = QuestionDBConnection.instance.execute(<<-SQL, @user_reply)
      SELECT
        *
      FROM
        users
      WHERE
        id = ?
    SQL
    return nil if name.length <= 0

    User.new(name.first)
  end

  def question
    question = QuestionDBConnection.instance.execute(<<-SQL, @question_reply)
      SELECT
        *
      FROM
        questions
      WHERE
        id = ?
    SQL
    return nil if question.length <= 0

    question.map { |datum| Question.new(datum) }
  end

  def parent_reply
    question = QuestionDBConnection.instance.execute(<<-SQL, @parent_id)
      SELECT
        *
      FROM
        replies
      WHERE
        id = ?
    SQL
    return nil if question.length <= 0

    Reply.new(question.first)
  end

  def child_replies
    question = QuestionDBConnection.instance.execute(<<-SQL, @id)
    SELECT
      *
    FROM
      replies
    WHERE
      parent_id = ?
    SQL
    return nil if question.length <= 0

    question.map { |datum| Reply.new(datum) }
  end

end


class QuestionLike
  attr_accessor :user_id, :user_question, :user_like

  def self.all
    data = QuestionDBConnection.instance.execute("SELECT * FROM question_likes")
    data.map { |datum| QuestionLike.new(datum) }
  end

  def self.find_by_id(id)
    id = QuestionDBConnection.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        question_likes
      WHERE
        id = ?
    SQL
    return nil if id.length <= 0

    QuestionLike.new(id.first)
  end

  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @user_question = options['user_question']
    @user_like = options['user_like']
  end

end