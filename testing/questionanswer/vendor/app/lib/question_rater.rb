class QuestionRater
  def initialize question
    @question = question
  end

  def rating
    @question.split.count / 2.0
  end

  def good?
    rating > 0.75
  end
end
