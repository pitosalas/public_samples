#!/usr/bin/env ruby

require "bunny"

conn = Bunny.new
conn.start

ch = conn.create_channel
q = ch.queue("task_queue", durable: true)

10.times do |i|
  msg = "Message #{i}#{"." * rand(10)}"
  q.publish(msg, persistent: true)
  puts " [x] Sent #{msg}"
end
sleep 1.0
conn.close
