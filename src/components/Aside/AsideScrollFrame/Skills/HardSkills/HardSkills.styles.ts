import styled from "styled-components";

export const HardSkillsItemProgress = styled.div`
    width: 100%;
    margin: 0 auto 15px;

    h6 {
        padding-top: 12px;
    }
    .percentage {
        color: ${(props) => props.theme['gray-text']}
    }
`

export const HardSkillsItemHeading = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`