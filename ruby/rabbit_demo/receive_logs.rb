#!/usr/bin/env ruby
require "bunny"

conn = Bunny.new
conn.start

channel = conn.create_channel
exchange = channel.fanout("logs")
queue = channel.queue("", exclusive: true)

queue.bind(exchange)

puts " [*] Waiting for logs. To exit press CTRL+C"

begin
  queue.subscribe(block: true) do |delivery_info, properties, body|
    puts " [x] #{body}"
  end
rescue Interrupt => _
  channel.close
  conn.close
end
