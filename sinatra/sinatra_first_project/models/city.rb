class City < ActiveRecord::Base
    belongs_to :country, foreign_key: 'country_foo'
end
