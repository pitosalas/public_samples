require 'twitter'
require 'bunny'
require_relative 'twitter_api'
require_relative 'tweet_queue'

class SoaSubscriberNode
  def run
    @xface = TwitterApi.new
    @queue = TweetQueue.new
    @queue.establish
    @xface.stream_connect
    @queue.listen
  end
end

SoaSubscriberNode.new.run
