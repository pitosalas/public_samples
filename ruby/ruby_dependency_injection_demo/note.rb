class Note
  attr_accessor :author, :note, :pending

  def initialize(author, note, pending)
    @author = author
    @note = note
    @pending = ["true", "yes"].include?(pending)
  end

  def pending?
    @pending
  end

  def to_s
    @author + ": " + @note
  end
end
