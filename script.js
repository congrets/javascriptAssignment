let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
function Movie (title, rating, haveWatched){
    this.title = title;
    this.rating = rating;
    this.haveWatched = haveWatched;

}

//add a movie OBJECT to the allMovies array
function addMovie (movie) {
    allMovies.push(movie);
    console.log("A new movie is added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
function printMovies () {
    console.log("Printing all movies....");
    totalMovies = 0;

    for (i = 0; i < allMovies.length; i++) {
        let movie = allMovies[i];
        console.log(movie.title + ", rating of " + movie.rating + ", havewatched: " + movie.haveWatched);    
        totalMovies += 1;
    }
    console.log("");
    console.log("You have " + totalMovies + " movies in total");
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
function highRatings (rating) {
    totalMatches = 0;
    console.log("printing movie that has a rating higher than " + rating);
    for (i = 0; i < allMovies.length; i++) {
        let movie = allMovies[i]
        if (allMovies[i].rating > rating) {
            console.log(movie.title + " has a rating of " + movie.rating);
            totalMatches += 1;
        }
    }
    console.log("");
    console.log("In total, there are " + totalMatches + " matches");
}


//Toggle the 'haveWatched' property of the specified movie 
function changeWatched (title) {
    for(i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title === title) {
            (allMovies[i].haveWatched) = !(allMovies[i].haveWatched);
            console.log("changing the status of the movie...");
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);