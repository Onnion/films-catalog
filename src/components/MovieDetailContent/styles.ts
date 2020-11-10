import styled from 'styled-components';

export const MovieDetailContainer = styled.div`
    overflow: hidden;
    display: flex;
    background-color: var(--not-white);
`;

export const ReleaseDate = styled.div`
    padding-top: 3px;
    padding-left: calc(15px + 15px + 5rem);
`;

export const Content = styled.div`
    flex: 1;
    padding: 30px;
`;

export const ContentFooter = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const GenrerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const InformationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Overview = styled.p`
    font-weight: 600;
`;

export const Separator = styled.div`
    padding-top: 30px;  
`;