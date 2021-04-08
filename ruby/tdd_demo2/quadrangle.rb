require_relative 'point'
class Quadrangle
  def initialize tl, tr, bl, br
    #todo: FINISH IT!
  end

  def area
    100
  end

  def valid?
    !(overlapping(@p1, @p3) | overlapping(@p2, @p4))
  end

  def overlapping?(p1, p2)
    true
  end

end