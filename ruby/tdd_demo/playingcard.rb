# Represent Standard Playng Cards
require_relative "./playingcard"

class PlayingCard
  attr_reader :rank, :suit
  def initialize(suit: nil, rank: nil)
    @suit = suit
    @rank = rank
    throw Exception unless valid?(suit, rank)
  end

  def random
    @suit = %w[hearts spades diamonds clubs].sample
    @rank = rand(13)
    self
  end

  def to_s
    card_to_english
  end

  def card_to_engish
    rank_to_english + ' of ' + @suit
  end

  def valid_suit_rank?(rank, suit)
    suit >= 1 && rank <= 13 && !suit.nil?
  end

  private

  def rank_to_english
    if @rank == '1'
      'Ace'
    elsif @rank > 1 && @rank < 11
      number_to_english(@rank)
    elsif @rank == 11
      'Jack'
    elsif @rank == 12
      'Queen'
    elsif @rank == 13
      'King'
    end
  end

  def number_to_english(val)
    %w[fail0 fail1 two three four five six seven eight nine ten][val]
  end
end

### Represent a Deck of cards
class Deck
  def initialize
    @cards = {}
  end

  def deal
  end

  def length
    @cards.length
  end
end
