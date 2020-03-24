class MessagesChannel < ApplicationCable::Channel
  def subscribed
    puts "***** Subscribed!"
    stream_from 'messages'
  end
end
