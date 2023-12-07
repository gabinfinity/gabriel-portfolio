import MainButton from "../../components/MainButton/MainButton";
import { ArtTop, ArtTopOverlay, BannerBack, BannerText, BannerTitle, GitHubStatsContainer, SwiperContainer, ImageEffect, MyTopImage, StatsArea, TopContainer } from "./Home.styles";
import { TypeAnimation } from 'react-type-animation';
import CardItem from "../../components/CardItem/CardItem";
import { MyStats } from "./MyStats/MyStats";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ApiGithub from "./ApiGithub/ApiGithub";

export function Home() {

    return (
        <>
            <TopContainer>
                <ArtTop>
                    <BannerBack />
                    <ArtTopOverlay>
                        <MyTopImage />
                        <ImageEffect>
                            <BannerTitle>
                                <h1>Hi, my name is Gabriel. And this is me.</h1>
                                <BannerText>
                                    <i>{`<code> `}</i>
                                    <TypeAnimation
                                        sequence={[
                                            'I like to code software',
                                            2000,
                                            'I like to work hard',
                                            2000,
                                            'I like to play a lot games',
                                            2000,
                                            'And I really love coffee',
                                            2000
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        style={{ fontSize: '16px', display: 'inline-block', fontFamily: 'Courier Prime' }}
                                        repeat={Infinity}
                                    />
                                    <i>{` </code>`}</i>
                                </BannerText>
                                <MainButton to='/about' buttonText='See More' />
                            </BannerTitle>
                        </ImageEffect>
                    </ArtTopOverlay>
                </ArtTop>
            </TopContainer>
            <StatsArea>
                <MyStats numberStats='+1' textStats='Years Experience' />
                <MyStats numberStats='4' textStats='Completed Projecs' />
                <MyStats numberStats='2' textStats='Certificates' />
                <MyStats numberStats='5' textStats='Happy Customers' />
            </StatsArea>
            <SwiperContainer>
                <h4>My personal projects</h4>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1500: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true,
                    }}
                    navigation
                    pagination={{ clickable: true }}

                >
                    <SwiperSlide><CardItem projectImage='https://cdn.discordapp.com/attachments/770108856143314945/1179267368367706112/image.png' projectName='Portifolio' projectDescription='Thats my portifolio, my first personal project after some code challenges' TechName={['React', 'Typescript', 'Styled Components']} projectCodeUrl='https://github.com/gabinfinity' projectProductiontUrl='https://manzoni.dev/' /></SwiperSlide>
                    <SwiperSlide><CardItem projectImage='https://cdn.discordapp.com/attachments/770108856143314945/1179268166120128542/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f76696c6d6172626174697374612f696d6167652f75706c6f61642f76313637313533393833372f446576656c6f706d656e742f49676e6974652f636f666665652d64656c69766572795f636477776f362e706e67.png' projectName='Coffee Delivery' projectDescription='An restaurant site/app for make orders and send them to the restaurant' TechName={['React', 'Typescript', 'Styled Components']} projectCodeUrl='https://github.com/gabinfinity' projectProductiontUrl='https://braflix.app/' /></SwiperSlide>
                    <SwiperSlide><CardItem projectImage='https://s3-alpha.figma.com/hub/file/1989493582/a062aa8f-183a-4410-bfa3-a9d206a59095-cover.png' projectName='Ignite Timer' projectDescription='A simple time counter for you focus on your task' TechName={['React', 'Typescript', 'Styled Components']} projectCodeUrl='https://github.com/gabinfinity/ignite-ts' projectProductiontUrl='#' /></SwiperSlide>
                    <SwiperSlide><CardItem projectImage='https://cdn.discordapp.com/attachments/770108856143314945/1179269942416261140/image.png' projectName='Braflix' projectDescription='A web-app to watch movies and TV Shows for free. Made scraping another sites content and TMDB API' TechName={['Next.js', 'Typescript', 'Tailwind']} projectCodeUrl='https://github.com/gabinfinity' projectProductiontUrl='https://braflix.app/' /></SwiperSlide>
                    <SwiperSlide><CardItem projectImage='https://cdn.discordapp.com/attachments/770108856143314945/1179265782379708486/preview.png' projectName='TO-DO List' projectDescription='A simple TODO list made for you organize your daily tasks.' TechName={['React', 'CSS Modules']} projectCodeUrl='https://github.com/gabinfinity/todo-list' projectProductiontUrl='#' /></SwiperSlide>
                    {/* <SwiperSlide></SwiperSlide> */}
                </Swiper>
            </SwiperContainer>
            <GitHubStatsContainer>
                <h4>Github stats</h4>
                <ApiGithub />
            </GitHubStatsContainer>
        </>
    )
}
