class Poster < ApplicationRecord
  belongs_to :user
  has_many :postertag
  has_many :tags, through: :postertag 
end
