#!/usr/bin/env ruby

require "runbook"
require_relative "rbook_env.rb"

Runbook.book "Setup Worker" do
  description <<-HERE
  Built on top of a Digital Ocean Rails Droplet
  HERE
  section "Check whether code is installed" do
    server "rails@" + WORKER_SERVER_IP
    step "Clone the soa_demo repo if it is needed" do
      capture "ls", into: :res, raw: true
      ruby_command do
        if !@res.include? "soa_demo"
          command "git clone https://github.com/pitosalas/soa_demo.git"
        else
          puts "[git clone already exists]"
        end
      end
    end
  end

  section "Add soa-worker systemctl file if needed" do
    step "Copy file" do
      server "root@" + WORKER_SERVER_IP
      upload "../systemd/soa-worker.service", to: "/etc/systemd/system/soa-worker.service"
    end
  end

  section "Enable papertrail" do
    step "Enable papertrail " do
      server "root@" + WORKER_SERVER_IP
      command %q(wget -qO - --header="X-Papertrail-Token: Pq7PCJcg8OVhYDLNMV" \
      https://papertrailapp.com/destinations/13159811/setup.sh | sudo bash)
      command "sudo service rsyslog restart"
    end
  end

  section "get required gems" do
    step "set up and run bundler" do
      server "rails@" + WORKER_SERVER_IP
      command "source ~/.rvm/scripts/rvm; ruby -v", raw: true
      command "source ~/.rvm/scripts/rvm; gem install bundler", raw: true
      capture "source ~/.rvm/scripts/rvm; cd soa_demo; bundler", into: :res, raw: true
      puts @rec
    end
  end 
end