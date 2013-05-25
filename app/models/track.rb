class Track < ActiveRecord::Base
  attr_accessible :title, :album_id

  belongs_to :album
end
