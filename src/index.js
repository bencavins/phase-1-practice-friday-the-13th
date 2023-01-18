// let firstMovie;

fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(moviesArray => {
        moviesArray.forEach((movieObj) => {
            // loop code goes here
            const myImg = document.createElement('img')
            myImg.src = movieObj.image
            myImg.alt = movieObj.title
            document.querySelector('#movie-list').append(myImg)
            // const movieList = document.querySelector('#movie-list')
            // movieList.append(myImg)
        })
        // firstMovie = moviesArray[0]  // we can store info globally
        renderMovieDetails(moviesArray[0])
        // return moviesArray[0]  // or return it to the next .then()
    })

function renderMovieDetails(movie) {
    const detailImage = document.querySelector('#detail-image')
    detailImage.src = movie.image
    detailImage.alt = movie.title

    document.querySelector('#title').textContent = movie.title

    document.querySelector('#year-released').textContent = movie.release_year

    document.querySelector('#description').textContent = movie.description

    document.querySelector('#amount').textContent = movie.blood_amount
}