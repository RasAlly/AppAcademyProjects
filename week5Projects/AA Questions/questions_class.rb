require_relative 'questions_db.rb'
require_relative 'user_class.rb'
require_relative 'reply_class.rb'
require_relative 'question_follow_class.rb'

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

  def self.most_followed(n)
    QuestionFollow.most_followed_questions(n)
  end

  def self.most_liked(n)
    QuestionLike.most_liked_questions(n)
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

  def likers
    QuestionLike.likers_for_question_id(@id)
  end
  
  def num_likes
    QuestionLike.num_likes_for_question_id(@id)
  end

end
