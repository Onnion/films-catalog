import React, { useContext, useEffect, useState } from 'react';
import { MoviesContext, MoviesContextProps } from '../../contexts/Movies';
import { scrollToTop } from '../../services/common';
import { Search as SearchInput, SearchContainer } from './styles';

export const Search: React.FC = () => {
    const [search, setSearch] = useState('');
    const { searchMovies, loadMovies } = useContext(MoviesContext) as MoviesContextProps;

    useEffect(() => {
        const handleType = setInterval(() => {
            if (search) {
                searchMovies(search);
            } else {
                loadMovies();
            }

            scrollToTop();
            clearInterval(handleType);
        }, 500);

        return () => clearInterval(handleType);
    }, [search]);

    return (
        <SearchContainer>
            <SearchInput
                onChange={(event) => setSearch(event.target.value)}
                id="filled-search"
                value={search}
                placeholder='Busque um filme por nome, ano ou gênero... '
                type="search" />
        </SearchContainer>
    );
}

export default Search;