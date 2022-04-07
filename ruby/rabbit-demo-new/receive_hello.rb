#!/usr/bin/env ruby

require "bunny"
conn = Bunny.new
conn.start

channel = conn.create_channel
queue = channel.queue("hello")

puts " [*] Waiting for messages in #{queue.name}. To exit press CTRL+C"
queue.subscribe(block: true) do |_delivery_info, _properties, body|
  puts " [x] Received #{body}"
end
