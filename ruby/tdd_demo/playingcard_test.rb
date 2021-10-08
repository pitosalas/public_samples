#### Minitest/spec for Playing card
require "minitest/autorun"
require_relative "playingcard"

describe PlayingCard do
  it 'creates a valid card' do
    @a_card = PlayingCard.new.random
    @a_card.valid?.must_equal true
  end

  it 'Cant create an invalid card' do
    assert_raises Exception do
      PlayingCard.new(suit: 100, rank: 200)
    end
  end
end

describe Deck do
  it "starts out empty" do
    deck = Deck.new
    deck.length.must_equal 0
  end

  it 'can deal a card' do
    deck = Deck.new
    acard = deck.deal
    acard.valid?.assert_equal true
  end

  it "can receive a card" do
    deck = Deck.new
    deck.insert(PlayingCard.new.random)
    deck.cards_left.must_equal 1
  end
end
