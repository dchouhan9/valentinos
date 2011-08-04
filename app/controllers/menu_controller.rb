class MenuController < ApplicationController
  def index
  end

  def show
    @menu = Menu.where(:course_id => params[:id])
    @course = Course.find(params[:id])
  end

end
