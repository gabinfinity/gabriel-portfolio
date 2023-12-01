import { ContactCardContent, ContactCardStyle } from './ContactCard.styles'

interface ContactCardTypes {
    firtContentName: string,
    secondContentName: string,
    thirdContentName: string,
    firstValueContent: string,
    secondValueContent: string,
    thirdValueContent: string
}

export default function ContactCard(props: ContactCardTypes) {
    return (
        <ContactCardStyle>
            <ContactCardContent>
                <ul>
                    <li>
                        <h6>{props.firtContentName}</h6><span>{props.firstValueContent}</span>
                    </li>
                    <li>
                        <h6>{props.secondContentName}</h6><span>{props.secondValueContent}</span>
                    </li>

                    <li>
                        <h6>{props.thirdContentName}</h6><span>{props.thirdValueContent}</span>
                    </li>
                </ul>
            </ContactCardContent>
        </ContactCardStyle>
    )
}
