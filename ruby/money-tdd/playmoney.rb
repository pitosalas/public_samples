

assert Money.new.amount == 0
assert Money.new(-1) throws an exception
assert Money.new(:guilders).nil? == false
assert Money.new(:guilders).amount == 0


e10 = Money.new(10, :euro)
e1 = Money.new(1, :euro)
e11 = e10 + e1
assert e11.amount == 11
assert e11.currency = :euro

d10 = Money.new(10, :usd)
assert d10+e10 does not raise an exception

d10e10 = d10 + e10
assert d10e10.currency == :usd
assert d10e10.amount == 20 # assume right now usd == euro

assert d10+e10 raises and exception
assert d10e10 = d10 + Convert.new(:usd, e10) does not raise an exception




a.class -> Money







