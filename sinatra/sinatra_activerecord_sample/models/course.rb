class Course < ActiveRecord::Base
  has_many :registrations
  has_many :students, through: :registrations

  has_many :hirings
  has_many :teaching_assistants, through: :hirings, source: :student
end
