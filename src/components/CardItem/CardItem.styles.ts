 import styled from "styled-components";

 export const CarouselItem = styled.div`
 min-width: 270px;
 height: 270px;
 overflow: hidden;
 margin-top: 30px;
 display: inline-block;
 justify-content: space-between;
 cursor: pointer;
 transition: 1000ms all;
 transform-origin: center left;
 position: relative;

 img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
 }

`

export const CrouselItemDetails = styled.div`
    background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 0.9)),
    to(rgba(0, 0, 0, 0))
  );
  background: linear-gradient(
    to top,
    rgba(24, 24, 34, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  font-size: 10px;
  opacity: 0;
  -webkit-transition: 450ms opacity;
  transition: 450ms opacity;
  padding: 10px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px;

  ${CarouselItem}:hover & {
    opacity: 1;
  }

  span {
  font-size: 0.9rem;
  color: #2ecc71;
  }

  h5 {
    color: #fff;
    margin: 5px 0;
  }

  h6 {
    color: #fff;
    margin: 5px 0;
  }

`

export const ProjectNameContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
    margin-bottom: 2px;
    margin-left: 8px;
    border-radius: 50%;
    background-color: ${(props) => props.theme['strong-blue']};
  }

  svg {
      height: 23px;
      width: 23px;
      transition: 0.2s ease-in-out;
      path {
        fill: ${(props) => props.theme['white']};
      }

      &:hover {
        path {
          fill: ${(props) => props.theme['yellow']};
        }
      }
    }
`


export const TechContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 6px;
  flex-wrap: wrap;
`

export const TechUsed = styled.div`
    flex-direction: column;
    margin-top: 2px;
    color: ${(props) => props.theme['grey-text']};
    background: ${(props) => props.theme['strong-blue']};
    padding: 3px 10px;
    border-radius: 15px;
    box-shadow: inset 0 3px 8px 0 ${(props) => props.theme['box-shadow']};
    font-size: 10px;
    width: fit-content;

    &:hover {
        color: ${(props) => props.theme['yellow']};
    }
`
