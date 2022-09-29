class Word < ApplicationRecord
  validates :word, presence: true
  validates :word, uniqueness: true

  def length
    WordUtils.new(word).length
  end
end
