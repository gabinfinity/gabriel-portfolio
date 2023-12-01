import styled from "styled-components";

export const ArtTop = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  background-position: center;
  height: 330px;
  background-size: cover;
  background-image: url('https://miro.medium.com/v2/resize:fit:1358/0*eIhVp0KXrXSSHORN.gif');
`

export const BannerBack = styled.div`
  content: '';
  position: absolute;
  top: 38px;
  width: 90%;
  height: 30px;
  margin-left: 5%;
  -webkit-box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  box-shadow: 0 3px 8px 0 rgba(15, 15, 20, 0.2);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background: rgba(30, 30, 40, 0.95);`

export const ArtTopOverlay = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(30, 30, 40, 0.93)), color-stop(70%, rgba(30, 30, 40, 0.96)), color-stop(80%, rgba(30, 30, 40, 0.99)), to(#1e1e28));
    background-image: linear-gradient(180deg, rgba(30, 30, 40, 0.80) 0%, rgba(30, 30, 40, 0.96) 70%, rgba(30, 30, 40, 0.85) 80%, #1e1e28 100%); 

`

export const MyTopImage = styled.div`
    background-size: cover;
    background-position-y: -200px;
    background-position-x: center;
    position: absolute;
    top: 64px;
    height: 100%;
    width: 94%;
    left: 50%;
    transform: translateX(-50%);
    background-image: url('https://miro.medium.com/v2/resize:fit:1358/0*eIhVp0KXrXSSHORN.gif');
`

export const ImageEffect = styled.div`
    width: 94%;
    position: absolute;
    height: 100%;
    top: 64px;
    left: 50%;
    transform: translateX(-50%);
    background-image: -webkit-gradient(linear, left top, right top, color-stop(15%, rgba(45, 45, 58, 0.9)), color-stop(50%, rgba(45, 45, 58, 0.7)), to(rgba(43, 43, 53, 0.7)));
    background-image: linear-gradient(90deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%);
    `

export const BannerTitle = styled.div`
    width: 70%;
    position: absolute;
    left: 10%;
    top: 100px;
    -ms-flex-item-align: center;
    align-self: center;

    h1 {
        color: #fafafc;
    }
`
export const BannerText = styled.div`
    color: #fafafc;

    i {
        font-family: "Courier Prime";
        font-size: 16px;
        color: #FFC107;
    }
`

export const StatsArea = styled.div`
    display: flex;
    justify-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin-top: 40%;
`

export const SwiperContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 42px;
    padding-right: 42px;
    margin: auto;
    overflow: hidden;

    h4{
        margin-top: 32px;
    }

    .swiper-slide{
        transition: 1000ms all;
        margin-bottom: 32px;
        &:hover {
            -webkit-transform: scale(1.05);
            transform: scale(1.05);
        }
    }

    .swiper-button-next {
        color: transparent;
    }

    .swiper-button-prev{
        color: transparent;
    }

    .swiper-pagination {
        display: flex;
        justify-content: flex-start;
    }

    .swiper-pagination-bullet {
        border-radius: 4px;
        width: 20px;
        background-color: ${(props) => props.theme['gray-text']};
    }

    .swiper-pagination-bullet-active {
        background-color: ${(props) => props.theme['yellow']};
    }

`

export const GitHubStatsContainer = styled.div`
    flex-direction: column;
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-left: 42px;
    padding-right: 42px;
    overflow: hidden;

    h4 {
        margin-top: 32px;
        margin-bottom: 32px;
    }
`