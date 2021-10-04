class Status < ApplicationRecord
  has_many :users
  scope :active, -> { where(active: true) }
  # def self.active
  #   where(active: true)
  # end
end
