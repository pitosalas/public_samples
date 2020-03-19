#!/usr/bin/env ruby
# encoding: utf-8

require "bunny"

conn = Bunny.new
conn.start

channel = conn.create_channel
queue = channel.queue("hello")
channel.default_exchange.publish("My message!!", routing_key: queue.name)
puts " [x] Sent 'My Message'"
conn.close
