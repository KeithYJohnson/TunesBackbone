class Album < ActiveRecord::Base
  attr_accessible :artist, :title

  has_many :tracks
end
