class Scene
  attr_accessor :a

  def initialize()
    @a = Array.new
  end

  def add_shape(s)
    @a.push(s)
  end

  def shape_count()
    return @a.length
  end

  def total_area()
    sum = 0
    for shape in @a
      sum += shape.area
    end
    return sum
  end

  def remove_shape(x)
    return @a.delete(@a[x])
  end
end
