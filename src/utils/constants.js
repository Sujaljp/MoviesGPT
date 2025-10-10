
export const DEFAULT_PROFILE_PICTURE = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
export const BANNER = "https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg"

export const TMDB_API_KEY = "f72d378659cc45fc65460e01290039ab"

export const TMDB_TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const TMDB_POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2';
export const TMDB_NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const TMDB_UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2';

export const TMDB_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzJkMzc4NjU5Y2M0NWZjNjU0NjBlMDEyOTAwMzlhYiIsIm5iZiI6MTc1OTc2NTA0MS42NzYsInN1YiI6IjY4ZTNlMjMxOTVlNjcxNWIyZmY4MWViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nNh6rTgED5BJtM4fqkr8mjxQWfP8j72WJljeIASiO2c'
  }
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w780/"