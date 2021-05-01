import ViewContact from 'views/contact'
import {NextSeo} from 'next-seo'

export default function Kontakt () {
    return (
        <>
        <NextSeo title="kontakt" description="Skontaktuj się z nami poprzez formularz, bądź zadzwoń pod nasz numer."/>
        <ViewContact />
        </>
    )
}
