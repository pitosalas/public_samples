class ChatChannel < ApplicationCable::Channel
  def subscribed
    puts "**** ChatChannel Subscribed"
    stream_from "chat_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
