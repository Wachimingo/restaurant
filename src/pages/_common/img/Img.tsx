import styled from 'styled-components';

export const IMG = styled.img`
    width: ${p => p.width ? p.width : '150px'};
    height: ${p => p.height ? p.height : '150px'};
`