class Profile < ApplicationRecord
  COUNTRY_LIST = [["Netherlands", 0], ["France", 1], ["Korea", 2]].freeze
  CITY_LIST = [[["Amsterdam", "1"], ["Utrecht", "2"], ["Rotterdam", "3"]],
               [["Paris", "1"], ["Nice", "2"], ["Manginot", "3"]],
               [["Seoul", "1"], ["Busan", "2"], ["Daegu", "3"]]].freeze
end
