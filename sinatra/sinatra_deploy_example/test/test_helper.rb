ENV['RACK_ENV'] = 'test'
ENV['RAILS_ENV'] = 'test'

require_relative '../demo_app'
require 'minitest/autorun'
require 'rack/test'

ActiveRecord::Migration.maintain_test_schema!
