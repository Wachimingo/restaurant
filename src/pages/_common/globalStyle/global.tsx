import { createGlobalStyle } from 'styled-components'
/* It's a styled component that is going to be applied to the whole app. */
export const GlobalStyle = createGlobalStyle<any>`
    body{
        background-color: ${(p: any) => p.theme.colors.bodyBackgroundColor};
        min-height: 100vh;
        margin: 0;
        padding: 0;
        color: ${(p: any) => p.theme.colors.bodyFontColor};
        /* width */
        ::-webkit-scrollbar {
        width: 12px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
        background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: #555;
        }
    }
`;