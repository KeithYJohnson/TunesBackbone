class AlbumsController < ApplicationController
  def index
    @albums = Album.all

    render :json => @albums
  end

  def show
    @album = Album.find(params[:id])

    render :json => @user
  end

  def create
  end

  def destroy
  end

  def update
  end

  def edit
  end

  def new
  end
end
