import React, { createContext, useContext, useState } from 'react';
import MovieModel, { Genrer, MovieResponse, Paginate, Movie } from '../../models/Movie';
import { ConfigContext, ConfigContextProps } from '../Config';
export interface MoviesProviderProps { children: React.ReactNode }
export interface MoviesContextProps {
    movies: MovieModel[];
    movie: Movie | null;
    genres: Genrer[];
    loadMovies: () => void;
    loadDetail: (id: number) => void;
    searchMovies: (keyword: string) => void;
    cleanMovieDetail: () => void;
}
export interface PaginateContextProps {
    paginate?: Paginate;
}

export const MoviesContext = createContext<(MoviesContextProps & PaginateContextProps) | null>(null);

const MoviesProvider = ({ children }: MoviesProviderProps) => {
    const [movies, setMovies] = useState<MovieModel[]>([]);
    const [movie, setMovie] = useState<Movie | null>(null);
    const [paginate, setPaginate] = useState<Paginate>();
    const [genres, setGenres] = useState<Genrer[]>([]);
    const { config } = useContext(ConfigContext) as ConfigContextProps;

    async function loadGenrers() {
        try {
            const url = `${config.baseURL}/genre/movie/list?api_key=${config.apiKey}&language=pt-BR`;
            const response = await fetch(url);
            const data: { genres: Genrer[] } = await response.json();
            const genres = data.genres;

            setGenres(genres);
            return genres;
        } catch (error) {
            console.log(error);
        }
    }

    async function loadMovies() {
        try {
            const genres = await loadGenrers() as Genrer[];
            // const url = `${config.baseURL}/search/movie?api_key=${config.apiKey}&query=${keyword}&language=pt-BR`;
            const url = `${config.baseURL}/trending/movie/day?api_key=${config.apiKey}&language=pt-BR`;
            const response = await fetch(url);
            const data: MovieResponse = await response.json();
            const moviesWithGenres: MovieModel[] = data.results.map(movie => (
                {
                    ...movie,
                    genres: movie.genre_ids.map(genrer_id => genres.find(genrer => genrer.id === genrer_id)) as Genrer[]
                }
            ));

            setMovies(moviesWithGenres);
            setPaginate({
                page: data.page,
                total_results: data.total_results,
                total_pages: data.total_pages,
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function searchMovies(keyword = '') {
        try {
            const genres = await loadGenrers() as Genrer[];
            const url = `${config.baseURL}/search/movie?api_key=${config.apiKey}&query=${keyword}&language=pt-BR`;
            const response = await fetch(url);
            const data: MovieResponse = await response.json();
            const moviesWithGenres: MovieModel[] = data.results.map(movie => (
                {
                    ...movie,
                    genres: movie.genre_ids.map(genrer_id => genres.find(genrer => genrer.id === genrer_id)) as Genrer[]
                }
            ));

            setMovies(moviesWithGenres);
            setPaginate({
                page: data.page,
                total_results: data.total_results,
                total_pages: data.total_pages,
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function loadDetail(id: number) {
        try {
            const url = `${config.baseURL}/movie/${id}?api_key=${config.apiKey}&language=pt-BR`;
            const response = await fetch(url);
            const movie: Movie = await response.json();
            movie.profit = calcProfit(movie.revenue, movie.budget);

            setMovie(movie);
        } catch (error) {
            console.log(error);
        }
    }

    function cleanMovieDetail(): void {
        setMovie(null);
    }

    function calcProfit(revenue = 0, budge = 0): number {
        return revenue - budge;
    }

    const defaultValue: (MoviesContextProps & PaginateContextProps) = { movies, paginate, genres, movie, loadMovies, loadDetail, cleanMovieDetail, searchMovies };

    return (
        <MoviesContext.Provider value={defaultValue}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesProvider;