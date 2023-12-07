import styled from "styled-components";

export const ContactCardStyle = styled.div`
    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
    -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    padding: 30px;
    margin-bottom: 30px;
    width: 300px;

    @media screen and (max-width: 992px) {
        margin-bottom: 14px;
        width: 240px;
    }
  `

export const ContactCardContent = styled.div`
    justify-content: center;
    align-items: center;

    li {
        list-style-type: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-bottom: 5px;
    }

    ul li:last-child {
        margin-bottom: 0;
    }

    @media screen and (max-width: 992px) {
        max-width: 100%;

        h6 {
            font-size: 11px;
        }

        span {
            font-size: 11px;
        }
        
    }
`