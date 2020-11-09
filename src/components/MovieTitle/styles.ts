import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: var(--main-color);
    color: var(--secondary-color);
    height: 4rem;
    padding-left: 15px;
    width: 100%;

    & > h1 {
        padding-left: 15px;
        font-family: 'Abel', sans-serif;
        font-weight: 400;
    }
`;

export const ReleaseDate = styled.div`
    padding-top: 3px;
    padding-left: calc(15px + 15px + 5rem);
`;