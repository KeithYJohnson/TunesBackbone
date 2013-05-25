class Album < ActiveRecord::Base
  attr_accessible :artist, :title, :tracks

  has_many :tracks

  accepts_nested_attributes_for :tracks
end
