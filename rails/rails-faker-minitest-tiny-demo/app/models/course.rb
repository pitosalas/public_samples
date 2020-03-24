class Course < ApplicationRecord
  has_many :students, through: :student_course
  has_many :student_course
end
