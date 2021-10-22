class SessionsController < ApplicationController
  def new
  end

  def create
    if logged_in_user
      flash.now[:danger] = 'Invalid email/password combination'
      redirect_back_or 'new'
    else
      redirect_to login_url
    end
  end

  def login
  end

  def welcome
  end

  def destroy
    log_out
    redirect_to root_url
  end

end
