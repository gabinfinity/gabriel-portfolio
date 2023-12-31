import styled from "styled-components";

export const AboutTitle = styled.div`
    padding: 48px 24px 48px 24px;
    width: 100%;
    text-align: center;

    @media screen and (max-width: 1233px) {
        h1 {
            font-size: 42px;
        }
    }

    @media screen and (max-width: 992px) {
        h1 {
            font-size: 36px;
        }
    }
`

export const AboutConteiner = styled.div`
    display: flex;
    justify-content: flex;
    align-items: center;
    padding: 48px 48px 0 48px;
    width: 100%;

    @media screen and (max-width: 992px) {
        flex-direction: column-reverse;
    }
`

export const AboutArticle = styled.article`
    color: ${(props) => props.theme['white-premium']};

    i {
        font-family: "Courier Prime";
        font-size: 16px;
        color: ${(props) => props.theme['yellow']};
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

    @media screen and (max-width: 1233px) {
        h1 {
            width: 150px;
        }
    }

    @media screen and (max-width: 992px) {
        img {
            width: 100px;
        }
    }
`
