// Menu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import AboutIcon from '../svgs/AboutIcon';
import HomeIcon from '../svgs/HomeIcon';
import PhoneIcon from '../svgs/PhoneIcon';
import { MenuBar, MenuBarBtn, MenuBarContent, MenuBarHeader } from './Menu.styles';
import PlusIcon from '../svgs/PlusIcon';

interface MenuProps {
  showIfIsMobile: boolean;
  toggleAppInfoBar: () => void;
}

const Menu: React.FC<MenuProps> = ({ showIfIsMobile, toggleAppInfoBar }) => {
  return (
    <MenuBar>
      <MenuBarHeader>
        <MenuBarBtn>
          <Link to='/'>
            <HomeIcon />
          </Link>
        </MenuBarBtn>
      </MenuBarHeader>
      <MenuBarContent>
        {showIfIsMobile && (
          <>
            <MenuBarBtn>
              <Link to='/'>
                <HomeIcon />
              </Link>
            </MenuBarBtn>
            <MenuBarBtn>
              <Link to="#" onClick={toggleAppInfoBar}>
                <PlusIcon />
              </Link>
            </MenuBarBtn>
          </>
        )}
        <MenuBarBtn>
          <Link to='/about'>
            <AboutIcon />
          </Link>
        </MenuBarBtn>
        <MenuBarBtn>
          <Link to='/contact'>
            <PhoneIcon />
          </Link>
        </MenuBarBtn>
      </MenuBarContent>
    </MenuBar>
  );
};

export default Menu;
