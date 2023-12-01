

import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    padding: 0 35px;
    height: 50px;
    background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);
    position: absolute;
    bottom: 0;
    -webkit-box-shadow: 0 1px 4px 0 rgba(15, 15, 20, 0.1);
            box-shadow: 0 1px 4px 0 rgba(15, 15, 20, 0.1);
    left: 0;
    width: 100%;
    z-index: 999;

    a {
      -webkit-transition: 0.2s ease-in-out;
      transition: 0.2s ease-in-out;

      &:hover {
        svg {
            text-shadow: 0 0 3px rgba(250, 250, 252, 0.4);
            color: ${(props) => props.theme['yellow']};
            fill: ${(props) => props.theme['yellow']}; /* Substitua 'cor_hover' pela cor desejada no hover */
        }
    }

    svg {
      height: auto;
      width: 16px;
      fill: ${(props) => props.theme['gray-text']};
      transition: 0.2s ease-in-out;
    }
  }
`;