import { SoftSkillsItem } from "./SoftSkills.styles";


interface SoftSkillTypes{
    softSkill: string
}

export function SoftSkills(props: SoftSkillTypes) {
  return (
    <SoftSkillsItem>
        {props.softSkill}
    </SoftSkillsItem>
  )
}
