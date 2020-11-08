import React from 'react';
import { Overview } from './styles';

export interface MovieOverviewProps {
    readonly overview: string;
}

export const MovieOverview: React.FC<MovieOverviewProps> = (props: MovieOverviewProps) => {
    const { overview } = props;
    return (
        <Overview>{overview}</Overview>
    );
}

export default MovieOverview;