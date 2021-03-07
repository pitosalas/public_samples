class Event < ApplicationRecord
  has_many :registrations
  has_many :humen, through: :registrations
end
