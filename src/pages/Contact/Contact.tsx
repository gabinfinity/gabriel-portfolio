import ContactCard from './ContactCard/ContactCard'
import { ContactCardsContainer, ContactTitle, FormAreaContainer } from './Contact.styles'
import { ArtTop, ArtTopOverlay } from '../Home/Home.styles'
import { ContactForm } from './ContactForm/ContactForm'
import Grid from '@mui/material/Grid';

export function Contact() {
    return (
        <>
            <ArtTop>
                <ArtTopOverlay>
                    <ContactTitle>Contact information</ContactTitle>
                    <ContactCardsContainer>
                        <Grid container spacing={5}>
                            <Grid item xs={100} md={4}>
                                <ContactCard
                                    firtContentName='Country' firstValueContent='Brazil'
                                    secondContentName='State' secondValueContent='São Paulo'
                                    thirdContentName='City' thirdValueContent='Maracaí'
                                />
                            </Grid>
                            <Grid item xs={100} md={4}>
                                <ContactCard
                                    firtContentName='Wpp' firstValueContent='+55 18 996594514'
                                    secondContentName='Phone' secondValueContent='+55 51 999539280'
                                    thirdContentName='Email' thirdValueContent='gabmzni@proton.me'
                                />
                            </Grid>
                            <Grid item xs={100} md={4}>
                                <ContactCard
                                    firtContentName='Discord' firstValueContent='gabriel.manzoni'
                                    secondContentName='Skype' secondValueContent='gabrielz0'
                                    thirdContentName='Site' thirdValueContent='www.manzoni.dev'
                                />
                            </Grid>
                        </Grid>
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
