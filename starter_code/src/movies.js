/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
    var movieWithMinutes = array.map(function(movie){
        var hours = 0;
        var minutes = 0;
        var hourToMinutes = 0;

        var indexHour = movie.duration.indexOf('h');
        if (indexHour !== -1) {
            hours = parseInt(movie.duration.substring(0,indexHour));
            hourToMinutes = hours * 60;
        }

        var indexMinute = movie.duration.indexOf('min');
        if (indexMinute !== -1) {
            if (indexHour !== -1) {
                minutes = parseInt(movie.duration.substring(indexHour + 1,indexMinute));
            }
               else {

                minutes = parseInt(movie.duration.substring(0,indexMinute));
            }
        }

        movieWithMinutes = Object.assign({}, movie, { duration: hourToMinutes + minutes });
        return movieWithMinutes;
    });

    return movieWithMinutes;
}




// Get the average of all rates with 2 decimals 




function ratesAverage(film) {
    var average = film.reduce(function (sum, item) {
      return sum + parseFloat(item.rate);
    }, 0) / film.length;

    return Math.round(average*100)/100
  }
  
  ratesAverage(movies);
  console.log(ratesAverage(movies));
  
// Get the average of Drama Movies


//var drama = movies.filter(function(movies) {
  //  return movies.genre.includes("Drama");
//});



function dramaMoviesRate(movie) {
    var drama = movie.filter(function(movie) {
        return movie.genre.includes("Drama");
    }); 

    if (drama.length === 0) {
        return;
    }

    var average = drama.reduce(function (sum, item) {
        item.rate = item.rate || 0;
        return sum + parseFloat(item.rate);
    }, 0) / drama.length;

    return Math.round(average*100)/100
}
  
  dramaMoviesRate(movies);
  console.log(dramaMoviesRate(movies));



// Order by time duration, in growing order

function orderByDuration(movieWithMinutes) {
    var sorted = movieWithMinutes.sort(function (a, b) {
        if ( a.duration !== b.duration) {
        return a.duration - b.duration; 
        }
        else if (a.duration === b.duration) {
            nameA = a.title.toUpperCase();
            nameB = b.title.toUpperCase();

            if (nameA < nameB) {
                return -1;
            }
            else if (nameA > nameB) {
                return 1;
            }
            return 0;
        }
    });
        return sorted;
};

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
// if (a.duration === b.duration) {
//     nameA = a.name.toUpperCase();
//     nameB = b.name.toUpperCase();
//     if (nameA < nameB) {
//         return -1;
//     }
//     else if (nameA > nameB) {
//         return 1;
//     }
//     return 0;
// };


/***THE RIGHT CODE - NO RED UNDERLING FOR ALPHABET
 *    if (a.duration === b.duration) {
            
            
        *****/

