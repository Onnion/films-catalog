import React, { useContext, useEffect } from 'react';
import { ConfigContext, ConfigContextProps } from './contexts/Config';
import { MoviesContext, MoviesContextProps } from './contexts/Movies';
import Routes from './routes';
import { Body, MainContent, Title } from './styles';

export const App: React.FC = () => {
  const { config, loadConfig } = useContext(ConfigContext) as ConfigContextProps;
  const { loadMovies } = useContext(MoviesContext) as MoviesContextProps;

  async function initMovies() {
    await loadConfig();
    await loadMovies();
  }

  useEffect(() => {
    if (!config.configData && !config.baseImageURL) {
      initMovies();
    }
  });

  return (
    <Body>
      <MainContent>
        <Title>
          <h1>Movies</h1>
        </Title>
        < Routes />
      </MainContent>
    </Body>
  )
}
