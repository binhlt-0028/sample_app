class SessionsController < ApplicationController
  def new; end

  def create
    user = User.find_by email: get_session_mail

    if user&.authenticate params[:session][:password]
      if user.activated?
        log_in user
        session_remember user
        redirect_back_or user
      else
        flash[:warning] = not_actived_message
        redirect_to root_url
      end
    else
      flash.now[:danger] = t ".login_invalid"
      render :new
    end
  end

  def destroy
    log_out if logged_in?
    redirect_to root_url
  end

  private

  def get_session_mail
    params[:session][:email].downcase
  end

  def session_remember user
    remember user if params[:session][:remember_me] == Settings.session.remember
    forget user
  end

  def not_actived_message
    t(".acc_not_actived") + t(".please_check_mail")
  end
end
