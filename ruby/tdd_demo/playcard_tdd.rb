class PlayingCard
  attr_accessor :rank, :suit

  def initialize(rank, suit)
    if rank < 0 || rank > 13 || ![:hearts, :diamonds, :spades, :clubs].include?(suit)
      throw Exception
    end
    @rank = rank
    @suit = suit
  end

  def valid?
    !@suit.nil? && !@rank.nil?
  end

  def to_s
    "Ace of Hearts"
  end

  def equal_suit?(other)
    @suit.equal?(other.suit)
  end
end
