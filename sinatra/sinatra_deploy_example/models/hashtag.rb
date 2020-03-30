class Hashtag < ActiveRecord::Base
  has_many :messages

  has_many :people, through: :messages
end
