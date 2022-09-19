import React from 'react';
import styled from 'styled-components';
import { Button } from 'pages/_common';

export const Controls = styled(Button)`
    border-radius: 100%;
    width: auto;
    height: auto;
    display: flex;
    align-content: center;
    text-align: center;

    &>svg{
        padding: 0.2rem 0.2rem;
    }
`
