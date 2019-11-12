class V1::UsersController < ApplicationController
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
    user = User.find(params[:id])
    render :json => user
  end


  def create
    user = User.new(user_params)
    if user.save
      render :json => user
    end
  end


  def update
    user = User.find(params[:id])
      if user.update(user_params)
        render :json  => user
      end
  end

  def destroy
  end
  private 
  def user_params
    params.require(:user).permit(:email, :name, :introduction)
  end
end
