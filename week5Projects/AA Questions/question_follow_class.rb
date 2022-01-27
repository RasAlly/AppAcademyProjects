require_relative 'questions_db.rb'
require_relative 'user_class.rb'
require_relative 'questions_class.rb'

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

  def self.most_followed_questions(num)
    question = QuestionDBConnection.instance.execute(<<-SQL, num)
    SELECT
      questions.id, questions.title, questions.body, questions.associated_author
    FROM
      questions
    JOIN
      question_follows ON questions.id = question_follows.question_id
    GROUP BY
      question_follows.question_id
    ORDER BY
      COUNT(question_follows.question_id) DESC
    LIMIT
      ?
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
