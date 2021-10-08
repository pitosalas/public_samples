class Gear
  attr_reader :chainring, :cog, :rim, :tire

  def initialize(chain:, cog:, rim:, tire:)
    @chainring = chain
    @cog = cog
    @rim = rim
    @tire = tire
  end

  def gear_inches
    ratio * Wheel.new(rim, tire).diameter
  end

  def ratio
    chainring / cog.to_f
  end
end
