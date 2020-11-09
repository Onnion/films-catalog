import React from 'react';
import MovieList from '../../components/MovieList';
import { MainContent } from './styles';

export const Detail: React.FC = () => {
    return (
        <>
            <MainContent>
                <MovieList />
            </MainContent>
        </>
    );
};

export default Detail;