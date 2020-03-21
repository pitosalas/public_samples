#!/usr/bin/env ruby
require "runbook"
require_relative "rbookenv.rb"
runbook = Runbook.book "Rabbit Install" do
  server "root@"+RABBIT_SERVER_IP
  description <<-DESC
    This is a runbook that gets rabbit mq installed and configured as part
    of soa_demo. It assumes that it can login and sudo to root without supplying a
    a password.
  DESC

  section "update and install" do
    step "update and install" do
      command "pwd"
      command "apt-get update; apt-get -y upgrade", raw: true
    end
    step "Enable RabbitMQ application repository"  do
      command 'echo "deb http://www.rabbitmq.com/debian/ testing main" >> /etc/apt/sources.list'
    end
    step "Add the verification key for the package" do 
      #command 'curl http://www.rabbitmq.com/rabbitmq-signing-key-public.asc | sudo apt-key add'
    end
    step "Install the server" do 
      command 'sudo apt-get install -y rabbitmq-server'
    end
    step do
      command "sudo rabbitmq-plugins enable rabbitmq_management"
    end
    step "Uncomment the limit line (i.e. remove #)"do 
      command %q(sudo sed -i 's/#ulimit/ulimit/' /etc/default/rabbitmq-server)
    end
  end
end


if __FILE__ == $0
  Runbook::Runner.new(runbook).run(start_at: 1)
else
  runbook
end
