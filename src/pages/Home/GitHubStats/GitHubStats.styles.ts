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

    @media screen and (max-width: 992px) {
        margin-bottom: 18px;
    }
  `

export const GitHubCardContent = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    width: 300px;
    gap: 12px;

    h1 {
        color: ${(props) => props.theme['yellow']};
        font-size: 24px;
    }

    h3 {
        text-transform: uppercase;
        font-size: 24px

    }

    @media screen and (max-width: 992px) {
        width: 225px;

        h1 {
            color: ${(props) => props.theme['yellow']};
            font-size: 20px;
        }

        h3 {
            text-transform: uppercase;
            font-size: 20px

        }
  }
`

export const GitHubStatItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    flex-wrap: wrap;
    
    @media screen and (max-width: 992px) {
        > :last-child {
            flex-basis: 100%;
        }
    }
`