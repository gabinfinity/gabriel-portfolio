import styled from "styled-components";

export const AboutTitle = styled.div`
    padding: 48px 24px 48px 24px;
    width: 100%;
    text-align: center;
`

export const AboutConteiner = styled.div`
    display: flex;
    justify-content: flex;
    align-items: center;
    padding: 48px 48px 0 48px;
    width: 100%;
`

export const AboutArticle = styled.article`
    color: #fafafc;

    i {
        font-family: "Courier Prime";
        font-size: 16px;
        color: #FFC107;
    }
`

export const AboutImage = styled.div`

    img {

        @keyframes float {
            0% {
                transform: translatey(0px);
            }
            50% {
                transform: translatey(-20px);
            }
            100% {
                transform: translatey(0px);
            }
        }
        
        width: 260px;
        animation: float 6s ease-in-out infinite;
    }
`
