class TracksController < ApplicationController
  def index
  	# @tracks = Track.where(:album_id=>[params(:id)])

    @album = Album.find(params[:album_id])
  	@tracks = @album.tracks

  	render :json => @tracks
  end

  def show
  end
end
