class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def show
    redirect_to signup_path unless @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new user_params

    if @user.save
      log_in @user
      flash.now[:success] = t ".create_success"
      redirect_to @user
    else
      flash.now[:danger] = t ".create_error"
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit :name, :email, :password,
      :password_confirmation
  end
end
