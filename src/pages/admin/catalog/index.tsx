import React, { useEffect, useState } from "react";
import type { FC } from 'react';
import type { Theme } from 'interfaces';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from "pages/_common";
import { ThemeProvider } from 'styled-components';
import light from 'themes/light';
import dark from 'themes/dark';
import Catalog from "./Catalog";
// require.context('images/', true, /\.(png|ico|svg|jpg|gif|webp)$/);

const Index: FC = () => {
    const [theme, setTheme] = useState<Theme>(JSON.parse(localStorage.getItem('theme') as string) ?? light);
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

    return <ThemeProvider theme={{
        ...theme, setTheme: () => {
            setTheme((currentTheme: any) => currentTheme.id === 'light' ? dark : light)
        }
    }}>
        <GlobalStyle />
        <Catalog />
    </ThemeProvider>

}

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
)