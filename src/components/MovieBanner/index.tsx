import React, { useContext } from 'react';
import { Banner } from './styles';
import { ThemeProvider } from 'styled-components';
import { ConfigContext, ConfigContextProps } from '../../contexts/Config';

export interface MovieBannerProps {
    readonly poster_path: string;
}

export const MovieBanner: React.FC<MovieBannerProps> = (props: MovieBannerProps) => {
    const POSTER_RESOLUTION_INDEX = 1;
    const { config } = useContext(ConfigContext) as ConfigContextProps;
    const { poster_path } = props;

    function generatePosterPath(): string {
        return `${config.baseImageURL}${config.configData.poster_sizes[POSTER_RESOLUTION_INDEX]}${poster_path}`;
    }

    return (
        <ThemeProvider theme={{ banner: generatePosterPath() }}>
            <Banner />
        </ThemeProvider>
    );
}

export default MovieBanner;