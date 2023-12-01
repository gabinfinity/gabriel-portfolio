import { CheckIcon } from "../../../../svgs/CheckIcon";
import { Knowledge } from "./KnowledgeList.styles";

interface KnowledgeListType {
    myKnowledge: string
}

export function KnowledgeList(props: KnowledgeListType) {
  return (
    <Knowledge>
        <CheckIcon/><li>{props.myKnowledge}</li>
    </Knowledge>
  )
}
