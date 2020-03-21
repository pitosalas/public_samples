class TweetQueue
  def initialize
    @log = Syslog::Logger.new 'soa Tweetqueue'
  end

  def establish
    @log.info("Connecting to Rabbit: #{ENV["RABBIT_SERVER_IP"]}")
    @connection = Bunny.new("amqp://#{ENV["RABBIT_SERVER_IP"]}:5672")
    @connection.start
    channel = @connection.create_channel
    @queue = channel.queue('stream_tweets')
  end

  def listen
    @log.info " Waiting for messages ..."
    @queue.subscribe(block: true) do |_delivery_info, _properties, body|
      @log.info "Received #{body}"
    end
  rescue Interrupt => _e
    @connection.close
    exit(0)
  end

  def post(tweet_json)		
    @queue.publish(tweet_json)		
  end
end
