let boxContainer = document.querySelector('.box-container');
let input = document.querySelector('input');
let body = document.querySelector('body');

async function loadMovies(searchTerm) {
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response === "False" && searchTerm.length > 0) {
        boxContainer.innerHTML = "Invalid Input or Movie is not Found";  
    } else {
        displayMovieList(data.Search);
    }
}
// loadMovies('avenger'); 

function findMovies() {
    let searchTerm = (input.value).trim();
    // console.log(searchTerm);
    if(searchTerm.length > 0) {
        loadMovies(searchTerm);
    }
}

function displayMovieList(movies) {
    finalList = "";
    movies.forEach((ele, idx) => { // OR for(let idx = 0; idx < movies.length(); idx++) => movies[idx].Poster
        finalList += `
        <div class="box">
        <img src=${ele.Poster} alt="">
        <h4>${ele.Title}</h4>
        <button class="watchBtn">Watch Now</button>
        </div>
        ` 
    });
    boxContainer.innerHTML = finalList
}