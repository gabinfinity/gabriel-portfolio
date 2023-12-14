import { Link } from "react-router-dom";
import AboutIcon from "../svgs/AboutIcon";
import HomeIcon from "../svgs/HomeIcon";
import PhoneIcon from "../svgs/PhoneIcon";
import { MenuBar, MenuBarBtn, MenuBarContent, MenuBarHeader } from "./Menu.styles";
import { useEffect, useState } from "react";

export default function Menu() {

    const [showHomeBtn, setShowHomeBtn] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowHomeBtn(window.innerWidth <= 992);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <MenuBar>
            <MenuBarHeader>
                <MenuBarBtn>
                    <Link to='/'><HomeIcon /></Link>
                </MenuBarBtn>
            </MenuBarHeader>
            <MenuBarContent>
                {showHomeBtn && (
                    <MenuBarBtn>
                        <Link to='/'><HomeIcon /></Link>
                    </MenuBarBtn>
                )}
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
