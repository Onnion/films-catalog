import styled from 'styled-components';

export const MovieContainer = styled.div`
    overflow: hidden;
    display: flex;
    background-color: var(--light-gray);
`;

export const Content = styled.div`
    flex: 1;
`;

export const GenrerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 2rem;
`;

export const Banner = styled.div`
    background-size: cover;
    width: 167px;
    height: 250px;
    background-image: ${(props: any) => `url(${props.theme.banner})`}};
`;

Banner.defaultProps = {
    theme: {
        banner: ''
    }
};