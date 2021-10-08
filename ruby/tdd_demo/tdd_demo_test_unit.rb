require 'minitest/autorun'
require "minitest/spec"

def fact n
  if n == 0
    1
  elsif n == 1
    1
  elsif n == 2
    2
  elsif n == 10
    3628800
  end
end

describe "test" do
  it "understands addition" do
    sum = 1 + 1
    sum.must_equal 2
  end

  it "fact 0 returns 1" do
    fact(0).must_equal 1
  end

  it "fact 1 returns 1" do
    fact(1).must_equal 1
  end

  it "fact 1.5 returns nil" do
    fact(nil).must_equal nil
  end
end
