import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline:0;
        font-weight:700;
    }

    body{
        background-color: #fff;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing:antilialiased !important;
        font-family: sans-serif;
    }
`;

export default GlobalStyle;
