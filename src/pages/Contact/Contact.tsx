import ContactCard from './ContactCard/ContactCard'
import { ContactCardsContainer, ContactTitle, FormAreaContainer } from './Contact.styles'
import { ArtTop, ArtTopOverlay } from '../Home/Home.styles'
import { ContactForm } from './ContactForm/ContactForm'

export function Contact() {
  return (
    <>
        <ArtTop>
            <ArtTopOverlay>
                <ContactTitle>Contact information</ContactTitle>
                <ContactCardsContainer>
                    <ContactCard 
                        firtContentName='Country' firstValueContent='Brazil'
                        secondContentName='State' secondValueContent='Rio Grande do Sul'
                        thirdContentName='City' thirdValueContent='Alvorada'/>
                    <ContactCard 
                        firtContentName='Whatsapp' firstValueContent='+55 18 996594514'
                        secondContentName='Phone' secondValueContent='+55 51 999539280'
                        thirdContentName='E-mail' thirdValueContent='gabmzni@proton.me'/>
                    <ContactCard 
                        firtContentName='Discord' firstValueContent='gabriel.manzoni'
                        secondContentName='Skype' secondValueContent='gabrielz0'
                        thirdContentName='Site' thirdValueContent='www.manzoni.dev'/>
                    </ContactCardsContainer>
                <ContactTitle>Get in touch</ContactTitle>
                <FormAreaContainer>
                    <ContactForm />
                </FormAreaContainer>
            </ArtTopOverlay>
        </ArtTop>
    </>
  )
}
