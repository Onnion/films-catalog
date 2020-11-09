import styled from 'styled-components';

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