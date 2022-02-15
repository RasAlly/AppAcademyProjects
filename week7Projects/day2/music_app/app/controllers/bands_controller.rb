class BandsController < ApplicationController
  before_action :require_logged_in

  def index
    @bands = Band.all
    render :index
  end

  def show
    @band = Band.find(params[:id])
    render :show
  end

  def new
    @band = Band.new
    render :new
  end

  def create
    #do next
  end
end
