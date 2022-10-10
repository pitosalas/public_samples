class ValidQuestion
  def initialize(question)
    @question = question
  end

  def valid?
    @question.is_a?(String) && @question.length > 0
  end
end
