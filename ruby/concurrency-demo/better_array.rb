class BetterArrayList
  def initialize
    @contents = {a: 0, b: 0, c: 0}
  end

  def incr index
    x = @contents[index]
    @contents[index] = x + 1
  end

  def decr index
    @contents[index] -= 1
  end

  def to_s
    puts @contents.inspect
  end
end
