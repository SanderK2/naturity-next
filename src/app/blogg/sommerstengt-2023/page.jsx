import Link from "next/link"

import BloggTopp from "@/components/blogg/blogg_components/BloggTopp.jsx"
import BloggBunn from "@/components/blogg/blogg_components/BloggBunn.jsx"

export const metadata = {
  title: 'Sommerstengt 2023 - Naturity',
  description: 'Informasjon angående sommerstengt i perioden 1. juli - 1. august.',
}

export default function b_post_010723() {

  // ? Endre på disse variablene for å endre på innholdet i bloggposten
  const Hoved_Bilde = "/sommerstengt-foto.jpg"
  const Hoved_Bilde_Alt = "Bilde av trær og sol"
  const Tittel = "Sommerstengt hos Naturity i juli 2023"
  const Undertittel = "Informasjon angående sommerstengt i perioden 1. juli - 1. august."
  const Forfatter = "Naturity"
  const Dato = "1. juli 2023"
  const Tagger = ['Oppdateringer', 'Naturity']

    return (
      <main>
        <div className="bloggpost">
          <BloggTopp Hovedbilde={Hoved_Bilde} Hovedbilde_alt={Hoved_Bilde_Alt} Tittel={Tittel} Undertittel={Undertittel} Forfatter={Forfatter} Dato={Dato} />
        <div className="formater">

         
        <p>Vi ønsker å informere deg om at Naturity vil holde sommerstengt i hele juli 2023. Dette betyr at vi midlertidig vil være utilgjengelige for bestillinger, henvendelser og forsendelser i løpet av denne perioden.</p>
        <p>Sommerstengt gir oss en verdifull mulighet til å fokusere på utvikling av nye produkter og forberede oss på spennende oppdateringer i fremtiden.</p>
        <p>Vi forstår at dette kan være en liten ulempe, og vi beklager eventuelle uleiligheter det medfører. Vi er imidlertid sikre på at denne korte pausen vil bidra til å sikre at vi fortsetter å levere høy kvalitet til våre kunder.</p>
        <p>Vi vil gjerne benytte anledningen til å takke deg for din støtte og tillit til Naturity. Vi setter stor pris på alle tilbakemeldinger, og vi ser frem til å fortsette etter sommerstengt-perioden.</p>
        <p>Vi vil være tilbake og tilgjengelige for alle henvendelser fra 1. august 2023. Inntil da kan du gjerne utforske vårt sortiment eller lese våre tidligere blogginnlegg.</p>
        <p><b>Takk for at du velger naturlig, og vi ønsker deg en fantastisk sommer!</b></p>


      </div>
      <BloggBunn Tagger={Tagger} />
    </div>
      </main>
    )
  }
  