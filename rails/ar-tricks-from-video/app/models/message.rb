class Message < ApplicationRecord
  belongs_to :user
  scope :unread, -> { where(read: false)}
  scope :read, -> { where(read: true)}
end
