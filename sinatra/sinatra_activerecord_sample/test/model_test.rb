require_relative "test_helper"

class ModelTest < Minitest::Test
  def test_simple
    assert_equal 1, 1
  end
end

class AssocTest < Minitest::Test
  def before
    Student.create(name: "Simple")
    Student.create(name: "Simon")
    Course.create(name: "Music")
  end

  def test_simple_1
    c1 = Course.where(name: "Music")
    s1 = Student.where(name: "Simple")
    s2 = Student.where(name: "Simon")
    c1.teaching_assistants << s1
    c1.teaching_assistants << s2
    assert_equal c1.teaching_assistants.count, 2
  end
  
  def test_simple_1
    c1 = Course.where(name: "Music")
    s1 = Student.where(name: "Simple")
    s2 = Student.where(name: "Simon")
    c1.students << s1
    c1.students << s2
    assert_equal c1.students.count, 2
  end
end
