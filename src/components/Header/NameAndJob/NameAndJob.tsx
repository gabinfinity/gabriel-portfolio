import { MyJobDescription, NameAndJobArea } from './NameAndJob.styles'

interface NameAndJobTypes{
  myName: string,
  myJobDescription: string
}

export function NameAndJob(props: NameAndJobTypes) {
  return (
    <NameAndJobArea>
    <h5>
        <a href="#">{props.myName}</a>
     </h5>
     <MyJobDescription>{props.myJobDescription}</MyJobDescription>
    </NameAndJobArea>
  )
}
