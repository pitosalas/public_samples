class Comment < ApplicationRecord
  belongs_to :item
  validates :item, presence: true
  validates :from, :message, presence: true
end
