const apiRoute = "http://www.omdbapi.com/?apikey=7d7109ef&s=";

async function retrieveMovies(query) {
    try {
    const apiResponse = await fetch(apiRoute + query);
    const jsonResponse = await apiResponse.json();
    const arrayResponse = jsonResponse.Search;
    const htmlTarget = document.querySelector(".movie");
    console.log(arrayResponse);
    htmlTarget.innerHTML = arrayResponse.map((movie) => {
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
    retrieveMovies("futurama");
}, 1000);