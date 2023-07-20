import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    .root {
        font-size: 62.5%;
    }

    body {
        background-color: black;
    }

    a {
        text-decoration: none;
        color: white;
    }

    button, li {
        transition: transform .3s;
        font-family: "Raleway";
        font-weight: 400;
        font-size: 1rem;
    }
    
    button, li:hover {
        transform: scale(1.1);
    }

`;