import styled from 'styled-components';

export const SearchContainer = styled.div`
  padding: 3rem 0px;
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const Search = styled.input`
    background: var(--light-gray);
    border-radius: 25px;
    width: 100%;
    padding: 15px;
    font-size: 1rem;
    color: var(--main-color);
    font-family: 'Abel', sans-serif;
    outline: none;
`;