import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    letter-spacing: 0.5px;
    font-smooth: subpixel-antialiased;

}

body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-text']};
}

border-style, input-security, textarea, ::after, button {
    font-size: 12px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    letter-spacing: 0.5px;
    font-smooth: subpixel-antialiased; }


h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  color: #fafafc;
  margin-bottom: 0;
  font-family: "Poppins", sans-serif;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;

}

/* line 35, ../scss/_common.scss */
h1 {
  font-size: 52px;
  font-weight: 800; }

/* line 40, ../scss/_common.scss */
h4 {
  font-size: 17px;
  font-weight: 600; }

/* line 45, ../scss/_common.scss */
h5 {
  font-size: 14px;
  font-weight: 600; }

/* line 50, ../scss/_common.scss */
h6 {
  font-size: 12px;
  font-weight: 400; 
  
}
`
