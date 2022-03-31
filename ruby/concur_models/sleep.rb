# sleep.rb -  - from https://engineering.universe.com/introduction-to-concurrency-models-with-ruby-part-i-550d0dbb970
@executed = false
threads = 10.times.map do |_i|
  Thread.new { sleep 1 }
end
threads.each(&:join)
