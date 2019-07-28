class PlainpageController < ApplicationController
  layout "dashboard", only: :dashboard
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token, only: :execute
  
  def index
    if params.has_key?(:review) then
      if params[:id].to_i >= current_user.level then
        redirect_to level_path(current_user.level)
      else
        @level = Message.find(params[:id])
      end
    else
      if params.has_key?(:id) then
        if current_user.level > params[:id].to_i then
          redirect_to level_path(current_user.level)
        elsif current_user.level < params[:id].to_i then
          redirect_to level_path(current_user.level)
        else
          @level = Message.find(params[:id])
        end
      else
        redirect_to level_path(1) 
      end
    end
  end
  
  def execute
    respond_to do |format|
      format.json { render json: { result: 'true', data: params[:code] } }
    end
  end
  
  def dashboard
    @level = Message.all
    @isAdmin = current_user.isAdmin
  end
  
  def next_level
    user = User.find(current_user)
    if(params[:current_stage].to_i == user.level)
      level = user.level + 1
      user.update!(level: level)
    end
    respond_to do |format|
      format.json { render json: { result: 'true', data: user.level } }
    end
  end
  
end
