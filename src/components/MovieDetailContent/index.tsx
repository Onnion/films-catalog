import React, { useState } from 'react';
import { Movie, Genrer as GenrerModel, MovieInformation } from '../../models/Movie';
import Genrer from '../Genrer';
import MovieBanner from '../MovieBanner';
import MovieDetailInformation from '../MovieDetailInformation';
import MovieDetailSectionTitle from '../MovieDetailSectionTitle';
import MoviePopularity from '../MoviePopularity';
import { GenrerContainer, MovieDetailContainer, Content, Overview, InformationContainer, ContentFooter, Separator } from './styles';

export interface MovieDetailContentProps {
    readonly movie: Movie;
}

export const MovieDetailContent: React.FC<MovieDetailContentProps> = (props: MovieDetailContentProps) => {
    const { movie } = props;
    const [informations] = useState<MovieInformation[]>([
        {
            generator: 'default',
            title: 'Situação',
            key: 'status'
        },
        {
            generator: 'default',
            title: 'Idioma',
            key: 'original_language'
        },
        {
            generator: 'time',
            title: 'Duração',
            key: 'runtime'
        },
        {
            generator: 'currency',
            title: 'Orçamento',
            key: 'budget'
        },
        {
            generator: 'currency',
            title: 'Receita',
            key: 'revenue'
        },
        {
            generator: 'currency',
            title: 'Lucro',
            key: 'profit'
        }
    ])

    function renderGenrers(genrers: GenrerModel[]) {
        return genrers.map((genrer, index) => <Genrer key={index} genrer={genrer} />);
    }

    function renderInformations(informations: MovieInformation[]) {
        return informations.map((information, index) => {
            const key = information.key;
            return < MovieDetailInformation key={index} value={`${(movie as any)[key]}`} information={information} />
        });
    }

    return (
        <MovieDetailContainer>
            <Content>
                <MovieDetailSectionTitle title={'Sinopse'} />
                <Overview>{movie.overview}</Overview>

                <Separator>
                    <MovieDetailSectionTitle title={'Informações'} />
                    <InformationContainer>
                        {renderInformations(informations)}
                    </InformationContainer>
                </Separator>
                <Separator>
                    <ContentFooter>
                        <GenrerContainer>
                            {renderGenrers(movie.genres || [])}
                        </GenrerContainer>
                        <MoviePopularity detail={true} popularity={movie.popularity || 0} />
                    </ContentFooter>
                </Separator>
            </Content>
            <MovieBanner detail={true} poster_path={movie.poster_path || ''} />
        </MovieDetailContainer>
    );
}

export default MovieDetailContent;