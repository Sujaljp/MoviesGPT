
export const DEFAULT_PROFILE_PICTURE = "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
export const BANNER = "https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg"

export const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY

export const TMDB_TOP_RATED_URL = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const TMDB_POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const TMDB_NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const TMDB_UPCOMING_URL = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2';

export const TMDB_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ import.meta.env.VITE_TMDB_OPTIONS_KEY
  }
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w780/"

export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "spanish" , name: "Spanish"}
]

export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY