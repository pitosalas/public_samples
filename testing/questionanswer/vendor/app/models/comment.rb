class Comment < ApplicationRecord
  belongs_to :answer
  has_one :question, through: :answer
end
