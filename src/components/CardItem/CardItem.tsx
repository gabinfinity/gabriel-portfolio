import BrowserIcon from "../svgs/BrowserIcon";
import FullscreenIcon from "../svgs/FullscreenIcon";
import { GithubIcon } from "../svgs/GithubIcon";
import { CarouselItem, CrouselItemDetails, ProjectNameContainer, TechContainer, TechUsed } from "./CardItem.styles";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface CardItemTypes {
  projectName: string,
  projectDescription: string,
  projectImage: string,
  projectCodeUrl: string,
  projectProductiontUrl: string,
  TechName: string[]
}

Fancybox.bind("[data-fancybox]", {
});

export default function CardItem(props: CardItemTypes) {

  return (
    
    <CarouselItem>
        <img src={props.projectImage} />
      <CrouselItemDetails>
        <ProjectNameContainer>
          <h5>{props.projectName}</h5>
          <a href={props.projectCodeUrl}>
            <GithubIcon />
          </a>
          <a href={props.projectProductiontUrl}>
            <BrowserIcon />
          </a>
          <a href={props.projectImage} data-fancybox={props.projectName} data-caption={props.projectName}>
            <FullscreenIcon />
          </a>
        </ProjectNameContainer>
        <h6>{props.projectDescription}</h6>

        <TechContainer>
          {props.TechName.map((tech, index) => (
            <TechUsed key={index}>
              {tech}
            </TechUsed>
          ))}
        </TechContainer>
        
      </CrouselItemDetails>
    </CarouselItem>

  )
}

