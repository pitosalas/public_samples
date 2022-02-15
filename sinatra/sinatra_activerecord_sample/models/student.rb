class Student < ActiveRecord::Base
  has_many :registrations
  has_many :courses, through: :registrations
  
  has_many :hiring
  has_many :tajobs, through: :hiring, source: :course
end
