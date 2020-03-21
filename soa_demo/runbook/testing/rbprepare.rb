#!/usr/bin/env ruby
require "runbook"
require_relative "runbookenv.rb"

runbook = Runbook.book "Soa Demo" do
  server "rails@"+RABBIT_SERVER_IP

  section "check status" do
    step "git clone the repo" do
      command "git clone https://github.com/pitosalas/soa_demo.git"
    end
    step "bundle" do
      command "cd soa_demo; bundle", raw: true
    end
  end
end


if __FILE__ == $0
  Runbook::Runner.new(runbook).run(auto: true, start_at: 1)
else
  runbook
end
