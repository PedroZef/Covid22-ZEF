import { createGlobalStyle } from 'styled-components';
import CovidImg from '../../assets/images/covid.jpg';

const globalStyle = createGlobalStyle `
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {
    background: url(${CovidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 {
    margin-bottom: 16px;
  }

  .pt-2 {
    padding-top: 16px;
  }

  .cursor {
    cursor: pointer;
  }
.fixarRodape {
     background: black;
     border-top: 1px solid #333;
     bottom: 0;
     left: 0;
     height: 40px;
     position: fixed;
     text-align: center;
     background-color: rgb(120, 205, 175);;
     width: 100%;
    background-position: center;
 }

`

export default globalStyle;