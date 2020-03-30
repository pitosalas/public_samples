class SessionsController < ApplicationController
  def create
    user = User.find_by(name: params[:name].downcase)
    if user && user.authenticate(params[:password])
      log_in user
      redirect_to user
    else
      flash[:danger] = 'Invalid email/password combination'
      render 'new'
    end
  end

  def create_google
    user = User.from_omniauth(request.env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to root_path
  end

  def destroy
    log_out
    redirect_to root_url
  end
end
