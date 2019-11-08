class V1::UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      render :json => user
    end

  end

  def index
    if params[:email] 
      user = User.find_by(email: params[:email])
      render :json => user
    else 
      users = User.all
      render :json =>  users
    end
  
  end


  def show
  end

  def update
  end

  def destroy
  end
  private 
  def user_params
    params.require(:user).permit(:email, :name)
  end
end
