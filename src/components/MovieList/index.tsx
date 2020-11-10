import React, { useContext } from 'react';
import { MoviesContext, MoviesContextProps } from '../../contexts/Movies';
import Movie from '../Movie';
import { MoviesContainer } from './styles';

export const MovieList: React.FC = () => {
    const { movies } = useContext(MoviesContext) as MoviesContextProps;

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