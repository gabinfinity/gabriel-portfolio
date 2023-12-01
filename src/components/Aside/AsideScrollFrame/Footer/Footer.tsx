import { GithubIcon } from '../../../svgs/GithubIcon'
import { InstagramIcon } from '../../../svgs/InstagramIcon'
import { LinkedinIcon } from '../../../svgs/LinkedinIcon'
import { TwitterIcon } from '../../../svgs/TwitterIcon'
import { FooterContainer } from './Footer.styles'

const socialMediaURLs = {
    linkedin: "https://www.linkedin.com/in/gabriel-manzoni-bb4796249/",
    github: "https://github.com/gabinfinity",
    instagram: "https://www.instagram.com/gabmzni",
    twitter: "https://twitter.com/gabrielmmo",
};

export function Footer() {
  return (
    <FooterContainer>
        <a href={socialMediaURLs.linkedin} target="_blank">
            <i><LinkedinIcon /></i>
        </a>
        <a href={socialMediaURLs.github} target="_blank">
            <i><GithubIcon /></i>
        </a>
        <a href={socialMediaURLs.instagram} target="_blank">
            <i><InstagramIcon /></i>
        </a>
        <a href={socialMediaURLs.twitter} target="_blank">
            <i><TwitterIcon /></i>
        </a>
    </FooterContainer>
  )
}
