import Link from "next/link"

import BloggTopp from "@/components/blogg/blogg_components/BloggTopp.jsx"
import BloggBunn from "@/components/blogg/blogg_components/BloggBunn.jsx"

export const metadata = {
  title: 'Vi senker fraktprisene! - Naturity',
  description: 'Det er blitt billigere å handle Naturity på nett.',
}

export default function b_post_210224() {

  // ? Endre på disse variablene for å endre på innholdet i bloggposten
  const Hoved_Bilde = "/parcel.jpg"
  const Hoved_Bilde_Alt = "Bilde av en pakke"
  const Tittel = "Vi senker fraktprisene!"
  const Undertittel = "Det er blitt billigere å handle Naturity på nett."
  const Forfatter = "Naturity"
  const Dato = "21. februar 2024"
  const Tagger = ['Oppdateringer', 'Naturity']

    return (
      <main>
        <div className="bloggpost">
          <BloggTopp Hovedbilde={Hoved_Bilde} Hovedbilde_alt={Hoved_Bilde_Alt} Tittel={Tittel} Undertittel={Undertittel} Forfatter={Forfatter} Dato={Dato} />
        <div className="formater">

        <p>For å opprettholde vårt løfte om å tilby naturlige produkter til gode priser, senker vi nå prisen for pakke i postkassen til 49 kr.</p>
 <p>I tillegg senker vi prisene for gratis frakt, og tilbyr nå gratis frakt til alle ordre over 499 kr.</p>
<p>Du kan også nå velge om du vil sende med Bring eller PostNord.</p>
<p>Vårt mål er å gjøre naturlige produkter tilgjengelig for alle, uten at det går på bekostning av kvalitet.</p>

      </div>
      <BloggBunn Tagger={Tagger} />
    </div>
      </main>
    )
  }
  