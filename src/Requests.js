const key = "ed5e9dd1b076f10cf86c875ec238e6ea"


const request = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestToprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestLatest:   `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US&page=1`,
}

export default request