import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        background-color: #353b48;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #f5f6fa;
    }
    h3{
        font-size: 1rem;
        color: #f5f6fa;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1rem;
        line-height: 200%;
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