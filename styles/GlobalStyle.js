import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import fonts from "./fonts";

const GlobalStyle = createGlobalStyle`

    ${variables};
    ${fonts};
    
    html {
        box-sizing: border-box;
        overflow-x: hidden;
        scroll-behaviour: smooth; 
    }
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    html, body{
        width: 100%;
        overscroll-behavior: none;
    }
    body {
        position: relative;
        margin: 0;
        padding: 0;
        height: 100%;
        min-height: 400vh;
        background-color: var(--dark);
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        @media (max-width: 320px) {
            word-break: break-all;
        }
    }

    a {
        text-decoration: none;
    }

    .btn__secondary {
        border: 1px solid var(--pink);
        border-radius: 5px;
        padding: 10px 5rem 5px 5px;
        font-family: var(--clash-semibold);
        color: var(--pink);
        transition: .3s;

        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgb(0 0 0 / 0%);
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
    }

    .btn__secondary::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--pink);
        -webkit-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transform-origin: 50% 0;
        transform-origin: 50% 0;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    .btn__secondary:hover::before {
        transform: scaleY(1);
    }

    .btn__secondary:hover {
        color: var(--dark);
    }

`;

export default GlobalStyle;