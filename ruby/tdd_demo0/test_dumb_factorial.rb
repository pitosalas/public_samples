require 'minitest/autorun'
require_relative 'dumb_factorial'

class FactorialTest < Minitest::Test
  def test_fact_one
    assert fact(1) == 1
  end

  def test_fact_zero
    assert fact(0) == 0
  end
end
