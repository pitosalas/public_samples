require 'syslog/logger'

class TwitterApi
  def initialize
    @log = Syslog::Logger.new 'soa_publisher'
  end

  def client_connect
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_CONSUMER_KEY"]
      config.consumer_secret     = ENV["TWITTER_CONSUMER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_SECRET"]
    end
  end

  def stream_connect
    @stream = Twitter::Streaming::Client.new do |config|
      config.consumer_key        = ENV["TWITTER_CONSUMER_KEY"]
      config.consumer_secret     = ENV["TWITTER_CONSUMER_SECRET"]
      config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
      config.access_token_secret = ENV["TWITTER_ACCESS_SECRET"]
      @log.info 'Stream Connected'  
    end
  end
  
  def for_each_tweet
    @stream.sample do |tweet|
      yield tweet if tweet.is_a?(Twitter::Tweet) && tweet.lang == "en"
    end
  end

  def tweet_to_json(tweet)
    tweet = {text: tweet.full_text, lang: tweet.lang}
    tweet.to_json
  end
end
