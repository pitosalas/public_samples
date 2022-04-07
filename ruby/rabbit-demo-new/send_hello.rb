#!/usr/bin/env ruby
require "bunny"

conn = Bunny.new
conn.start

channel = conn.create_channel
queue = channel.queue("hello")
channel.default_exchange.publish("Test Message", routing_key: queue.name)
puts " [x] Sent 'Test Message!!'"
conn.close
