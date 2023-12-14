import styled from "styled-components";

export const AppDiv = styled.div`
  padding: 15px;
  background: ${(props) => props.theme['gray-100']};
  width: 100vw;
  height: 100%;
  position: relative;
  overflow: hidden;
  scrollbar-width: none;
`

export const AppWrapper = styled.div`
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    background: ${(props) => props.theme['gray-200']};
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2); 

`

export const AppContainer = styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
`

export const AppInfoBar = styled.div`
    display: flex;
    flex-flow: column;
    background: ${(props) => props.theme['gray-300']};
    width: 290px;
    min-width: 290px;
    height: calc(100vh - 30px);
    position: relative;
    z-index: 999;
    -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    -webkit-transition: 0.55s ease-in-out;
    transition: 0.55s ease-in-out;

    @media screen and (max-width: 992px) {
        display: none;
        z-index: 0;
        width: 100%;
        min-width: 100%;
        margin-bottom: 35px;
    }
`