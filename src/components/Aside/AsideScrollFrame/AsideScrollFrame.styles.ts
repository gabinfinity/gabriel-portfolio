import styled from "styled-components";

export const ScrollFrame = styled.aside`
    width: 100%;
    flex-grow: 1;
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-basis: auto;
    align-items: center;
    overflow-y: scroll;

    &::-webkit-scrollbar {
            width: 1px;
        }

        &::-webkit-scrollbar-track {
            background: ${(props) => props.theme['strong-blue']};
        }

        &::-webkit-scrollbar-thumb {
            background: ${(props) => props.theme['yellow']};
        }

`

export const InfoBarAbout = styled.div `
    color: #8c8c8e;
    padding: 0 15px;
    margin-bottom: 20px;
    width: 100%;

    ul {
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
     }

        ul li {
        width: 100%;
        list-style-type: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        margin-bottom: 5px; }

        ul li:last-child {
            margin-bottom: 0;
}
`

export const SplitFrame = styled.div`
    margin: 0 auto;
    background: #646466;
    padding: 0.5px 0px;
    width: 85%;
    opacity: 0.3;

`

export const LangSkills = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: center;
    gap: 28px;

`

export const HardSkills = styled.div`
    width: 100%;
    margin-bottom: 15px;
    padding: 0 24px;

`

export const KnowledgeContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 15px;

`

export const SoftSkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 15px;
    gap: 5px;
    margin-bottom: 34px

`