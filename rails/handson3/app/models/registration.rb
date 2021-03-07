class Registration < ApplicationRecord
  belongs_to :human
  belongs_to :event
end
