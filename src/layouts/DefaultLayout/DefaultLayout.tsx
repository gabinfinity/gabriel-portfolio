import { useState } from "react";
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
  
    const showHomeBtn = true;
  
    return (
      <AppDiv>
        <AppWrapper>
          <AppContainer>
            <AppInfoBar style={{ display: appInfoBarVisible ? 'none' : 'flex' }}>
              <Header />
              <AsideScrollFrame />
              <Footer />
            </AppInfoBar>
            <Menu showHomeBtn={showHomeBtn} toggleAppInfoBar={toggleAppInfoBar} />
            <Content />
          </AppContainer>
        </AppWrapper>
      </AppDiv>
    );
  };
  
  export default DefaultLayout;
