// let firstMovie;
let moviesData;

fetch('http://localhost:3000/movies')
    .then(resp => resp.json())
    .then(moviesArray => {
        moviesData = moviesArray
        moviesArray.forEach((movieObj) => {
            // loop code goes here
            const myImg = document.createElement('img')
            myImg.src = movieObj.image
            myImg.alt = movieObj.title
            myImg.addEventListener('click', (event) => {
                renderMovieDetails(movieObj)
            })

            document.querySelector('#movie-list').append(myImg)
            // const movieList = document.querySelector('#movie-list')
            // movieList.append(myImg)
        })
        // firstMovie = moviesArray[0]  // we can store info globally
        renderMovieDetails(moviesArray[0])
        // return moviesArray[0]  // or return it to the next .then()
    })
    .then(() => doBloodForm())

function doBloodForm() {
    const bloodForm = document.querySelector('#blood-form')
    bloodForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const bloodInput = document.querySelector('#blood-amount')
        console.log(bloodInput.value)

        const currentBloodAmount = parseInt(
            document.querySelector('#amount').textContent
        )
        document.querySelector('#amount').textContent = currentBloodAmount + parseInt(bloodInput.value)
    })
}

function renderMovieDetails(movie) {
    const detailImage = document.querySelector('#detail-image')
    detailImage.src = movie.image
    detailImage.alt = movie.title

    document.querySelector('#title').textContent = movie.title

    document.querySelector('#year-released').textContent = movie.release_year

    document.querySelector('#description').textContent = movie.description

    // document.querySelector('#amount').textContent = movie.blood_amount

    const watchedBtn = document.querySelector('#watched')
    watchedBtn.addEventListener('click', (event) => {
        console.log('clicked')
        movie.watched = !movie.watched
        if (movie.watched) {
            watchedBtn.textContent = 'Watched'
        } else {
            watchedBtn.textContent = 'Unwatched'
        }
    })

    if (movie.watched) {
        watchedBtn.textContent = 'Watched'
    } else {
        watchedBtn.textContent = 'Unwatched'
    }
}