import styled from "styled-components";

export const FormArea = styled.div`
    background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
    -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
    padding: 30px;
    margin-bottom: 100px;
    width: 100%;
  `

export const FormField = styled.div`
    margin-bottom: 30px;
    position: relative;

    label {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: ${(props) => props.theme['gray-text']};
        position: absolute;
        height: 50px;
        width: 50px;
        background: ${(props) => props.theme['gray-300']};
        top: 0;
        left: 0;
        padding: 0 15px;
        text-transform: uppercase;
        font-size: 11px;
        line-height: 50px;
        letter-spacing: 1px;
        font-weight: 500;
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;

        svg {
            width: 14px;
            path {
                fill: ${(props) => props.theme['gray-text']};
            }
        }

        
    }
`

export const FormInput = styled.input`
    height: 50px;
    width: 100%;
    background: linear-gradient(159deg, #252532 0%, #23232d 100%);
    border: none;
    color: ${(props) => props.theme['white-premium']};
    padding-left: 65px;
    padding-right: 15px;
    -webkit-box-shadow: inset 0 1px 4px 0 rgba(15, 15, 20, 0.1);
    box-shadow: inset 0 1px 4px 0 rgba(15, 15, 20, 0.1);
    margin-bottom: 0;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    outline: none;

    &:focus + label {
        background: ${(props) => props.theme['yellow']};

        svg {
            path {
                fill: ${(props) => props.theme['black']};
            }
        }
        
    }


`

  export const FormTextArea = styled.textarea`
    padding-top: 16px;
    height: 100%;
    width: 100%;
    background: linear-gradient(159deg, #252532 0%, #23232d 100%);
    border: none;
    color: ${(props) => props.theme['white-premium']};
    padding-left: 65px;
    padding-right: 15px;
    -webkit-box-shadow: inset 0 1px 4px 0 rgba(15, 15, 20, 0.1);
    box-shadow: inset 0 1px 4px 0 rgba(15, 15, 20, 0.1);
    margin-bottom: 0;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;
    outline: none;
    overflow-y: scroll;
    resize: none;

    &::-webkit-scrollbar {
            width: 2px;
        }

        &::-webkit-scrollbar-thumb {
            background: ${(props) => props.theme['yellow']};
        }

    &:focus + label {
            background: ${(props) => props.theme['yellow']};

            svg {
                path {
                    fill: ${(props) => props.theme['black']};
                }
            }
    }

  `
  
  export const FormStatus = styled.div`
    display: flex;
    flex-direction: column;
    
    h1 {
        font-size: 24px;
    }

    h6 {
        font-size: 16px;
    }
  `