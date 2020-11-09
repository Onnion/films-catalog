import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import MovieDetailContent from '../../components/MovieDetailContent';
import MovieDetailTitle from '../../components/MovieDetailTitle';
import { ConfigContext, ConfigContextProps } from '../../contexts/Config';
import { MoviesContext, MoviesContextProps } from '../../contexts/Movies';
import { MovieDetail } from './styles';

export const Detail: React.FC = () => {
    const { movie, loadDetail, cleanMovieDetail } = useContext(MoviesContext) as MoviesContextProps;
    const { config } = useContext(ConfigContext) as ConfigContextProps;
    const { movie_id } = useParams<{ movie_id: string }>();
    const history = useHistory();

    useEffect(() => {
        history.listen(() => {
            cleanMovieDetail();
        })
    });

    useEffect(() => {
        if (config.configData && config.baseImageURL && !movie) {
            loadDetail(parseInt(movie_id));
        }
    }, [config]);

    return (
        <>
            {
                movie
                    ? (
                        <MovieDetail>
                            <MovieDetailTitle title={movie?.title} release_date={movie.release_date} />
                            <MovieDetailContent movie={movie} />
                        </MovieDetail>

                    )
                    : <Loader />
            }
        </>
    );
};

export default Detail;