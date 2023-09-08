const apiRoute = "http://www.omdbapi.com/?apikey=7d7109ef&s=";
const indexSearch = localStorage.getItem("query");

function getQuery() {
    const value = document.querySelector(".search__field").value
    retrieveMovies(value);
}

async function retrieveMovies(query) {
    localStorage.clear();
    try {
    const apiResponse = await fetch(apiRoute + query);
    const jsonResponse = await apiResponse.json();
    const arrayResponse = jsonResponse.Search;
    const htmlTarget = document.querySelector(".movie");
    
    htmlTarget.innerHTML = arrayResponse.slice(0, 6).map((movie) => {
        return `
            <div class="movie__item"> 
                <img src="${movie.Poster}" class="movie__img"> 
                <div class="movie__text"> 
                    <div class="movie__title"> Title: ${movie.Title} </div>
                    <div class="movie__year"> Year: ${movie.Year} </div>
                    <div class="movie__year"> imdbID: ${movie.imdbID} </div>
                </div>
            </div>
        `
    });
} catch(e) {
    console.log("HI")
    console.log(e);
};
}

setTimeout(() => {
    if (indexSearch) {
        retrieveMovies(indexSearch);
    }
}, 2000);

