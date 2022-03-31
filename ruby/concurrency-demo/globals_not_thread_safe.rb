require_relative "setup"

class CurrentState
  def self.current
    @current
  end

  def self.current= newval
    @current = newval
  end

  def self.balance
    @balance
  end

  def self.balance= newval
    @balance = newval
  end

  def self.check(expd)
    puts "Name: #{expd} CurrentState.current: \"#{@current}\" #{@current == expd ? "" : "--->> RACE"}"
  end
end

setup("\nTheads")
CurrentState.balance = 0
t1 = Thread.new do
  CurrentState.current = "t1"
  COUNT.times do
    CurrentState.current = "t1" if rand > 0.5
    bal = CurrentState.balance
    sleep 0.1
    CurrentState.balance = bal + 1
    CurrentState.check("t1")
  end
  puts CurrentState.balance
end

t2 = Thread.new do
  CurrentState.current = "t2"
  COUNT.times do
    CurrentState.current = "t2" if rand > 0.5
    CurrentState.check("t2")
    bal = CurrentState.balance
    sleep 0.1
    CurrentState.balance = bal + 1
  end
  puts CurrentState.balance
end
t1.join
t2.join
puts CurrentState.balance

setup("\nProcesses")
CurrentState.balance = 0
fork do
  CurrentState.current = "t1"
  COUNT.times do
    CurrentState.current = "t1" if rand > 0.5
    CurrentState.check("t1")
    bal = CurrentState.balance
    sleep 0.1
    CurrentState.balance = bal + 1
  end
  puts CurrentState.balance
end
fork do
  CurrentState.current = "t2"
  COUNT.times do
    CurrentState.current = "t2" if rand > 0.5
    CurrentState.check("t2")
    bal = CurrentState.balance
    sleep 0.1
    CurrentState.balance = bal + 1
  end
  puts CurrentState.balance
end
Process.waitall
puts CurrentState.balance
