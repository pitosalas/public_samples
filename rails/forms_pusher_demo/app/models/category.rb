class Category < ApplicationRecord
  has_many :items
  validates_associated :items
  validates :title, :description, presence: true
end
