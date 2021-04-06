class Triangle
  attr_accessor :a,:b,:c

  def initialize(a,b,c)
    @a = a
    @b = b
    @c = c
  end

  def area()
    a_to_b = distance(@a.x,@b.x,@a.y,@b.y)
    b_to_c = distance(@b.x,@c.x,@b.y,@c.y)
    c_to_a = distance(@c.x,@a.x,@c.y,@a.y)
    return herons(a_to_b,b_to_c,c_to_a)
  end

  def distance(a,b,c,d)
    return Math.sqrt((a - b) ** 2 + (c - d) ** 2)
  end

  def herons(a,b,c)
    s = (a + b + c) / 2
    return Math.sqrt(s*(s-a)*(s-b)*(s-c))
  end

end
