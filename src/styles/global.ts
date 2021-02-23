import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  /* Set 1rem to the browser default (16px) */
  font-size: 62.5%; 
}
body {
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 1rem;
  margin: 0;
}

#root {
  min-width: 100%;
  min-height: 100%;
  position: relative;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1;
}
.general-toast {
  padding-left: 1.6rem;
  background-color: #77cc33;
  height: 4.8rem;
  min-height: .5rem;
  border-radius: 4px;
  margin: auto;
  margin-top: 2rem;
  width: 90%;
  max-width: 60rem;
  box-shadow: 0rem .2rem .4rem 0rem #000;
}
@media only screen and (max-width: 48rem) {
  .general-toast {
    margin-top: 6rem;
    }
  }
a {
  text-decoration: none;
}
.ReactModal__Overlay {
  z-index: 5;
  overflow-y: scroll;
}
`;

export default GlobalStyle;
