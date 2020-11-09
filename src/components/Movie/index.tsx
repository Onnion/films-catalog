import React from 'react';
import MovieModel, { Genrer as GenrerModel } from '../../models/Movie';
import Genrer from '../Genrer';
import MovieOverview from '../MovieOverview';
import MovieTitle from '../MovieTitle';
import MovieBanner from '../MovieBanner';
import { MovieContainer, GenrerContainer, Content } from './styles';
import { Link } from 'react-router-dom';

export interface MovieProps {
    readonly movie: MovieModel;
}

export const Movie: React.FC<MovieProps> = (props: MovieProps) => {
    const { movie } = props;

    function renderGenrers(genrers: GenrerModel[]) {
        return genrers.map((genrer, index) => <Genrer key={index} genrer={genrer} />);
    }

    return (
        <Link to={`/detail/${movie.id}`}>
            <MovieContainer>
                <MovieBanner poster_path={movie.poster_path || ''} />
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
        </Link>
    );
}

export default Movie;