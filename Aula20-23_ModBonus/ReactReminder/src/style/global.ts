import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --purple-300: rgba(85, 94, 255, 0.25);
    --purple-600: #5531FF;
    --purple-900: #150057;

    --font-black: #1C1C1C;
    --font-white: #FFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    @media(max-width: 1080px) {
        font-size: 93.75%;
    }

    @media(max-width: 720px) {
        font-size: 87.5%;
    }
}

`;

