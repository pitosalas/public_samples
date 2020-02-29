#!/usr/bin/env ruby

require "bunny"
conn = Bunny.new
conn.start

channel = conn.create_channel
queue = channel.queue("task_queue", durable: true)

puts " [*] Waiting for messages in #{queue.name}. To exit press CTRL+C"
queue.subscribe(manual_ack: true, block: true) do |delivery_info, properties, body|
  puts " [x] Received #{body}"
  # imitate some work
  sleep body.count(".").to_i
  puts " [x] Done"

  channel.ack(delivery_info.delivery_tag)
end
