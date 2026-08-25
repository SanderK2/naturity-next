import Link from "next/link"

export const metadata = {
  title: 'Om oss - Naturity',
  description: 'Om oss - hva står Naturity for? Lær mer om vår historie og hvordan vi ble til.',
}

export default function Om() {
    return (
      <main>
        <div className="om">
      <div className="om-section-1">
        <h1>Om oss</h1>
        <p>Startet med et engasjement for skånsom naturlig hudpleie.</p>
        <p><span>Resten er historie.</span></p>
      </div>
      <div className="om-section-2">
        <img src="new_NaturityGold.svg" alt="Naturity logo" />
        <img src="/dinbutikkforskansomhet.png" alt='Din butikk for skånsomhet' />
      </div>
      <div className="om-section-3">
        <h2>Historien og idéen</h2>
        <p>
          Naturity ble etablert den 13. november 2022 for å 
          tilby etterspurte naturlige alternativer innen hudpleie i
          Norge. Vi så en mangel på kjemikalie- og
          irritasjonsfrie produkter som også var tilgjengelige
          til en god pris. Vi ønsket å tilby noe som ikke bare
          fungerer for de fleste, men for alle og i alle situasjoner,
          med størst fokus på kroppens velvære.
        </p>
      </div>
      <div className="om-section-4">
        <h2>Hvorfor naturlig?</h2>
        <div>
          <img src="/fri_for_irriterende_stoffer.svg" alt="Fri for: irriterende stoffer" />
          <p>
            I dagens hudpleie- og kosmetikkbransje 
            er det ofte en mangel på
            fokus på naturens ressurser. Det er
            ikke uvanlig at det er både enklere
            og mer kostnadseffektivt å benytte
            seg av kjemiske ingredienser enn
            naturlige stoffer. Fokuset ligger ofte
            på produktets funksjonalitet, men
            det er sjelden man tar hensyn til
            hva disse “funksjonelle” ingrediensene 
            faktisk gjør med kroppen vår.
          </p>
        </div>
        <p>
          Deodoranten var engasjementet og begynnelsen for Naturity
          som en bedrift, da det var lite på det norske markedet som
          kunne tilfredsstille både naturlig og irritasjonsfri. Ordet
          “naturlig” kunne plutselig bety så mye. <span>Naturity tar ordet
          “naturlig” tilbake, og mener det skal assosieres med skånsomhet 
          og irritasjonsfrie produkter.</span>
        </p>
        <p>
          Hudpleiebransjens forbrukere har de siste årene lagt mer og
          mer fokus på å kjøpe produkter som benytter naturens vakre
          ressurser. Dette fordi du ikke bare tar vare på egen helse,
          men også tar hensyn til miljøet og fremtidige generasjoner.
        </p>
      </div>
      <div className="om-section-5">
        <h2>Hvem?</h2>
        <div>
          <img src="/ica_logo.png" alt="ICA (International Coaching Association) logo" />
          <p>
            Den daglige driften hos Naturity gjøres av
            én daglig leder og produktansvarlig. I tillegg
            har vi én IT-ansvarlig. Produktansvarlige i
            Naturity er pålagt å ha et internasjonalt
            sertifikat innen hudpleieveiledning.
          </p>
        </div>
        <p>
          Dette gjør vi for å sikre kvaliteten til produktene vi putter ut, og
          forsikre at vi har god kjennskap til hvilke ingredienser som for
          eksempel vanligvis kan forårsake irritasjon eller utslett. Naturity
          holder sterkt på prinsippet om at utvikling av produkter skal
          skje gjennom grundig testing og undersøkelser, som gjøres slik
          at sensitiv hud forblir høyeste prioritet.
        </p>
      </div>
      <div className="om-section-6">
        <h2>Filosofien</h2>
        <p>
          Naturity sin filosofi er at naturen allerede har gitt oss alt vi
          trenger. Vår ambisjon er å utvide vår filosofi og ta lederskap i
          hudpleiebransjen ved å endre den tradisjonelle tilnærmingen
          til produksjon av konvensjonelle hudpleieprodukter som
          finnes i dagligvarebutikker. Vi har tro på at stadig flere vil bli
          oppmerksomme på ingrediensene de påfører kroppen sin, og
          vi vil være en driver for denne utviklingen.
        </p>
        <p>
          Vi arbeider for å øke graden av transparens innen hudpleiebransjen når det gjelder ingrediensene som brukes. 
          Forbrukeren er ofte ikke klar over innholdet før de undersøker
          det nøye og gjør et nettsøk. Til og med da er det ikke lett å
          vite hva man burde tro på.
        </p>
        <p>
          Naturlige hudpleieprodukter er ofte utilgjengelige for forbrukerne 
          i dagligvarebutikker og apotek. De er ofte assosiert
          med nettbutikker og spesialiserte helsekostbutikker som
          kan ha lange ventetider og fraktkostnader. Dette kan gjøre
          det vanskelig for forbrukere å velge naturlige alternativer til
          konvensjonelle hudpleieprodukter. Naturity arbeider for å
          endre denne situasjonen og gjøre naturlige produkter mer
          tilgjengelige i det daglige liv.
        </p>
        <p>
          Dersom du ønsker å lære mer om våre valg av ingredienser,
          vil vi anbefale deg å ta en titt på vår <Link href="/blogg">blogg</Link>. Der kan du finne
          mer detaljert informasjon om våre produkter og vårt fokus
          på naturlige og skånsomme ingredienser.
        </p>
      </div>
    </div>
      </main>
    )
  }
  