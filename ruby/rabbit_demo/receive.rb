#!/usr/bin/env ruby

require "bunny"
require "JSON"
conn = Bunny.new(user: "pitosalas", pass: "daniel")
conn.start

channel = conn.create_channel
queue = channel.queue("hello")

puts " [*] Waiting for messages in #{queue.name}. To exit press CTRL+C"
queue.subscribe(block: true) do |delivery_info, properties, body|
  body_text = JSON.parse(body)
  puts " [x] Received #{body_text}"

  # cancel the consumer to exit
  delivery_info.consumer.cancel
end
