class Person < ActiveRecord::Base
  has_many :messages
  has_many :hashtags, through: :messages
end
