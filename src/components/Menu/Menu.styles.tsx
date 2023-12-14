import styled from "styled-components";

export const MenuBar = styled.div`
    display: flex;
    flex-direction: column;
    background: #20202a;
    width: 75px;
    height: calc(100vh - 30px);
    position: absolute;
    z-index: 99;
    right: 0;
    top: 0;
    bottom: 0;
    -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    -webkit-transition: 0.55s ease-in-out;
    transition: 0.55s ease-in-out;

    @media screen and (max-width: 992px) {
        position: fixed;
        bottom: 0;
        height: 50px;
        right: auto;
        top: auto;
        left: 0;
        width: 100%;
    }
`

export const MenuBarHeader = styled.div`
    width: 100%;
    height: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 9;
    -webkit-box-shadow: 0 1px 4px 0 rgba(15, 15, 20, 0.1);
    box-shadow: 0 1px 4px 0 rgba(15, 15, 20, 0.1);
    background: linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%);

    @media screen and (max-width: 992px) {
        display: none;
    }
`

export const MenuBarBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;

    a {
        text-decoration: none;
        color: inherit;
    }

    svg {
        width: 28px;
        fill: ${(props) => props.theme['gray-text']};
        transition: 0.2s ease-in-out;

        &:hover {
            path {
                    fill: ${(props) => props.theme['yellow']};
            }
        }
    }
`;

export const MenuBarContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 48px;
    align-items: center;
    justify-content: center;
    pointer-events: all;

    @media screen and (max-width: 992px) {
        flex-direction: row;
        gap: 70px;
    }
`;
