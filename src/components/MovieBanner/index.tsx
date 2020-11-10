import React, { useContext } from 'react';
import { Banner } from './styles';
import { ThemeProvider } from 'styled-components';
import { ConfigContext, ConfigContextProps } from '../../contexts/Config';

export interface MovieBannerProps {
    readonly poster_path: string;
    readonly detail?: boolean;
}

export const MovieBanner: React.FC<MovieBannerProps> = (props: MovieBannerProps) => {
    const POSTER_RESOLUTION_INDEX = 1;
    const { config } = useContext(ConfigContext) as ConfigContextProps;
    const { poster_path, detail } = props;

    function generatePosterPath(): string {
        const sizes = config.configData.poster_sizes;
        const resolution_index = !detail ? POSTER_RESOLUTION_INDEX : sizes.length - 1;
        return `${config.baseImageURL}${sizes[resolution_index]}${poster_path}`;
    }

    return (
        <ThemeProvider theme={{ detail, banner: generatePosterPath() }}>
            <Banner />
        </ThemeProvider>
    );
}

export default MovieBanner;