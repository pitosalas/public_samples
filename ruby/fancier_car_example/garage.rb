class Garage
  def initialize(floors:, spaces:)
    @floors = floors
    @spaces = spaces
  end

  def total_spaces
    @floors * @spaces
  end
end
