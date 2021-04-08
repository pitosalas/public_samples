class Rectangle
  attr_accessor :x,:y

  def initialize(a,b)
    @x = a
    @y = b
  end

  def area()
    (@x.x - @y.x).abs * (@x.y - @y.y).abs
  end
end
