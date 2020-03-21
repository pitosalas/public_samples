#!/usr/bin/env ruby
require "runbook"
require_relative "env"

runbook = Runbook.book "Play Tmux Layout" do
  
  layout [
    :left,
    {name: :middle, directory: "/home/rails/soa_demo"},
    [:top_right, {name: :right, runbook_pane: true}]
  ]
  section "Run Primary" do
    step "run" do
      env({TWITTER_CONSUMER_KEY: TWTITER_CONSUMER_KEY,
           TWITTER_CONSUMER_SECRET: TWITTER_CONSUMER_SECRET,
           TWITTER_ACCESS_TOKEN: TWITTER_ACCESS_TOKEN,
           TWITTER_ACCESS_SECRET: TWITTER_ACCESS_SECRET})
      server "rails@" + PRIMARY_SERVER_IP
      
      tmux_command "uptime", :top_right
      tmux_command "/usr/bin/ruby soa_publisher_node.rb", :middle
      tmux_command "/usr/bin/top", :left
    end
  end
end

if __FILE__ == $0
  Runbook::Runner.new(runbook).run(start_at: 1, auto: true)
else
  runbook
end
