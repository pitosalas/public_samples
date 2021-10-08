# PlayingCard class which has the following methods:
# PlayingCard#new - creates a new card with a suit and a value
# CardHand class which has the following methods:
# CardHand#new - creates a new card hand (empty)
# CardHand.add(card) - adds a card to the card hand
# CardHand.flush? - returns true if all cards in the hand are of the same suit

require "minitest/autorun"
require_relative "playcard_tdd"

describe PlayingCard do
  it 'creates a valid card' do
    @a_card = PlayingCard.new(0, :hearts)
    @a_card.valid?.must_equal true
  end

  it "can correctly convert to a string" do
    @a_card = PlayingCard.new(0, :hearts)
    @a_card.to_s.must_equal "Ace of Hearts"
  end

  it "can compare for mathcing suits" do
    @c1 = PlayingCard.new(0, :hearts)
    @c2 = PlayingCard.new(0, :spades)
    @c1.equal_suit?(@c2).must_equal false
  end

  it "does not allow invalid card" do
    assert_raises Exception do
      PlayingCard.new(100, 200)
    end
  end
end
