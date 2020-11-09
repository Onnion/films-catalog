import React, { createContext, useContext, useState } from 'react';
import MovieModel, { Genrer, MovieResponse, Paginate } from '../../models/Movie';
import { ConfigContext, ConfigContextProps } from '../Config';
export interface MoviesProviderProps { children: React.ReactNode }
export interface MoviesContextProps {
    movies: MovieModel[];
    genres: Genrer[];
    loadMovies: () => void;
}
export interface PaginateContextProps {
    paginate?: Paginate;
}

export const MoviesContext = createContext<(MoviesContextProps & PaginateContextProps) | null>(null);

const MoviesProvider = ({ children }: MoviesProviderProps) => {
    const [movies, setMovies] = useState<MovieModel[]>([]);
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

    async function loadMovies(keyword = 'jaws') {
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

    const defaultValue: (MoviesContextProps & PaginateContextProps) = { movies, loadMovies, paginate, genres };

    return (
        <MoviesContext.Provider value={defaultValue}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesProvider;