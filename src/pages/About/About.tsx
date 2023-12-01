import { AboutArticle, AboutConteiner, AboutImage, AboutTitle } from './About.styles'
import { TypeAnimation } from 'react-type-animation'
import { ArtTop, ArtTopOverlay } from '../Home/Home.styles'

export function About() {
    return (
        <>
            <ArtTop>
                <ArtTopOverlay>
                    <AboutTitle>
                        <h1>How about I tell you a little more about myself?</h1>
                    </AboutTitle>
                    <AboutConteiner>
                        <AboutArticle>
                            <i>{`<about> `}</i>
                            <TypeAnimation
                                sequence={[
                                    'Hello, my name is Gabriel, and I am 24 years old. Since I was a child, I always wanted to know how things worked, and this sparked my curiosity. In 2008 I got my first computer, and the world I discovered was something that fascinated me. As a child, playing the first browser games at the time, I always wondered how it was done, and some had alternative versions with open source, and that was the trigger for me. As a 12-year-old child, I immersed myself in the world of codes, downloading various source codes and watching tutorials. Over time I became interested in other things, and acquired new knowledge, which certainly made me even more certain that this is my field. I can describe myself as a persistent, detail-oriented, communicative and perfectionist person? I love working in groups, after all, more heads are better than one, but at the same time I like working alone, especially when I need to solve a problem.',
                                    500
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '16px', display: 'inline-block', fontFamily: 'Courier Prime' }}
                            /* repeat={Infinity} */
                            />
                            <i>{` </about>`}</i>
                        </AboutArticle>
                        <AboutImage>
                            <img src="/aboutImg.webp" alt="avatar" draggable="false" />
                        </AboutImage>
                    </AboutConteiner>
                </ArtTopOverlay>
            </ArtTop>
        </>
    )
}
