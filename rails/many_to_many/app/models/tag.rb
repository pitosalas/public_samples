class Tag < ApplicationRecord
  has_many :postertag
  has_many :posters, through: :postertag 

end
