require "minitest/autorun"
require_relative "money.rb"

describe Money do
  it "can represent zero dollars" do
    m = Money.new(0, :dollar)
    assert m.amount == 0
    assert m.currency == :dollar
  end

  it "Can add money of the same currency" do
    m = Money.new(100, :dollar)
    n = Money.new(200, :dollar)
    sum = m + n
    assert sum.currency == :dollar
    assert sum.amount == 300
  end

  it "Can multiply an amount by a number" do
    m = Money.new(1000, :dollar)
    product = m * 5
    assert product.currency ==  :dollar
    assert product.amount == 5000
  end

  it "Can record exchange rates" do
    Money.add_exchange_rate(:dollar, :euro, 1.1)
    assert Money.convert(1, :dollar, :euro) == 1.1 
  end

  it "Can convert from one unit to another" do
    Money.add_exchange_rate(:dollar, :euro, 1.1)
    doll1000 = Money.new(1000, :dollar)
    euroamount = doll1000.convert_to(:euro)
    assert euroamount.currency ==  :euro
    assert euroamount.amount == 1100
  end

  it "Can add amounts of different currencies" do
    Money.add_exchange_rate(:dollar, :euro, 1.1)
    dol = Money.new(1000, :dollar)
    euro = Money.new(1000, :euro)
    sum = dol + euro
    assert sum.currency == :euro
    assert sum.amount == 2100
  end

  it "Can convert money from euro to dollar also" do
    Money.add_exchange_rate(:dollar, :euro, 1.1)
    dol = Money.new(1000, :dollar)
    euro = Money.new(1000, :euro)
    sum = euro + dol
    assert sum.currency == :dollar

    # actual number according to calculator is 909.090909.... so we will have to consider roundoff
    assert_in_delta sum.amount, 1909.09
  end

  it "Can convert even if it has to use two different exchange rates" do
    Money.add_exchange_rate(:euro, :dollar, 1.1)
    Money.add_exchange_rate(:btc, :dollar, 300)
    Money.add_exchange_rate(:btc, :euro, 220)
    euromoney = Money.new(1000, :euro)
    bitcoinmoney = Money.new(10000, :btc)
    bitcoinsum = euromoney + bitcoinmoney
    assert bitcoinsum.currency == :btc
    assert_in_delta bitcoinsum.amount, 10004.5454
  end

  it "Handles unknown currencies in an intelligent way" do
  end
end
