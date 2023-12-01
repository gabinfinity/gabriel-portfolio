import { Avatar } from "../Avatar/Avatar";
import { NameAndJob } from "../NameAndJob/NameAndJob";
import { HeaderContainer } from "./Header.styles";

export function Header() {
  return (
    <HeaderContainer>
        <Avatar avatarURL="https://github.com/gabinfinity.png"/>
        <NameAndJob myName="Gabriel Manzoni" myJobDescription="FullStack Developer and student"/>
    </HeaderContainer>
  )
}
