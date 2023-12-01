import { AsideScrollFrame } from "../../components/Aside/AsideScrollFrame/AsideScrollFrame";
import { Footer } from "../../components/Aside/AsideScrollFrame/Footer/Footer";
import Content from "../../components/Content/Content";
import { Header } from "../../components/Header/Header/Header";
import Menu from "../../components/Menu/Menu";
import { AppContainer, AppDiv, AppInfoBar, AppMobileTopBar, AppWrapper } from "./DefaultLayout.styles";

export function DefaultLayout() {
    return (
        <AppDiv>
            <AppMobileTopBar />
            <AppWrapper>
                <AppContainer>
                    <AppInfoBar>
                        <Header />
                        <AsideScrollFrame />
                        <Footer />
                    </AppInfoBar>
                    <Menu />
                    <Content />
                </AppContainer>
            </AppWrapper>

        </AppDiv>

    )
}
