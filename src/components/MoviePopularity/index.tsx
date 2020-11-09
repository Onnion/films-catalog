import React from 'react';
import { Popularity } from './styles';

export interface MoviePopularityProps {
    readonly popularity: number;
}

export const MoviePopularity: React.FC<MoviePopularityProps> = (props: MoviePopularityProps) => {
    const { popularity } = props;
    return (
        <Popularity>{popularity.toFixed(0)}%</Popularity>
    );
}

export default MoviePopularity;