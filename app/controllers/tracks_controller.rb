class TracksController < ApplicationController
  def index
    @album = Album.find(params[:album_id])
  	@tracks = @album.tracks

  	render :json => @tracks
  end

  def show
  end
end
