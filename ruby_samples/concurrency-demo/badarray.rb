class BadArrayList
  def initialize
    @contents = []
    @first_free = 0
  end

  def add_at_end newval
    @contents[@first_free] = newval
    @first_free += 1
  end

  def get_end_value
    @contents[@first_free - 1]
  end

  def to_s
    puts @contents.inspect
  end
end

