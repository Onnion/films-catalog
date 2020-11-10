import React from 'react';
import MovieList from '../../components/MovieList';
import Search from '../../components/Search';

export const Home: React.FC = () => {
    return (
        <>
            <Search />
            <MovieList />
        </>
    );
};

export default Home;