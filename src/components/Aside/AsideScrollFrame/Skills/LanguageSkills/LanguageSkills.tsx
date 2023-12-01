import { LangSkillsItem, LangSkillsItemCircleProgress } from "./LanguageSkills.styles";
import ProgressBar from 'react-animated-progress-bar';

interface LanguageSkillsTypes {
    percentage: string,
    skillName: string
}

export function LanguageSkills(props: LanguageSkillsTypes) {
    return (
        <LangSkillsItem>
            <LangSkillsItemCircleProgress>
                <ProgressBar
                    width="115px"
                    height="115px"
                    fontColor="#8c8c8e"
                    trackWidth="15"
                    percentage={props.percentage}
                    trackPathColor="#191923"
                    trackBorderColor="transparent"
                    hollowBackgroundColor="transparent"
                    defColor={{
                        fair: 'rgb(254, 192, 47)',
                        good: 'rgb(254, 192, 47)',
                        excellent: 'rgb(254, 192, 47)',
                        poor: 'rgb(254, 192, 47)',
                    }}
                />
            </LangSkillsItemCircleProgress>
            <h6>{props.skillName}</h6>
        </LangSkillsItem>
    )
}
