import styled from "styled-components";

export const NameAndJobArea = styled.div`
    color: ${(props) => props.theme['white-premium']};
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    width: 60%;

    a {
        color: ${(props) => props.theme['white-premium']};
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;

    &:hover {
        color: ${(props) => props.theme['yellow']};
        }
    }
`

export const MyJobDescription = styled.div`
    font-size: 11px;
    color: ${(props) => props.theme['gray-text']};
    width:100%;
`