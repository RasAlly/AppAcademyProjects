# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Todo.destroy_all

todo1 = Todo.create!(title: 'hw', body: 'gotta finish',done: true)
todo2 = Todo.create!(title: 'fsp' ,body: 'do schema' ,done: false )
todo3 = Todo.create!(title: 'js project' ,body: 'fix bugs' ,done: false )
todo4 = Todo.create!(title: 'practice assessment' ,body: 'do last',done: false )
todo5 = Todo.create!(title: 'fold clothes' ,body: 'do that',done: false)

