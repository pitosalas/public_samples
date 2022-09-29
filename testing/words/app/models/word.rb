class Word < ApplicationRecord
  validates :word, presence: true
  
  def length
    WordUtils.new(word).length
  end
end
