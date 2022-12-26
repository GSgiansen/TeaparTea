# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Creating posts"
posts=Post.create([
    {
        title:"John Cena",
        body:"happy wappy today oi had a v nice nburger nwejrhnd s2je 3ieri3h and i had coke",
  
  
      },
      {
        title:"Spongebob SquarePants",
        body:"sadness",
  
  
      },
      {
        title:"Clowning",
        body:"frustration",
  
  
      },
      {
        title:"Sherwin",
        body:"Playing pool right now",
  
  
      },
      {
        title:"Amanda",
        body:"Having fun i the us",
  
  
      }]
)
puts "posts created"