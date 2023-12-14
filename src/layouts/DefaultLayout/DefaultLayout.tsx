import { useEffect, useState } from "react";
import { AsideScrollFrame } from "../../components/Aside/AsideScrollFrame/AsideScrollFrame";
import { Footer } from "../../components/Aside/AsideScrollFrame/Footer/Footer";
import Content from "../../components/Content/Content";
import { Header } from "../../components/Header/Header/Header";
import Menu from "../../components/Menu/Menu";
import { AppContainer, AppDiv, AppInfoBar, AppWrapper } from "./DefaultLayout.styles";

export const DefaultLayout: React.FC = () => {
    const [appInfoBarVisible, setAppInfoBarVisible] = useState(true);
  
    const toggleAppInfoBar = () => {
      setAppInfoBarVisible(!appInfoBarVisible);
    };


    const [showIfIsMobile, setshowIfIsMobile] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setshowIfIsMobile(window.innerWidth <= 992);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  
    return (
      <AppDiv>
        <AppWrapper>
          <AppContainer>
            <AppInfoBar style={{ display: showIfIsMobile ? (appInfoBarVisible ? 'none' : 'flex') : (appInfoBarVisible ? 'flex' : 'none') }}>
              <Header />
              <AsideScrollFrame />
              <Footer />
            </AppInfoBar>
            <Menu showIfIsMobile={showIfIsMobile} toggleAppInfoBar={toggleAppInfoBar} />
            <Content />
          </AppContainer>
        </AppWrapper>
      </AppDiv>
    );
  };
  
  export default DefaultLayout;
