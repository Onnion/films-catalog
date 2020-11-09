import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    & > h5 {
        color: var(--main-color);
        font-family: 'Abel', sans-serif;
    }

    & > span {
        font-weight: 600;
    }
`;
