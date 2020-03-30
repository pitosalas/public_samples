class Person < ActiveRecord::Base
  belongs_to :department
  delegate :company, to: :department, allow_nil: true
end
