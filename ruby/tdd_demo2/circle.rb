class Circle
  attr_accessor :p,:r

  def initialize(p,r)
    @p = p
    @r = r.to_f
  end

  def area()
    return Math::PI * (@r ** 2)
  end
end
