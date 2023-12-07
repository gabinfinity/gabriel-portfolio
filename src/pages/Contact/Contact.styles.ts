import styled from "styled-components";

export const ContactCardsContainer = styled.div`
    display: flex;
    max-width: 100%;
    padding-left: 48px;
    padding-right: 48px;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 992px) {
        > :last-child {
            flex-basis: 100%;
        }
    }
    
`

export const FormAreaContainer = styled.div`
    display: flex;
    width: 100%;
    padding-left: 48px;
    padding-right: 48px;
    justify-content: flex-start;
`

export const ContactTitle = styled.h4`
    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 48px;
`