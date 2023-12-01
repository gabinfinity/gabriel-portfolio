import { Link } from "react-router-dom";
import AboutIcon from "../svgs/AboutIcon";
import HomeIcon from "../svgs/HomeIcon";
import PhoneIcon from "../svgs/PhoneIcon";
import { MenuBar, MenuBarBtn, MenuBarContent, MenuBarHeader } from "./Menu.styles";

export default function Menu() {
    return (
        <MenuBar>
            <MenuBarHeader>
                <MenuBarBtn>
                    <Link to='/'><HomeIcon /></Link>
                </MenuBarBtn>
            </MenuBarHeader>
            <MenuBarContent>
                <MenuBarBtn>
                    <Link to='/about'><AboutIcon /></Link>
                </MenuBarBtn>
                <MenuBarBtn>
                    <Link to='/contact'><PhoneIcon /></Link>
                </MenuBarBtn>
            </MenuBarContent>
        </MenuBar>
    )
}
