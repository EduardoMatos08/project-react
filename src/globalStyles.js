import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        font-family: "Roboto", sans-serif;
        display: block;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
        width: 100%;
    }
    
    head {
        display: none;
    }

    body {
        height: auto;
        width: 100%;
    }

    script {
        display: none;
    }

    #root {
        height: 100%;
    }
`