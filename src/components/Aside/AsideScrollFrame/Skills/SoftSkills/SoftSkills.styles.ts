import styled from "styled-components";

export const SoftSkillsItem = styled.div`
    flex-direction: column;
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