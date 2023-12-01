import styled from "styled-components";

export const AvatarContainer = styled.div`
    width: 90px;
    height: 90px;
    margin: 0 auto;
    border-radius: 50%;
    position: relative;
    margin-bottom: 15px;

    a {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        outline: inherit;
        -webkit-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
    }

    i {
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(159deg, rgba(45, 45, 58, 0.88) 0%, rgba(43, 43, 53, 0.88) 100%);
        width: 30px;
        height: 30px;
        text-align: center;
        -ms-flex-item-align: center;
        align-self: center;
        font-weight: 700;
        font-size: 11px;
        line-height: 30px;
        color: #fafafc;
        border-radius: 50%;
        opacity: 0;
        z-index: 1;
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
        cursor: pointer;

        svg {
            height: 16px;
            width: 16px;
            fill: white
        }

        &:hover {
            opacity: 1;
            -webkit-transform: scale(1.07);
            transform: scale(1.07);
                
        }

    }

    img {
        position: absolute;
        width: 90px;
        height: 90px;
        -o-object-fit: cover;
        object-fit: cover;
        border-radius: 50%;
        cursor: pointer;

          &:hover {
            opacity: 1;
            -webkit-transition: 0.2s ease-in-out;
            transition: 0.2s ease-in-out;
            outline: inherit; 
            
            &+i {
                opacity: .7; 
                
        }

    }
}
`

export const AvatarLightStatus = styled.div`
    z-index: 2;

    &:before {
        content: '';
            position: absolute;
            bottom: -1px;
            right: 1px;
            background: #fafafc;
            height: 23px;
            width: 23px;
            border-radius: 50%;
            -webkit-animation: puls 1s infinite;
                    animation: puls 1s infinite; 
        }

        @-webkit-keyframes puls {
        0% {
            -webkit-transform: scale(0.6);
                    transform: scale(0.6);
            opacity: 1; }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            opacity: 0; } }
        @keyframes puls {
        0% {
            -webkit-transform: scale(0.6);
                    transform: scale(0.6);
            opacity: 1; }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            opacity: 0; } 
}

`

export const AvatarLightStatusColor = styled.div`
    position: absolute;
    bottom: 3px;
    right: 5px;
    height: 15px;
    width: 15px;
    background: #FFC107;
    border-radius: 50%;
    -webkit-transition: 0.4s ease-in-out;
    transition: 0.4s ease-in-out;

    &::after {
        position: relative;
        content: 'Olá, estou disponível para trabalhos';
        width: 115px;
        display: block;
        padding: 5px 10px;
        top: -10px;
        left: 28px;
        font-size: 10px;
        font-weight: 200;
        color: #8c8c8e;
        -webkit-box-shadow: 0 1px 4px 0 rgba(15, 15, 20, 0.1);
        box-shadow: 0 1px 4px 0 rgba(15, 15, 20, 0.1);
        background: #191923;
        opacity: 0;
        pointer-events: none;
        -webkit-transform: translateX(20px);
        transform: translateX(20px);
        -webkit-transition: 0.4s ease-in-out;
        transition: 0.4s ease-in-out;
        text-align: left;
    }

    &:hover {
        -webkit-transform: scale(1);
        transform: scale(1);
    
    &::after {
        opacity: 1;
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    
    &::before {
        opacity: 1;
        -webkit-transform: translateX(0) rotate(45deg);
        transform: translateX(0) rotate(45deg); 
    }
}

`