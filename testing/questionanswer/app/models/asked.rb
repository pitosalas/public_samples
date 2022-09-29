class Asked < ApplicationRecord
  validate :valid_question
  scope :answered, -> { where.not(answer: nil) }
  scope :unanswered, -> { where(answer: nil) }

  def valid_question
    the_question = ValidQuestion.new(question)
    if !the_question.valid?
      errors.add(:question, "is not valid")
    end
  end
end
