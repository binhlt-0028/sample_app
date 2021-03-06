class UsersController < ApplicationController
  before_action :logged_in_user, only: %i(index edit update destroy
    show following followers)
  before_action :correct_user, only: %i(edit update)
  before_action :admin_user, only: :destroy

  def index
    @users = User.activated.page params[:page]
  end

  def new
    @user = User.new unless logged_in?
    flash[:danger] = t ".logged_in"
    redirect_to root_url
  end

  def show
    @user = User.find_by id: params[:id]
    redirect_to root_url && return unless @user[:activated]
    @microposts = @user.microposts.create_desc.page params[:page]
  end

  def edit; end

  def create
    @user = User.new user_params

    if @user.save
      @user.send_activation_email
      flash[:info] = t ".please_check_mail"
      redirect_to root_url
    else
      flash.now[:danger] = t ".create_error"
      render :new
    end
  end

  def update
    if @user.update user_params
      flash[:success] = t ".update_success"
      redirect_to @user
    else
      flash.now[:danger] = t ".update_error"
      render :edit
    end
  end

  def destroy
    @user.destroy
    flash[:success] = t ".deleted"
    redirect_to users_url
  end

  def following
    @title = t".title"
    @user = User.find(params[:id])
    @users = @user.following.page params[:page]
    render :show_follow
  end

  def followers
    @title = t".title"
    @user = User.find(params[:id])
    @users = @user.followers.page params[:page]
    render :show_follow
  end

  private

  def user_params
    params.require(:user).permit :name, :email, :password,
      :password_confirmation
  end

  def correct_user
    @user = User.find_by id: params[:id]
    redirect_to root_url unless current_user? @user
  end

  def admin_user
    redirect_to root_url unless current_user.admin?
  end
end
