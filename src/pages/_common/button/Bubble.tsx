import styled from 'styled-components';

export const BubbleBtn = styled.button`
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    font-size: 2em;
    background-color: #1b91f8;
    position:absolute;
    right: 2vw;
    bottom: 2vh;
    &:hover{
        cursor: pointer;
        background-color:#34a0ff;
        color:white;
    }
`