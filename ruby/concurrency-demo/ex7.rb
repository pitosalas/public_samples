require 'json'
class Account
  def self.balance
    @balance
  end

  def self.balance=(newval)
    @balance = newval
  end
end

Account.balance = 0

threads = (1..20).map do |i|
  Thread.new(i) do
    5.times do
      sleep(0.1)
      Account.balance = Account.balance + 100
      sleep(0.1)
      Account.balance = Account.balance - 100
    end
  end
end

threads.each(&:join)
puts "Final Balance = #{Account.balance}"
