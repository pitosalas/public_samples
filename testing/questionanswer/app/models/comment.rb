class Comment < ApplicationRecord
  belongs_to :answer
  belongs_to :question, through: :answer
end
