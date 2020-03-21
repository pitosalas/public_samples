#!/usr/bin/env ruby

require "runbook"
require_relative "rbookenv.rb"

Runbook.book "Setup Primary" do
  server "rails@" + PRIMARY_SERVER_IP
  section "check whether everything is ok" do
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
    section  "Add user rails to sudoers without password needed" do
      # will require log in to root to do it
    end
    section "Add soa-primary systemctl file if needed" do
      # file is at /etc/systemd/system/soa-primary.service
    end

    section "Add Papertrail" do
      step "install papertrail cli" do
        # [sudo] gem install papertrail
      end
    end

    section "Add Ruby" do
      step "Install Ruby" do
        command "sudo apt update"
        command "sudo apt install ruby-full"
      end
      step "gem install bundler"
      step "bundle"
    end
    section "start the service"
  end
end
