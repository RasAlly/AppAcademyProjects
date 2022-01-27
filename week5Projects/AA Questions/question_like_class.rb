require_relative 'questions_db.rb'
require_relative 'user_class.rb'

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

  def self.likers_for_question_id(question_id)
    like = QuestionDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        *
      FROM
        users
      JOIN
        question_likes ON users.id = question_likes.user_id
      JOIN
        questions ON questions.associated_author = question_likes.user_id
      WHERE 
        questions.id = ?
    SQL
    return nil if like.length <= 0

    like.map { |datum| User.new(datum) }
  end

  def self.num_likes_for_question_id(question_id)
    amount = QuestionDBConnection.instance.execute(<<-SQL, question_id)
      SELECT
        COUNT(*)
      FROM
        users
      JOIN
        question_likes ON users.id = question_likes.user_id
      JOIN
        questions ON questions.associated_author = question_likes.user_id
      WHERE 
        questions.id = ?
    SQL
    amount.first.values[0]
  end

  def self.liked_questions_for_user_id(user_id)
    question = QuestionDBConnection.instance.execute(<<-SQL, user_id)
      SELECT
        *
      FROM
        questions
      JOIN
        question_likes ON questions.associated_author = question_likes.user_id
      WHERE
        question_likes.user_id = ?
    SQL
    return nil if question.length <= 0
    question.map { |datum| Question.new(datum) }
  end

  def self.most_liked_questions(n)
    most = QuestionDBConnection.instance.execute(<<-SQL, n)
      SELECT
        *
      FROM
        questions
      JOIN
        question_likes ON questions.id = question_likes.user_question
      GROUP BY
        question_likes.user_question
      ORDER BY
        COUNT(question_likes.user_like) DESC
      LIMIT
        ?
    SQL
    return nil if most.length <= 0
    most.map { |datum| Question.new(datum) }
  end

  def initialize(options)
    @id = options['id']
    @user_id = options['user_id']
    @user_question = options['user_question']
    @user_like = options['user_like']
  end

end