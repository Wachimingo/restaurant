import React from 'react';
import styled from 'styled-components';

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`
export const TH = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: ${p => p.theme.colors.navBar.primaryColor};
    color: white;
`
export const TD = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`
export const TR = styled.tr`
    &:nth-child(even){background-color: ${p => p.theme.id === 'light' ? '#D4D3D3' : '#615F5F'}}
    &:hover {background-color: #ddd;}
`