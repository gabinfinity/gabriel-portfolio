import { HardSkillsItemHeading, HardSkillsItemProgress } from "./HardSkills.styles"
import ProgressBar from 'react-animated-progress-bar';

interface HardSkillsTypes {
    percentage: string,
    skillName: string
    scrollArea: any
}


export function HardSkillsTech(props: HardSkillsTypes) {
    return (
        <HardSkillsItemProgress>
            <HardSkillsItemHeading>
            <h6>{props.skillName}</h6>
            <h6 className="percentage">{props.percentage}%</h6>
            </HardSkillsItemHeading>
            <ProgressBar
                scrollArea={props.scrollArea}
                width="100%"
                height="6px"
                rect
                fontColor="gray"
                percentage={props.percentage}
                trackPathColor="rgb(25, 25, 35)"
                bgColor="#333333"
                trackBorderColor="transparent"
                fontSize="0"
                defColor={{
                    fair: 'rgb(254, 192, 47)',
                    good: 'rgb(254, 192, 47)',
                    excellent: 'rgb(254, 192, 47)',
                    poor: 'rgb(254, 192, 47)',
                  }}
            />
        </HardSkillsItemProgress>
    )
}
