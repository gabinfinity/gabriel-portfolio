import styled from "styled-components";

export const GitHubCardStyle = styled.div`
    display: flex;
    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
    -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    padding: 10px;
    margin-bottom: 30px;
    height: 130px;
    max-width: 100%;
    justify-content: center;
    align-items: center;
  `

export const GitHubCardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    gap: 16px;

    h1 {
        color: ${(props) => props.theme['yellow']};
        font-size: 20px;
    }

    h3 {
        text-transform: uppercase;
        font-size: 20px;
    }

    @media screen and (max-width: 1400px) {
        h1 {
            color: ${(props) => props.theme['yellow']};
            font-size: 18px;
        }

        h3 {
            text-transform: uppercase;
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1280px) {
        h1 {
            color: ${(props) => props.theme['yellow']};
            font-size: 16px;
        }

        h3 {
            text-transform: uppercase;
            font-size: 16px;
        }
    }

    @media screen and (max-width: 1180px) {
        h1 {
            color: ${(props) => props.theme['yellow']};
            font-size: 12px;
        }

        h3 {
            text-transform: uppercase;
            font-size: 12px;
        }
    }

    @media screen and (max-width: 992px) {
        h1 {
            color: ${(props) => props.theme['yellow']};
            font-size: 20px;
        }

        h3 {
            text-transform: uppercase;
            font-size: 20px;
        }
    }
`;