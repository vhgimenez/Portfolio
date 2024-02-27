import styled from 'styled-components';

export const Container = styled.button`
    background-color: #3533CD;
    color: white;
    border-radius: 0 0 0 1rem;
    width: 7rem;
    padding: .5rem;
    border: none;
    cursor: pointer;
    transition: background-color transform .3s;

    &:hover {
        background-color: #3933CD;
        transform: scale(1.2);
    }
`;