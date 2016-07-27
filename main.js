function tableRow(movie){
  return "<tr><td>" + movie.title +
  "</td><td>" + movie.genre +
  "</td><td>" + movie.year +
  "</td><td>" + movie.directors +
  "</td><td>" + movie.actors +
  "</td><td>" + movie.ratings.stars + "/" + movie.ratings.meta + "</td></tr>"
}

function tableBody(movies, table){
  movies.sort(function(a, b){return a.ratings.stars < b.ratings.stars}).forEach(function(movie){
    document.getElementById(table).innerHTML += tableRow(movie)
  })
}

function sortAlpha(movies){
  console.log(JSON.stringify(movies.sort(function(a, b){return a.title > b.title})))
}

function sortStars(movies){
  console.log(JSON.stringify(movies.sort(function(a, b){return a.ratings.stars < b.ratings.stars})))
}

var favoriteMovies = []

favoriteMovies.push({ title: "Dr. Strangelove", genre: "Dark-Comedy", year: "1964", directors: "Stanley Kubrick", actors: ["Peter Sellers", "George C. Scott", "Slim Pickens", "Sterling Hayden"], ratings: {stars: "8.5", meta: "96"}})
favoriteMovies.push({ title: "True Romance", genre: "Crime-Drama", year: "1993", directors: "Tony Scott", actors: ["Christian Slater", "Patricia Arquette", "Dennis Hopper", "Val Kilmer"], ratings: {stars: "8.0", meta: "57"}})
favoriteMovies.push({ title: "Pulp Fiction", genre: "Crime-Drama", year: "1994", directors: "Quentin Tarantino", actors: ["Samuel L. Jackson", "John Travolta", "Uma Thurman", "Bruce Willis"], ratings: {stars: "8.9", meta: "94"}})
favoriteMovies.push({ title: "Once Upon a Time in the West", genre: "Western", year: "1969", directors: "Sergio Leone", actors: ["Claudia Cardinale", "Henry Fonda", "Charles Bronson", "Jason Robards"], ratings: {stars: "8.6", meta: "80"}})
favoriteMovies.push({ title: "Spirited Away", genre: "Anime", year: "2001", directors: "Hayao Miyazaki", actors: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takashi Naitô"], ratings: {stars: "8.6", meta: "94"}})

sortAlpha(favoriteMovies)
sortStars(favoriteMovies)

tableBody(favoriteMovies, "favoritemovies")

var hatedMovies = []

hatedMovies.push({ title: "Avatar", genre: "Sci-fi", year: "2010", directors: "James Cameron", actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "	Stephen Lang"], ratings: {stars: "7.9", meta: "83"}})
hatedMovies.push({ title: "Avatar: The Last Air Bender", genre: "Anime", year: "2010", directors: "M. Night Shyamalan", actors: ["Noah Ringer", "Dev Patel", "Nicola Peltz", "Jackson Rathbone"], ratings: {stars: "4.2", meta: "20"}})
hatedMovies.push({ title: "Matrix Revolutions", genre: "Sci-fi", year: "2003", directors: ["Lana Wachowski", "Lilly Wachowski"], actors: ["Keanu Reeves", "Carrie-Anne Moss", "Laurence Fishburne", "Hugo Weaving"], ratings: {stars: "7.2", meta: "62"}})
hatedMovies.push({ title: "Suburban Commando", genre: "Sci-fi", year: "1991", directors: "Burt Kennedy", actors: ["Hulk Hogan", "Christopher Lloyd", "Shelley Duvall", "Larry Miller"], ratings: {stars: "4.2", meta: "23"}})
hatedMovies.push({ title: "Super Mario Bros.", genre: "Video-Game", year: "1993", directors: ["Annabel Jankel", "Rocky Morton"], actors: ["Bob Hoskins", "John Lequizamo", "Dennis Hopper", "Samantha Mathis"], ratings: {stars: "4.0", meta: "33"}})

sortAlpha(hatedMovies)
sortStars(hatedMovies)

tableBody(hatedMovies, "hatedmovies")

var allMovies = favoriteMovies.concat(hatedMovies)

sortAlpha(allMovies)
sortStars(allMovies)

tableBody(allMovies, "allmovies")
