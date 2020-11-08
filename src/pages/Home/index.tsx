import React from 'react';
import { Movie } from '../../components/Movie';
import MovieList from '../../components/MovieList';
import { MainContent } from './styles';

export const Home: React.FC = () => {
    return (
        <>
            <MainContent>
                <MovieList />
            </MainContent>
        </>
    );
};

export default Home;