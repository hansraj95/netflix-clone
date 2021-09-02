const API_KEY="9bedceb2a594f7e56b780bf173d762ef"
const request=
{   netflix:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    Trending:`/trending/all/day?api_key=${API_KEY}`,
    Action:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    Comedy:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    Horror:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    Science_fiction:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    Crime:`/discover/movie?api_key=${API_KEY}&with_genres=80`,
    Thriller:`/discover/movie?api_key=${API_KEY}&with_genres=53`,
    War:`/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    Mystery:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    Family:`/discover/movie?api_key=${API_KEY}&with_genres=10751`

}
export default request;
 /*{
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 14,
            "name": "Fantasy"
        },
        {
            "id": 36,
            "name": "History"
        },
        {
            "id": 27,
            "name": "Horror"
        },
        {
            "id": 10402,
            "name": "Music"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 878,
            "name": "Science Fiction"
        },
        {
            "id": 10770,
            "name": "TV Movie"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 10752,
            "name": "War"
        },
        {
            "id": 37,
            "name": "Western"
        }
    ]*/