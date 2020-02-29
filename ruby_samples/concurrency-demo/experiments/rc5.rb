class Account
  class << self; attr_accessor :balance end
  @balance = 0
end

threads = (1..10).map do |i|
  Thread.new(i) do |i|
    curr_balance = Account.balance
    sleep(rand(0..2))
    curr_balance += 10
    sleep(rand(0..2))
    Account.balance = curr_balance
    puts "Account.balance=#{Account.balance}, curr_balance=#{curr_balance}"
  end
end

threads.each { |t| t.join}
puts "Final Balance = #{Account.balance}"
