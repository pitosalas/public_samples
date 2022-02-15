ENV['RACK_ENV'] = 'test'
ENV['RAILS_ENV'] = 'test'

require 'minitest/autorun'
require 'rack/test'
require_relative "../app"
