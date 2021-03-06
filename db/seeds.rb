# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  Series.destroy_all
  User.destroy_all
  Comment.destroy_all

  User.create!(username: "barb", email:"barb@email.com", password: "123456")

  puts "#{User.count} users created"

  Series.create!(title: "Bridgerton", description: "During the Regency era in England, eight close-knit siblings of the powerful Bridgerton family attempt to find love.", img_url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pickalive.com%2Fwatch%2Fbridgerton-netflix-original-series&psig=AOvVaw1O2vqkq2gditrjQi6rAxiI&ust=1615065904299000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODxx76Lmu8CFQAAAAAdAAAAABAK", platform: "Netflix")
  Series.create!(title: "The OA", description:"Prairie Johnson, a young woman who returns home after a 7-year disappearance. Her sudden return is not the only miraculous occurrence. Everyone is shocked to learn that Prairie is no longer blind. While the FBI and her parents are anxious to discuss Prairie's disappearance, she won't talk about what happened during the time that she was missing. ", img_url: "https://lh3.googleusercontent.com/proxy/-oOIkBOgconaGjBqrLRcsOizxipSi91CgkCMU1wyOiXqoukofcVTSq1UuMniYgNxRi2jeW34NikecYd5VswSwpdLSU7bCr5P6KknWhwJ28JKggD-MHWGwDDlA6btgGbNJkujjabECPU7Wl8", platform:"Netflix")
  Series.create!(title: "Eve's Bayou", description:"Over the course of a long, hot Louisiana summer, a 10-year-old black girl, Eve Batiste (Jurnee Smollett), discovers that her family's affluent existence is merely a facade. The philandering of her suave doctor father, Louis (Samuel L. Jackson), creates a rift, throwing Eve's mother, Roz (Lynn Whitfield), and teenage sister, Cisely (Meagan Good), into emotional turmoil. Eve, though, manages to find some solace with her quirky psychic aunt, Mozelle (Debbi Morgan).", img_url: "https://ghouliejoe.files.wordpress.com/2016/02/eb2.jpg", platform:"Hulu")
  Series.create!(title: "Lost", description:"The show contains elements of supernatural and science fiction, and follows the survivors of a commercial jet airliner flying between Sydney and Los Angeles, after the plane crashes on a mysterious island somewhere in the South Pacific Ocean. The story is told in a heavily serialized manner. Episodes typically feature a primary storyline set on the island, augmented by flashback or flashforward sequences which provide additional insight into the involved characters.", img_url: "https://img.hulu.com/user/v3/artwork/466b3994-b574-44f1-88bc-63707507a6cb?base_image_bucket_name=image_manager&base_image=1120c8f5-127a-4751-a6af-fa5ffb25cda4&size=1200x630&format=jpeg&operations=%5B%7B%22gradient_vector%22%3A%22(0%2C0%2C0%2C0.5)%7C(0%2C0%2C0%2C0)%7C(0%2C600)%7C(0%2C240)%22%7D%2C%7B%22overlay%22%3A%7B%22position%22%3A%22SouthEast%7C(30%2C30)%22%2C%22operations%22%3A%5B%7B%22image%22%3A%22image_manager%7C80a7c99c-dbde-4c83-a25f-a8558ca76676%22%7D%2C%7B%22resize%22%3A%22204x204%7Cmax%22%7D%2C%7B%22extent%22%3A%22204x204%22%7D%5D%7D%7D%2C%5D", platform:"Hulu")
  Series.create!(title: "Black is King", description:"The film tells the story of a young African prince (Folajomi Akinmurele) who is exiled from his kingdom after the death of his father. As he grows up into a man (Nyaniso Dzedze), the prince undergoes a journey of self-identity, using the guidance of his ancestor (Beyoncé), childhood love (Nandi Madida) and his own subconscious (Stephen Ojo) to reclaim his throne. The prince's journey acts as an allegory for the African diaspora's journey of discovering, reclaiming and celebrating their culture and heritage, which is echoed by the inclusion of spoken-word poetry in the film that focuses on the question of black identity.", img_url: "https://img.buzzfeed.com/buzzfeed-static/static/2020-07/31/11/asset/e66ca2c57a6e/sub-buzz-5371-1596194895-28.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto", platform:"Disney+")
  Series.create!(title: "WandaVision", description:"WandaVision is based on the Marvel Comics characters Wanda Maximoff / Scarlet Witch and Vision. Set in the Marvel Cinematic Universe (MCU), it shares continuity with the films of the franchise, and takes place after the events of the film Avengers: Endgame (2019).", img_url: "https://i.redd.it/ybt1gxberp861.jpg", platform:"Disney+")
  Series.create!(title: "His Dark Materials", description:"The series follows the life of a young girl named Lyra who is an orphan living with the scholars at Jordan College, Oxford, in a world governed by the Magisterium, a religious and political body. Lyra discovers a dangerous secret that involves Lord Asriel and Marisa Coulter, and is the subject of a witches prophecy that she will change the world.", img_url: "https://fanart.tv/fanart/tv/360295/seasonbanner/his-dark-materials-5e2e36a138d4d.jpg", platform:"HBO Max")
  Series.create!(title: "Euphoria", description:"Euphoria is an American teen drama television series created and written by Sam Levinson for HBO. It is loosely based on the Israeli television miniseries of the same name created by Ron Leshem and Daphna Levin. It follows a group of high school students through their experiences of sex, drugs, friendships, love, identity and trauma.", img_url: "https://lh4.googleusercontent.com/proxy/_U2qEU792G5dad3A9UuIm88RjYlNzC5auoQUXRaQ_a7bjzBhPp_xuzW1vhL7dqFjsRMqfPmNC94mMbe9MsLH4PmWFisQELW3lBnO0OGvy8M4hdLz0H1NZHO16GhdKWsa=w1200-h630-p-k-no-nu", platform:"HBO Max")


# puts "#{Flavor.count} flavors created"

# Food.create!(name: 'pizza', user: @ruby, flavors: [@sweet, @umami, @salty])
# @sweet.foods.create!(name: 'ice cream', user: @ruby)
# @sushi = Food.create!(name: 'sushi', user: @ruby)
# @sushi.flavors.push(@umami, @salty, @bitter)

# puts "#{Food.count} foods created"
