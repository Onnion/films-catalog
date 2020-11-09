import React from 'react';
import { Title, ReleaseDate } from './styles';

export interface MovieDetailTitleProps {
    readonly title: string;
    readonly release_date: string;
}

export const MovieDetailTitle: React.FC<MovieDetailTitleProps> = (props: MovieDetailTitleProps) => {
    const { title, release_date } = props;

    return (
        <>
            <Title>
                <h1>{title}</h1>

                <ReleaseDate>
                    {new Date(release_date).toLocaleDateString('pt-br', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                </ReleaseDate>
            </Title>

        </>
    );
}

export default MovieDetailTitle;