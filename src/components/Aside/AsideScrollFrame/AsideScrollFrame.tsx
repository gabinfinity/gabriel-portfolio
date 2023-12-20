import { useEffect, useRef, useState } from "react";
import { HardSkills, InfoBarAbout, KnowledgeContainer, LangSkills, ScrollFrame, SoftSkillsContainer, SplitFrame } from "./AsideScrollFrame.styles";
import { HardSkillsTech } from "./Skills/HardSkills/HardSkills";
import { LanguageSkills } from "./Skills/LanguageSkills/LanguageSkills";
import { KnowledgeList } from "./Skills/Knowledge/KnowledgeList";
import { SoftSkills } from "./Skills/SoftSkills/SoftSkills";

export function AsideScrollFrame() {
    const myRef = useRef(null)
    const [renderMySkills, setRenderMySkills] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setRenderMySkills(true);
        }, 10);

        return () => clearTimeout(timerId);
    }, []);
    
  return (
    <ScrollFrame ref={myRef} id="scrollbar">
        <InfoBarAbout>
            <ul>
                <li>
                    <h6>Residence:</h6><span>Brazil</span>
                </li>
                <li>
                    <h6>City:</h6><span>Maracaí/SP</span>
                </li>
                <li>
                    <h6>Age:</h6><span>24</span>
                </li>
            </ul>
        </InfoBarAbout>
        <SplitFrame />
        <LangSkills>
            {renderMySkills && (
                <>
                    <LanguageSkills skillName='PT/BR' percentage='100' />
                    <LanguageSkills skillName='English' percentage='80' />
                    <LanguageSkills skillName='Spanish' percentage='30' />
                </>
            )}
        </LangSkills>
        <SplitFrame />
        <HardSkills>
            {renderMySkills && (
                <>
                    <HardSkillsTech skillName='React/Next' percentage='80' scrollArea={myRef.current}/>
                    <HardSkillsTech skillName='SQL' percentage='60' scrollArea={myRef.current}/>
                    <HardSkillsTech skillName='Google Cloud' percentage='75' scrollArea={myRef.current}/>
                    <HardSkillsTech skillName='HTML/CSS/JS' percentage='100' scrollArea={myRef.current} />
                    <HardSkillsTech skillName='Wordpress' percentage='100' scrollArea={myRef.current} />
                </>
            )}
        </HardSkills>
        <SplitFrame />
        <KnowledgeContainer>
            <KnowledgeList myKnowledge="Styled Components" />
            <KnowledgeList myKnowledge="CSS Modules" />
            <KnowledgeList myKnowledge="Git" />
            <KnowledgeList myKnowledge="Servers and Firewall" />
            <KnowledgeList myKnowledge="Linux" />
            <KnowledgeList myKnowledge="Windows Server" />
        </KnowledgeContainer>
        <SplitFrame />
        <SoftSkillsContainer>
            <SoftSkills softSkill='Communicating'/>
            <SoftSkills softSkill='Team oriented'/>
            <SoftSkills softSkill='Detail oriented'/>
            <SoftSkills softSkill='Focused'/>
            <SoftSkills softSkill='Adaptable'/>
            <SoftSkills softSkill='Logical thinking'/>
        </SoftSkillsContainer>
        <SplitFrame />

    </ScrollFrame>
  )
}
