import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Popularity } from './styles';

export interface MoviePopularityProps {
    readonly popularity: number;
    readonly detail?: boolean;
}

export const MoviePopularity: React.FC<MoviePopularityProps> = (props: MoviePopularityProps) => {
    const { popularity, detail } = props;
    return (
        <ThemeProvider theme={{ detail }}>
            <Popularity><span>{popularity.toFixed(0)}%</span></Popularity>
        </ThemeProvider>
    );
}

export default MoviePopularity;