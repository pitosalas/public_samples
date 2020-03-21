#!/usr/bin/env ruby
require "runbook"
require_relative "rbook_env.rb"

Runbook.book "Startup Worker" do
  server "rails@" + WORKER_SERVER_IP
  
  section "Run Primary" do
    @my_env = {TWITTER_CONSUMER_KEY: TWTITER_CONSUMER_KEY,
    PRIMARY_SERVER_IP: PRIMARY_SERVER_IP,
    WORKER_SERVER_IP: WORKER_SERVER_IP,
    RABBIT_SERVER_IP: RABBIT_SERVER_IP,
    TWITTER_CONSUMER_SECRET: TWITTER_CONSUMER_SECRET,
    TWITTER_ACCESS_TOKEN: TWITTER_ACCESS_TOKEN,
    TWITTER_ACCESS_SECRET: TWITTER_ACCESS_SECRET}
    step "Start the soa_publisher node" do
      server "rails@" + WORKER_SERVER_IP
      ruby_command do
        command "pwd", raw: true, ssh_config: {env: @my_env}
      end
      command "printenv | grep ER", raw: true
      command "source ~/.rvm/scripts/rvm; ruby /home/rails/soa_demo/soa_publisher_node.rb", raw:true
    end
  end
end
