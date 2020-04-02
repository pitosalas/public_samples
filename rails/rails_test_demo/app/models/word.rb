class Word < ActiveRecord::Base
  validates :eng, presence: true
  validates :ned, presence: true

  def self.random
    Word.all.sample
  end
end