import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./Typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
    ${normalize()}
    html{
        font-size:16px;
        box-size: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: ${primaryFont};
    }

    main{
        width: 90%;
        margin: 0 auto;
    }
`;