class Department < ActiveRecord::Base
  has_many :people
  belongs_to :company
end
