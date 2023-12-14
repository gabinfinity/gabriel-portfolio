import styled from "styled-components";

export const MainButtonStyle = styled.div`
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 24px;
    align-items: flex-start;
`

export const Btn = styled.button`
    width: 166px;
    height: 43px;
    text-transform: uppercase;
    -webkit-box-shadow: 0 1px 4px 0 rgba(15, 15, 20, 0.1);
    box-shadow: 0 1px 4px 0 rgba(15, 15, 20, 0.1);
    background: ${(props) => props.theme['yellow']};
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    border: none;
    transition: 0.4s ease-in-out;
    cursor: pointer;

    span {
        font-size: 12px;
        -ms-flex-item-align: center;
        align-self: center;
        font-weight: 600;
        letter-spacing: 1.5px;
        color: ${(props) => props.theme['gray-300']};
  }

  &:hover {
    -webkit-transform: translateY(-2px);
     transform: translateY(-2px);
  }
  `