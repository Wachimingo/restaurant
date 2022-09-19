import React, { useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import type { FC } from 'react';
import type { Theme } from "interfaces";
import { ThemeProvider } from 'styled-components';
import light from 'themes/light';
import dark from 'themes/dark';
import Home from "./Home";
import { GlobalStyle } from "pages/_common";
// import { store } from "store/store";
// import { Provider } from 'react-redux';

require.context('images/', true, /\.(png|ico|svg|jpg|gif|webp)$/);

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
        <Home />
    </ThemeProvider>
}

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        <Index />
        {/* </Provider> */}
    </React.StrictMode>
);