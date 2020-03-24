class HomesController < ApplicationController
  def show
    puts "**** homescontroller show"
    @home = Home.find(1)
  end

  def update
    message = params[:home][:message]
    puts "******* homecontroller store - #{message}"
    @home = Home.find(1)
    @home.message = message
    if @home.save
      ActionCable.server.broadcast 'messages', message: message
      head :ok
    end
  end
end
