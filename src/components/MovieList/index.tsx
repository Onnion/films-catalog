import React from 'react';
import MovieModel from '../../models/Movie';
import Movie from '../Movie';
import { MoviesContainer } from './styles';

export const MovieList: React.FC = () => {
    const movies: MovieModel[] = [
        {
            title: 'Thor: Ragnarok',
            popularity: 10,
            id: 0,
            release_date: '20/20/2020',
            poster_path: '//image.tmdb.org/t/p/w220_and_h330_face/wGFUewXPeMErCe2xnCmmLEiHOGh.jpg',
            overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            genres: [{ id: 0, name: 'Ação' }, { id: 1, name: 'Ação' }, { id: 2, name: 'Ação' }]
        },
        {
            title: 'Thor: Ragnarok',
            popularity: 10,
            id: 1,
            release_date: '20/20/2020',
            poster_path: '//image.tmdb.org/t/p/w220_and_h330_face/wGFUewXPeMErCe2xnCmmLEiHOGh.jpg',
            overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            genres: [{ id: 0, name: 'Ação' }, { id: 1, name: 'Ação' }, { id: 2, name: 'Ação' }]
        },
        {
            title: 'Thor: Ragnarok',
            popularity: 10,
            id: 2,
            release_date: '20/20/2020',
            poster_path: '//image.tmdb.org/t/p/w220_and_h330_face/wGFUewXPeMErCe2xnCmmLEiHOGh.jpg',
            overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            genres: [{ id: 0, name: 'Ação' }, { id: 1, name: 'Ação' }, { id: 2, name: 'Ação' }]
        },
    ];

    function renderMovies() {
        return movies.map(movie => <div className="movie" key={movie.id}><Movie movie={movie} /></div>);
    }

    return (
        <>
            <MoviesContainer>
                {renderMovies()}
            </MoviesContainer>
        </>
    );
}

export default MovieList;