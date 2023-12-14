import styled from "styled-components";

export const Knowledge = styled.div`
    margin-bottom: 5px;
    display: flex;
    gap: 10px;
    padding: 0 10px;

    svg {
            height: auto;
            width: 12px;
            fill: ${(props) => props.theme['yellow']};
        }

    li {
      list-style-type: none;
      color: ${(props) => props.theme['gray-text']};
}

`