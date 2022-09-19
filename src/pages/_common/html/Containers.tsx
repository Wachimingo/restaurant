import styled from 'styled-components';

export const Container = styled.div`
    background: url(${p => p.backgroundImage});
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: #fcf8f5;
    @media(max-width: 768px){
        flex-direction: column;
    }
`

export const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: ${p => p.column ? 'column' : 'row'};
    justify-content: ${p => p.column ? 'space-around' : 'center'};
    width: 100%;
    /* border: 1px solid black; */
    @media(max-width: 768px){
        flex-direction: column;
    }
`
export const Section = styled.section`
    display: flex;
    align-items: center;
    flex-direction: ${p => p.column ? 'column' : 'row'};
    justify-content: ${p => p.column ? 'space-around' : 'center'};
    width: ${p => p.width ? p.width : '100%'};
    /* border: 1px solid black; */
    @media(max-width: 768px){
        flex-direction: column;
    }
`
export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${p => p.column ? 'column' : 'row'};
    justify-content: ${p => p.column ? 'center' : 'space-around'};
    width: ${p => p.width ? p.width : '100%'};
    /* border: 1px solid black; */

    @media(max-width: 768px){
        flex-direction: column;
    }
`