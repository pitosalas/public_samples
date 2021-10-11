class User < ApplicationRecord
  belongs_to :status
  has_many :messages, dependent: :destroy
  scope :active, -> { joins(:status).merge(Status.active) }
  scope :unread_messages, -> { joins(:messages).merge(Message.unread) }
  #default_scope { includes(:messages).unread_messages }
end
