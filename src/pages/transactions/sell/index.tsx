import React, { useState, useEffect } from "react";
import type { FC } from 'react';
import type { Theme } from "interfaces";
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import light from 'themes/light';
import dark from 'themes/dark';
import Sell from "./Sell";
import { GlobalStyle } from "pages/_common";
// require.context('images/', true, /\.(png|ico|svg|jpg|gif|webp)$/);

const Index: FC = () => {
    const [theme, setTheme] = useState<Theme>(JSON.parse(localStorage.getItem('theme') as any) ?? light);
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])
    return <ThemeProvider theme={{
        ...theme, setTheme: () => {
            setTheme((currentTheme: any) => currentTheme.id === 'light' ? dark : light)
        }
    }}>
        <GlobalStyle />
        <Sell />
    </ThemeProvider>
}

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
)