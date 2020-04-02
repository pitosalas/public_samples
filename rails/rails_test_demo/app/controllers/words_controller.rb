class WordsController < ApplicationController
  def random
    @word = Word.random
  end
end
