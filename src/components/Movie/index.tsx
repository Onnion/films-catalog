import React from 'react';
import MovieModel, { Genrer as GenrerModel } from '../../models/Movie';
import Genrer from '../Genrer';
import MovieOverview from '../MovieOverview';
import MovieTitle from '../MovieTitle';
import { MovieContainer, GenrerContainer, Banner, Content } from './styles';
import { ThemeProvider } from 'styled-components';

export interface MovieProps {
    readonly movie: MovieModel;
}

export const Movie: React.FC<MovieProps> = (props: MovieProps) => {
    const { movie } = props;

    function renderGenrers(genrers: GenrerModel[]) {
        return genrers.map(genrer => <Genrer key={genrer.id} genrer={genrer} />);
    }

    return (
        <MovieContainer>
            <ThemeProvider theme={{ banner: movie.poster_path }}>
                <Banner />
            </ThemeProvider>
            <Content>
                <div>
                    <MovieTitle
                        popularity={movie.popularity || 0}
                        title={movie.title || ''}
                        release_date={movie.release_date || ''}
                    />
                    <MovieOverview overview={movie.overview || ''} />
                </div>

                <GenrerContainer>
                    {renderGenrers(movie.genres || [])}
                </GenrerContainer>
            </Content>
        </MovieContainer>
    );
}

export default Movie;