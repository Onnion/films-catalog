import React from 'react';
import { Title } from './styles';

export interface MovieDetailSectionTitleProps {
    readonly title: string;
}

export const MovieDetailSectionTitle: React.FC<MovieDetailSectionTitleProps> = (props: MovieDetailSectionTitleProps) => {
    const { title } = props;

    return (
        <Title>
            <h2>
                {title}
            </h2>
        </Title>
    );
}

export default MovieDetailSectionTitle;