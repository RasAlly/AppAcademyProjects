# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

reclabel1 = User.create!(email: 'reclabel1@gmail.com', password: 'reclabel1')
reclabel2 = User.create!(email: 'reclabel2@gmail.com', password: 'reclabel2')
reclabel3 = User.create!(email: 'reclabel3@gmail.com', password: 'reclabel3')
reclabel4 = User.create!(email: 'reclabel4@gmail.com', password: 'reclabel4')

band1 = Band.create!(name: 'rocknroll', user_id: 1)
band2 = Band.create!(name: 'hip-hop', user_id: 2)
band3 = Band.create!(name: 'classical', user_id: 3)
band4 = Band.create!(name: 'r&b', user_id: 4)