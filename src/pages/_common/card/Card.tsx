import React, { memo } from 'react';
import { Div } from '../html';
import styled from 'styled-components';

/* A function that returns a color based on the state of the card. */
const spanColor: any = {
    "new": (p: any) => p.theme.colors.states.new,
    "pending": (p: any) => p.theme.colors.states.pending,
    "cancel": (p: any) => p.theme.colors.states.pending,
    "In progress": (p: any) => p.theme.colors.states.inProgress,
    "completed": (p: any) => p.theme.colors.states.completed
}

const CardWrapper = styled(Div)`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: ${p => p.width ? p.width : 'fit-content'};
    margin: 1rem;
    background-color: ${p => p.theme.id === 'light' ? 'white' : p.theme.colors.navBar.secondaryColor};
    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    span{
        color: ${p => spanColor[p.state] ? spanColor[p.state](p) : ''};
    }
`;

const InnerContainer = styled(Div)`
    /* padding: 2px 16px; */
`;

export const Card = memo(({ children, ...props }: any) => {
    return (
        <CardWrapper {...props}>
            <InnerContainer column>
                {children}
            </InnerContainer>
        </CardWrapper>
    )
});