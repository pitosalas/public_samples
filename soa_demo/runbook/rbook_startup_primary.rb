#!/usr/bin/env ruby
require "runbook"
require_relative "rbook_env.rb"

runbook = Runbook.book "Startup" do
  server "rails@" + PRIMARY_SERVER_IP
  layout [[
    :top,
    :middle,
    :bottom,
  ]]
  section "Monitor progress" do
    step "log follow" do
      command "journalctl -u soa-primary.service -f"
    end
  end
  section "Run Primary" do
    step "Start the soa_publisher node" do
      env({TWITTER_CONSUMER_KEY: TWTITER_CONSUMER_KEY,
           TWITTER_CONSUMER_SECRET: TWITTER_CONSUMER_SECRET,
           TWITTER_ACCESS_TOKEN: TWITTER_ACCESS_TOKEN,
           TWITTER_ACCESS_SECRET: TWITTER_ACCESS_SECRET})
      command "printenv | grep TWITTER"
      command "pwd"
      command "ruby soa_publisher_node.rb"
    end
  end
end

if __FILE__ == $0
  Runbook::Runner.new(runbook).run(start_at: 1, auto: true)
else
  runbook
end

