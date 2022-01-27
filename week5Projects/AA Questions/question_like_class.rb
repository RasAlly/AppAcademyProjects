require_relative 'questions_db.rb'

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