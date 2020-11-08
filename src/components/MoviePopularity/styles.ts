import styled from 'styled-components';

export const Popularity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    position: relative;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    transform: translateY(1.5rem);
    background: var(--main-color);
    font-family: 'Abel',sans-serif;
    
    &::before {
        content: '';
        border: 4px solid var(--secondary-color);
        width: 4rem;
        height: 4rem;
        position: absolute;
        border-radius: 50%;
    }
`;