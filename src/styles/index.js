import { createGlobalStyle } from 'styled-components';
import './fonts.css';
/* stylelint-disable */

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
    height: 100%;
    width: 100%;
  }

  a:active,
   a:focus {
    outline: none;
  }
  
  input, textarea {outline:none;}
  input:active, textarea:active {outline:none;}
  :focus {outline:none;}
  textarea {resize:none;}
  textarea {resize:vertical;}
  textarea {resize:horizontal;}
  
  ol,
  ul {
    list-style: none;
  }
  
  blockquote,
  q {
    quotes: none;
  }
  
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  body.no-scroll {
    overflow: hidden;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  
  html {
    font-size: 55px;
    width: 100%;
  }
  
  body {
    margin: 0;
    min-height: 100%;
    width: 100%;
    overflow: visible;
    color: #fff;
    background-color: ${props => props.theme.documentBody};
    
    &.modal {
      overflow: hidden;
      height: 100vh;
    }
  }
  
  #root {
    height: 100%;
  }
  
  :root {
      --ck-border-radius: 4px;
      --ck-font-size-base: 14px;
      --ck-custom-background: hsl(270, 1%, 29%);
      --ck-custom-foreground: hsl(255, 3%, 18%);
      --ck-custom-border: hsl(300, 1%, 22%);
      --ck-custom-white: hsl(0, 0%, 100%);
      --ck-color-base-foreground: var(--ck-custom-background);
      --ck-color-focus-border: hsl(208, 90%, 62%);
      --ck-color-text: hsl(0, 0%, 98%);
      --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
      --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);
      --ck-color-button-default-background: var(--ck-custom-background);
      --ck-color-button-default-hover-background: hsl(270, 1%, 22%);
      --ck-color-button-default-active-background: hsl(270, 2%, 20%);
      --ck-color-button-default-active-shadow: hsl(270, 2%, 23%);
      --ck-color-button-default-disabled-background: var(
        --ck-custom-background
      );
      --ck-color-button-on-background: var(--ck-custom-foreground);
      --ck-color-button-on-hover-background: hsl(255, 4%, 16%);
      --ck-color-button-on-active-background: hsl(255, 4%, 14%);
      --ck-color-button-on-active-shadow: hsl(240, 3%, 19%);
      --ck-color-button-on-disabled-background: var(--ck-custom-foreground);
      --ck-color-button-action-background: hsl(168, 76%, 42%);
      --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
      --ck-color-button-action-active-background: hsl(168, 76%, 36%);
      --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
      --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
      --ck-color-button-action-text: var(--ck-custom-white);
      --ck-color-button-save: hsl(120, 100%, 46%);
      --ck-color-button-cancel: hsl(15, 100%, 56%);
      --ck-color-dropdown-panel-background: var(--ck-custom-background);
      --ck-color-dropdown-panel-border: var(--ck-custom-foreground);
      --ck-color-split-button-hover-background: var(
        --ck-color-button-default-hover-background
      );
      --ck-color-split-button-hover-border: var(--ck-custom-foreground);
      --ck-color-input-background: var(--ck-custom-foreground);
      --ck-color-input-border: hsl(257, 3%, 43%);
      --ck-color-input-text: hsl(0, 0%, 98%);
      --ck-color-input-disabled-background: hsl(255, 4%, 21%);
      --ck-color-input-disabled-border: hsl(250, 3%, 38%);
      --ck-color-input-disabled-text: hsl(0, 0%, 46%);
      --ck-color-list-background: var(--ck-custom-background);
      --ck-color-list-button-hover-background: var(--ck-color-base-foreground);
      --ck-color-list-button-on-background: var(--ck-color-base-active);
      --ck-color-list-button-on-background-focus: var(
        --ck-color-base-active-focus
      );
      --ck-color-list-button-on-text: var(--ck-color-base-background);
      --ck-color-panel-background: var(--ck-custom-background);
      --ck-color-panel-border: var(--ck-custom-border);
      --ck-color-toolbar-background: var(--ck-custom-background);
      --ck-color-toolbar-border: var(--ck-custom-border);
      --ck-color-tooltip-background: hsl(252, 7%, 14%);
      --ck-color-tooltip-text: hsl(0, 0%, 93%);
      --ck-color-image-caption-background: hsl(0, 0%, 97%);
      --ck-color-image-caption-text: hsl(0, 0%, 20%);
      --ck-color-widget-blurred-border: hsl(0, 0%, 87%);
      --ck-color-widget-hover-border: hsl(43, 100%, 68%);
      --ck-color-widget-editable-focus-background: var(--ck-custom-white);
      --ck-color-link-default: hsl(190, 100%, 75%);
    }
 
`;
/* stylelint-enable */
