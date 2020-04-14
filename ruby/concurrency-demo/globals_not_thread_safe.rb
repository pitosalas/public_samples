require_relative "setup"

class CurrentState
  def self.current
    @current
  end

  def self.current= newval
    @current = newval
  end

  def self.check(expd)
    puts "Name: #{expd} CurrentState.current: \"#{@current}\" #{@current != expd ? "--->> RACE" : ""}"
  end
end

setup("\nTheads")
t1 = Thread.new do
  CurrentState.current = "t1"
  COUNT.times do
    CurrentState.current = "t1" if rand > 0.5
    CurrentState.check("t1")
    sleep 1.0
  end
end

t2 = Thread.new do
  CurrentState.current = "t2"
  COUNT.times do
    CurrentState.current = "t2" if rand > 0.5
    CurrentState.check("t2")
    sleep 0.75
  end
end
t1.join
t2.join

setup("\nProcesses")
fork do
  CurrentState.current = "t1"
  COUNT.times do
    CurrentState.current = "t1" if rand > 0.5
    CurrentState.check("t1")
    sleep 1.0
  end
end
fork do
  CurrentState.current = "t2"
  COUNT.times do
    CurrentState.current = "t2" if rand > 0.5
    CurrentState.check("t2")
    sleep 0.75
  end
end
Process.waitall
