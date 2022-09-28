require 'words_counted'

class Article < ApplicationRecord
  def words
    WordsCounted.count(body).token_count
  end
end
