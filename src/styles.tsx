import styled from 'styled-components';

export const Body = styled.div`
    min-height: 100vh;
`;

export const MainContent = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media(max-width: 1024px) {
        width: 85%;
    }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--main-color);
  color: var(--secondary-color);
  height: 4rem;
  width: 100%;

  & > h1 {
    padding-left: 15px;
    font-family: 'Abel', sans-serif;
    font-weight: 400;
`;