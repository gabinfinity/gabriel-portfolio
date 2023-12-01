import { ExpandIcon } from "../../svgs/ExpandIcon";
import { AvatarContainer, AvatarLightStatus, AvatarLightStatusColor } from "./Avatar.styles";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface AvatarType {
    avatarURL: string
}

Fancybox.bind("[data-fancybox]", {
});

export function Avatar(props: AvatarType) {
  return (
    <AvatarContainer>
        <a href={props.avatarURL} draggable="false" data-fancybox="profile-photo" data-caption="My profile photo">
            <img src={props.avatarURL} alt="avatar" draggable="false" />
            <i><ExpandIcon /></i>
        </a>
        <AvatarLightStatus>
            <AvatarLightStatusColor />
        </AvatarLightStatus>
    </AvatarContainer>
  )
}