import { createGlobalStyle } from 'styled-components';
import { white, accent, primary, primaryLight } from 'constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-family: proxima-nova, sans-serif;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
    ${MEDIA.PHONE`
    font-size: 42.5%;
    ` }
  }

  body {
    font-family: proxima-nova, sans-serif;
    color: white;
    line-height: 1;
    color: white;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${white};
    &:hover{
      color:${accent};
      transition: all 0.3s ease-in-out;
    }
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
    &:last-child{
      margin-bottom: 0;
    }
  }
  
  .timeline-card-content.active{
      border-top: 1px solid #fff !important;
      border-bottom: 1px solid #fff !important;
      background-color: ${primaryLight} !important;
      padding: 0.5rem;
      border-radius:0;
    }

    .timeline-card-content{
      background-color: ${primary} !important;
      padding: 00rem !important;
      filter: none !important;
      border-top:none !important;
      border-bottom:none !important;

    }
    
  .card-title {
      font-size:2rem !important;
      font-weight:300 !important;
      font-family: proxima-nova, sans-serif !important;
      color: ${white} !important;
      line-height:2.4rem !important;
  }
  .timeline-horz-card-wrapper{
    max-width:600px;
  }
  .timeline-main-wrapper{
    margin:5rem;
  }
  .timeline-item-title {
      font-size: 1.6rem !important;
      font-weight:300 !important;
      font-family: proxima-nova, sans-serif !important;
      color: ${white} !important;
  }

  button, button:active, button:focus {
    background:none;
    margin:0;
    padding:0;
    border:none;
    outline:0;
    appearance: a;
    writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: inherit;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inherit;
    text-align: inherit;
    align-items: inherit;
    cursor: pointer;
    background-color: inherit;
    box-sizing: border-box;
    margin: 0em;
  }

  scroll-container {
    display: block;
    overflow-y: hidden;
    scroll-behavior: smooth;
  }

  strong{
    color: ${accent};
  }

  [data-reach-dialog-content] {
    width: 40vw;
    color: ${primary};
    padding: 7rem;
    font-size: 2.4rem;
    font-family: proxima-nova, sans-serif;
    margin: 10vh auto;
    background: white;
    outline: none;
  }

  

`;

