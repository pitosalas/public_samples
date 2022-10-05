class Question < ApplicationRecord
  has_many :answers
  has_many :comments, through: :answers

  scope :answered, -> { where.associated(:answers) }
  scope :unanswered, -> { includes(:answers).where(answers: {id: nil})}

  def valid_question
    the_question = ValidQuestion.new(question)
    if !the_question.valid?
      errors.add(:question, "is not valid")
    end
  end

  def good_question?
    QuestionRater.new(question).good?
  end
end
