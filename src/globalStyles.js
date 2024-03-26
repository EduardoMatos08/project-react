import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        display: block;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    head {
        display: none;
    }

    script {
        display: none;
    }
`