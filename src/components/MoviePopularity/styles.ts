import styled from 'styled-components';

export const Popularity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props: any) => `${!props.theme.detail ? '1.45' : '1.8'}rem`};
    position: relative;
    width: ${(props: any) => `${!props.theme.detail ? '5' : '7'}rem`};
    height: ${(props: any) => `${!props.theme.detail ? '5' : '7'}rem`};
    border-radius: 50%;
    transform: translateY(${(props: any) => `${!props.theme.detail ? '1.5' : '0'}rem`});
    background: var(--main-color);
    font-family: 'Abel',sans-serif;
    margin-left: 15px;

    span {
        color: var(--secondary-color);
    }
    
    &::before {
        content: '';
        border: ${(props: any) => `${!props.theme.detail ? '4' : '7'}px`} solid var(--secondary-color);
        width: ${(props: any) => `${!props.theme.detail ? '4' : '5.5'}rem`};
        height: ${(props: any) => `${!props.theme.detail ? '4' : '5.5'}rem`};
        position: absolute;
        border-radius: 50%;
    }
`;

Popularity.defaultProps = {
    theme: {
        detail: false
    }
};