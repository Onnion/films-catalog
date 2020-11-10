import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > h2 {
        color: var(--main-color);
        font-family: 'Abel', sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
        flex: 1;
        border-bottom: 2px solid var(--secondary-color);
        margin-bottom: 15px;
    }
`;

export const ReleaseDate = styled.div`
    padding-top: 3px;
    padding-left: calc(15px + 15px + 5rem);
`;
