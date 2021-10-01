class Postertag < ApplicationRecord
  belongs_to :poster
  belongs_to :tag
end
