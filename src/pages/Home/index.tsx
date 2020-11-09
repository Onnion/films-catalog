import React from 'react';
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