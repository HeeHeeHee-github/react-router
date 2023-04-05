import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
}
body {
  font-family: 'GmarketSansMedium';
  padding-top: 1em;
  white-space: pre-wrap;
}
ul, ol {
list-style: none; 
padding-left: 0px;
} `
export default GlobalStyle
