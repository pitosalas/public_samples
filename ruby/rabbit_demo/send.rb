#!/usr/bin/env ruby
# encoding: utf-8

require "bunny"
require "JSON"

conn = Bunny.new(user: "pitosalas", pass: "daniel", host: ENV["RABIT_HOST"])
conn.start

channel = conn.create_channel
queue = channel.queue("hello")
msg = {book: "Bible", dest:"Boston"}.to_json
channel.default_exchange.publish(msg, routing_key: queue.name)
puts " [x] Sent #{msg}"
conn.close
