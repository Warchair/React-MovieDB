import axios from 'axios';

const apikey = '421b76897a0a25d2886c0ec4f0e51942';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const topRatedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const GenreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;


export const fetchMovies = async () => {
    try {
        const { data } = await axios.get(nowPlayingUrl, {
            params: {
                api_key:apikey,
                language: 'en_US',
                page:1
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/'
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl +  m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))
        return modifiedData;
        
    } catch(error) {
        
    }
}

export const fetchGenre = () => {
    
}

export const fetchMovieByGenre = () => {
    
}

export const fetchPersons = () => {
    
}

export const fetchTopRatedMovie = () => {
    
}
export const fetchMovieDetails = () => {
    
}

export const fetchMovieVideos = () => {
    
}

export const fetchMovieCasts = () => {
    
}

export const fetchSimilarMovie = () => {
    
}