require_relative 'questions_db.rb'
require_relative 'user_class.rb'
require_relative 'questions_class.rb'

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

