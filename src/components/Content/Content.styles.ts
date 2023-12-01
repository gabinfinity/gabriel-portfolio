import styled from "styled-components";

export const ContentMainContainer = styled.main`
        position: relative;
        overflow: auto;
        width: 100%;
        height: calc(100vh - 30px);
        margin-right: 80px;
        -webkit-transition: 0.55s ease-in-out;
        transition: 0.55s ease-in-out;

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

export const ContentCurtain = styled.div`
        background: rgba(30, 30, 40, 0.88);
        position: absolute;
        z-index: 9;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        -webkit-transition: 0.55s ease-in-out;
        transition: 0.55s ease-in-out;
`