class TimelineChannel < ApplicationCable::Channel
  def subscribed
    puts "****** Subscribed"
    stream_from "timeline"
  end

  def unsubscribed
    puts "****** Unsubscribed"
  end
end
