#!/usr/bin/env ruby
require "runbook"

runbook = Runbook.book "Playx" do
  description <<-DESC
This is a runbook that...
  DESC

  section "SECTION" do
    step "STEP" do
      command "pwd"
    end
  end
end

if __FILE__ == $0
  Runbook::Runner.new(runbook).run
else
  runbook
end
