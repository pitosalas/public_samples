#!/usr/bin/env ruby

require "bunny"
conn = Bunny.new
conn.start

channel = conn.create_channel
queue = channel.queue("hello")

puts " [*] Waiting for messages in #{queue.name}. To exit press CTRL+C"
queue.subscribe(block: true) do |delivery_info, properties, body|
  puts " [x] Received #{body}"

  # cancel the consumer to exit
  delivery_info.consumer.cancel
end
