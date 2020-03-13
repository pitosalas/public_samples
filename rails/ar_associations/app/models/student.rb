class Student < ApplicationRecord
  has_many :registrations
  has_many :courses, through: :registrations
  has_many :tas
  has_many :tajobs, through: :tas, source: :course
end
