# from https://betterprogramming.pub/multithreaded-ruby-synchronization-race-conditions-and-deadlocks-f1f1a7cddcea
class DoorLock
  def initialize(locked)
    @locked = locked
  end

  def open?
    !@locked
  end

  def unlock!
    unless open?
      puts "Opening the door!"
      @locked = false
    end
  end
end

door_lock = DoorLock.new(true)

5.times.map do
  Thread.new do
    unless door_lock.open?
      door_lock.unlock!
    end
  end
end.each(&:join)
