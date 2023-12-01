import styled from "styled-components";

export const LangSkillsItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: fit-content;
    text-align: center;
    margin-bottom: 15px;
    padding-top: 30px;

`

export const LangSkillsItemCircleProgress = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    margin: 0 auto 15px;

    svg {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h6 {
        padding-top: 5px;
    }

    h2 {
        font-size: 11px !important;
        font-weight: 300;
        font-family: "Poppins", sans-serif;
    }
`