class Item < ApplicationRecord
  belongs_to :category
  has_many :comments
  accepts_nested_attributes_for :comments
end
