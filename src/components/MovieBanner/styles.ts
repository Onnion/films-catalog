import styled from 'styled-components';

export const Banner = styled.div`
    background-size: cover;
    width: ${(props: any) => `${!props.theme.detail ? '167' : '330'}px`};
    height: ${(props: any) => `${!props.theme.detail ? '250' : '495'}px`};
    background-image: ${(props: any) => `url(${props.theme.banner})`};
`;

Banner.defaultProps = {
    theme: {
        banner: '',
        detail: false
    }
};