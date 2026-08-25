import Link from "next/link"

import BloggTopp from "@/components/blogg/blogg_components/BloggTopp.jsx"
import BloggBunn from "@/components/blogg/blogg_components/BloggBunn.jsx"

export const metadata = {
  title: 'Nytt design og nye produkter - Naturity',
  description: 'Vi har gledende nyheter å dele! To nye produkter, blant annet.',
}

export default function b_post_000000() {

  // ? Endre på disse variablene for å endre på innholdet i bloggposten
  const Hoved_Bilde = "/nyblogg_produkter2.png"
  const Hoved_Bilde_Alt = "Bilde av Naturity leppepomade og deodorant i ny innpakking"
  const Tittel = "Nytt design og nye produkter"
  const Undertittel = "Vi har gledende nyheter å dele! To nye produkter, blant annet."
  const Forfatter = "Naturity"
  const Dato = "13. oktober 2023"
  const Tagger = ['Oppdateringer', 'Deodorant', 'Naturity']

    return (
      <main>
        <div className="bloggpost">
          <BloggTopp Hovedbilde={Hoved_Bilde} Hovedbilde_alt={Hoved_Bilde_Alt} Tittel={Tittel} Undertittel={Undertittel} Forfatter={Forfatter} Dato={Dato} />
        <div className="formater">

        <h2>Nye produkter</h2>
        <p>Vi har gleden av å kunngjøre spennende tilskudd til vår produktlinje:</p>
        <p><span style={{color: 'rgb(213, 213, 137)'}}>Vanilje Deodorantkrem:</span> Endelig er den her - den etterlengtede vaniljeduften! Denne deodoranten inneholder en eksklusiv vaniljeabsolutt som gir en søt aroma. Perfekt for alle vaniljeelskere. <Link href="/produkt/vanilje-deodorantkrem">Utforsk Vanilje Deodorantkrem her</Link>.</p>
        <p><span style={{color: 'rgb(144, 222, 108)'}}>Leppepomade:</span> Etter grundig testing er vår naturlige leppepomade nå tilgjengelig. Beriket med bivoks og nærende oljer gir den leppene dine en rik og beskyttende pleie uten kjemikalier. <Link href="/produkt/leppepomade">Utforsk vår Leppepomade her</Link>.</p>
        <h2>Avvikling av produkter</h2>
        <p>Som en del av vår kontinuerlige evaluering av produktene vi tilbyr, har vi besluttet å avvikle de følgende produktene på grunn av lav etterspørsel:</p>
        <li>Rose Deodorantkrem</li>
        <li>Tropisk Deodorantkrem</li>
        <p>Dette gir oss muligheten til å fokusere på våre mest populære og etterspurte varianter.</p>
        <h2>Nytt design på deodorantene</h2>
        <p>Vår emballasje har fått en oppgradering for å gjøre den mer brukervennlig. Nå leveres deodorantene i glassbeholdere med bambuslokk, som gjør det enklere å åpne og lukke. Vi har også forenklet designet for å gjøre ingredienslisten mer tydelig. Prisene forblir uendret som en del av vårt løfte om å tilby kvalitetsprodukter til gode priser.</p>
        <h2>Ny deodorantoversikt</h2>
        <p>Vår <Link href="/blogg/alt-du-maa-vite-om-vaare-deodoranter">siste bloggpost</Link> gir deg en detaljert oversikt over ingrediensene som finnes i våre deodoranter og deres respektive funksjoner. Vi setter åpenhet aller høyest når det gjelder ingrediensene vi benytter i produktene våre og vil at du skal ha all nødvendig informasjon.</p>
        <p>Vi ser frem til å introdusere deg til våre nye produkter og oppdateringer. Takk for at du er en del av vår reise mot naturlig og bærekraftig hudpleie.</p>
        <p><b>Oppdatering 03.12.2023: Vi har gått over til annen glassemballasje som følge av produksjonsstopp på glassemballasjen med bambuslokk. Våre priser forblir uendret.</b></p>


      </div>
      <BloggBunn Tagger={Tagger} />
    </div>
      </main>
    )
  }
  