import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--light-gray);
    padding: 15px 30px;

    & > h1 {
        color: var(--main-color);
        font-size: 2.5rem;
        font-family: 'Abel', sans-serif;
        font-weight: 400;
    }
`;

export const ReleaseDate = styled.div`
    padding-top: 3px;
    padding-left: calc(15px + 15px + 5rem);
`;
