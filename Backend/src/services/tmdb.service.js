import e from "express";
import { config } from "../config/config.js";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${config.TMDB_KEY}`,
  },
});

async function safeRequest(url) {
  try {
    return await api.get(url);
  } catch (error) {
    console.log("Retrying request...");
    return await api.get(url); // retry once
  }
}

const IMG = "https://image.tmdb.org/t/p";

function formatMedia(item) {
  return {
    id: item.id,
    title: item.title || item.name,
    desc: item.overview || "no description available",
    poster: item.poster_path ? `${IMG}/w500${item.poster_path}` : null,
    backdrop: item.backdrop_path ? `${IMG}/w780${item.backdrop_path}` : null,
    type: item.media_type || "unknown",
    lang: item.original_language || "N/A",
    rating: item.vote_average || 0,
    date: item.release_date || item.first_air_date,
  };
}

async function fetchList(url) {
  try {
    const {data} =await safeRequest(url);

        return {
      page: data.page,
      totalPages: data.total_pages,
      results: data.results.map(formatMedia),
    };

  } catch (error) {
        console.error("TMDB ERROR:");
    return {
      results: [],
    };
    
  }
  
}

export const getTrending=async () => fetchList(`/trending/all/day`)
export const getTopRated=async (type) => fetchList(`/${type}/top_rated`)
export const getPopular=async (type) => fetchList(`/${type}/popular`)
export const getTrendingMovies=async () => fetchList(`/trending/movie/day`)
export const getUpcomingMovies=async () => fetchList(`/movie/upcoming`)
export const getTrendingTVShows=async () => fetchList(`/trending/tv/day`)
export const getNowPlayingMovies=async () => fetchList(`/movie/now_playing`)
export const getAiringTodayTVShows=async () => fetchList(`/tv/airing_today`)
export const getOnTheAirTVShows=async () => fetchList(`/tv/on_the_air`)


export async function getDetails(type, id) {
  const IMG = "https://image.tmdb.org/t/p";

  try {
    const details = await safeRequest(`/${type}/${id}`);

    const detail = {
      id: details.data.id,
      title: details.data.title || details.data.name,
      backdrop: details.data.backdrop_path
        ? `${IMG}/w780${details.data.backdrop_path}`
        : null,
      poster: details.data.poster_path
        ? `${IMG}/w500${details.data.poster_path}`
        : null,
      link: details.data.homepage,
      imdbid: details.data.imdb_id,
      country: details.data.origin_country,
      lang: details.data.original_language,
      desc: details.data.overview,
      production_companies: details.data.production_companies,
      production_countries: details.data.production_countries,
      date: details.data.release_date || details.data.first_air_date,
      duration: details.data.runtime,
      tagline: details.data.tagline,
      rating: details.data.vote_average,
    };

    // 🎬 Trailer
    const videos = await safeRequest(`/${type}/${id}/videos`);
    const trailerObj = videos.data.results.find(
      (vid) => vid.type === "Trailer" && vid.site === "YouTube"
    );
    const trailer = trailerObj ? trailerObj.key : null;

    // 👥 Cast & Crew
    const credits = await safeRequest(`/${type}/${id}/credits`);

    const cast = credits.data.cast.map((item) => ({
      id: item.id,
      name: item.name,
      character: item.character,
      profile: item.profile_path
        ? `${IMG}/w185${item.profile_path}`
        : null,
    }));

    const crew = credits.data.crew.map((item) => ({
      id: item.id,
      name: item.name,
      job: item.job,
      profile: item.profile_path
        ? `${IMG}/w185${item.profile_path}`
        : null,
    }));

    // 🎯 Recommendations
    const recommendations = await safeRequest(
      `/${type}/${id}/recommendations`
    );

    const similar = recommendations.data.results.map((item) => ({
      id: item.id,
      title: item.title || item.name,
      poster: item.poster_path
        ? `${IMG}/w500${item.poster_path}`
        : null,
      rating: item.vote_average,
    }));

    return {
      details: detail,
      cast,
      crew,
      trailer,
      recommendations: similar,
    };

  } catch (error) {
    console.error("TMDB ERROR:", error.message);

    return {
      details: {},
      cast: [],
      crew: [],
      trailer: null,
      recommendations: [],
    };
  }
}

export async function getPopularPersons() {
  try {
    const data=await safeRequest(`/person/popular`);
    const response = data.data.results.map((item) => {
      return {
        id: item.id,
        name: item.name,
        profile: item.profile_path
          ? `https://image.tmdb.org/t/p/w185${item.profile_path}`
          : null,
        known_for: item.known_for.map((work) => work.title || work.name),
      };
    }
    );
    console.log(response)
    return {
      page: data.data.page,
      totalPages: data.data.total_pages,
      results: response,
    };
  } catch (error) {
    console.log("error")
    return {
      results: [],
    };
  }
  
}

export async function searchMulti(query) {
  try {
    const data=await safeRequest(`/search/multi?query=${encodeURIComponent(query)}`);
    const response = data.data.results.map((item) => {
      return {
        id: item.id,
        title: item.title || item.name,
        desc: item.overview || "no description available",
        poster: item.poster_path
          ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
          : null,
        backdrop: item.backdrop_path
          ? `https://image.tmdb.org/t/p/w780${item.backdrop_path}`
          : null, 
        type: item.media_type || "unknown",
        lang: item.original_language || "N/A",
        rating: item.vote_average || 0,
        date: item.release_date || item.first_air_date,
      };
    }
    );
    console.log(response)
    return {
      page: data.data.page,
      totalPages: data.data.total_pages,
      results: response,
    }; 
  } catch (error) {
    console.log("error")
    return {
      results: [],
    };
  }
}

export async function getPersonDetails(id) {
  const IMG = "https://image.tmdb.org/t/p";
  try {
    const details = await safeRequest(`/person/${id}`);
    const credits= await safeRequest(`person/${id}/combined_credits`)
    const detail = {
      id: details.data.id,
      name: details.data.name,
      profile: details.data.profile_path
        ? `${IMG}/w500${details.data.profile_path}`
        : null,
      biography: details.data.biography,
      birthday: details.data.birthday,
      place_of_birth: details.data.place_of_birth,
      known_for_department: details.data.known_for_department,
      credits:credits.data
    };
    return {
      details: detail,
    };
  } catch (error) {
    console.log("error");
    return {
      details: {},
    };

  }
}

