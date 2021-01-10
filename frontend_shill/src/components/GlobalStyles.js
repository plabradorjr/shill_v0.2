import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        /* font-family: 'Montserrat', sans-serif; */
        width: 100%;
        background-color: #1d0464;
        background-image: linear-gradient(to right top, #161D2E 10%, #393B6E 90%);

    }
    h2{
        font-size: 30px;
        font-family: 'Roboto', sans-serif;
        color: #f5f6fa;
    }
    h3{
        font-size: 1rem;
        color: #f5f6fa;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1rem;
        line-height: 100%;
        color: #f5f6fa;
    }
    a{
        text-decoration: none;
        color: #f5f6fa;
    }
    img{
        display: block;
        border-radius: 1rem;
    }
    input{
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;