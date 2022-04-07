#!/usr/bin/env ruby
# encoding: utf-8

require "bunny"

msg  = ARGV.empty? ? "Hello World!" : ARGV.join(" ")
conn = Bunny.new
conn.start

channel = conn.create_channel
exchange = channel.fanout("logs")
exchange.publish(msg)
puts " [x] Sent #{msg}"

conn.close
