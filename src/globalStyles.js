import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        font-family: "Roboto", sans-serif;
        display: block;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {}
    
    head {
        display: none;
    }

    script {
        display: none;
    }
`