require 'action_view'

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper
  COLORS = ['white', 'black', 'brown', 'taby', 'grey', 'orange']
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: { in: COLORS }
  validates :sex, inclusion: { in: ['M', 'F'] }

  def age
    time_ago_in_words(birth_date)
  end
end
