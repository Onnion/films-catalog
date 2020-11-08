import styled from 'styled-components';

export const Badge = styled.div`
    border: 2px solid var(--main-color);
    color: var(--main-color);
    background: var(--white);
    border-radius: 25px;
    font-size: .8rem;
    padding: 3px 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    cursor: pointer;
    margin-right: 10px;
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;

    &:hover {
      box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
      transform: translateY(-5px);
      transition: .3s all;
    }
`;