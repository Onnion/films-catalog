import styled from 'styled-components';

export const Overview = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    padding: 0px 2rem;
    margin: 2rem 0px;
    font-weight: 600;
`;