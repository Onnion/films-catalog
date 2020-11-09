import React from 'react';
import MoviePopularity from '../MoviePopularity';
import { Title, ReleaseDate } from './styles';

export interface MovieTitleProps {
    readonly title: string;
    readonly popularity: number;
    readonly release_date: string;
}

export const MovieTitle: React.FC<MovieTitleProps> = (props: MovieTitleProps) => {
    const { title, popularity, release_date } = props;

    return (
        <>
            <Title>
                <MoviePopularity popularity={popularity} />
                <h1>{title}</h1>
            </Title>
            <ReleaseDate>
                {new Date(release_date).toLocaleDateString('pt-br', { year: 'numeric', month: '2-digit', day: '2-digit' })}
            </ReleaseDate>
        </>
    );
}

export default MovieTitle;