import Link from "next/link"

import BloggTopp from "@/components/blogg/blogg_components/BloggTopp.jsx"
import BloggBunn from "@/components/blogg/blogg_components/BloggBunn.jsx"

export const metadata = {
  title: 'Naturligvis et godt valg: Naturity sine 5 løfter - Naturity',
  description: 'Hva er Naturity sine kjerneverdier?',
}

export default function b_post_210224_2() {

  // ? Endre på disse variablene for å endre på innholdet i bloggposten
  const Hoved_Bilde = "/naturity_noun.png"
  const Hoved_Bilde_Alt = "Bilde av et bilde som forklarer Naturity"
  const Tittel = "Naturligvis et godt valg: Naturity sine 5 løfter"
  const Undertittel = "Hva er Naturity sine kjerneverdier?"
  const Forfatter = "Naturity"
  const Dato = "21. februar 2024"
  const Tagger = ['Naturity']

    return (
      <main>
        <div className="bloggpost">
          <BloggTopp Hovedbilde={Hoved_Bilde} Hovedbilde_alt={Hoved_Bilde_Alt} Tittel={Tittel} Undertittel={Undertittel} Forfatter={Forfatter} Dato={Dato} />
        <div className="formater">

        <p>Vi er i en tid hvor hudpleieindustrien flommer over av produkter med overdrevne løfter og kompliserte ingredienslister. Det kan gjøre det vanskelig å vite hva som faktisk er bra for huden, og hva som ikke er det. Et av målene til Naturity er å hjelpe deg å skape klarhet i saken. Vi ønsker å spre bevissthet rundt de stoffene som oftest er brukt i naturlig hudpleie, men som kanskje ikke er så naturlig likevel. Hovedmålet vårt er å tilby hudpleieprodukter med korte ingredienslister som består av kjente, gode, og naturlige råvarer. Naturity skal naturligvis være et godt valg, og for det har vi 5 grunnprinsipper vi jobber etter.</p>
 <h2>1 - Naturligvis naturlig</h2>
 <p>Våre produkter er alltid laget med 100% naturlige ingredienser, og er dermed fri for kunstige tilsetningsstoffer, parabener og sulfater. Vårt ønske er å tilby deg den rene opplevelsen av naturen. Vi mener at det naturlige skal assosieres med det irritasjonsfrie. Det betyr at vi alltid skal ha et sortiment som er skapt med omtanke for alle våre kunder.</p>
<h2>2 - Naturligvis miljøvennlig</h2>
<p>Bærekraft er mer enn bare en trend for oss. Fra emballasje til ingredienser, streber vi etter å minimere vår påvirkning på miljøet. Våre krukker er resirkulerbare, og vi jobber kontinuerlig med å finne enda mer miljøvennlige alternativer. Dette med tanke på planetens helse.</p>
<h2>3 - Naturligvis effektiv</h2>
<p>Å være naturlig betyr ikke å ofre effektivitet. Sortimentet kombinerer tradisjonelle kunnskaper med moderne vitenskap for å skape produkter som gir resultater. Fra magnesiumhydroksid i deodorantene til nærende oljer i leppepomadene, er hver ingrediens nøye utvalgt med et formål.</p>
<h2>4 - Naturligvis transparent</h2>
<p>Vi mener at du skal vite nøyaktig hva du påfører huden din. Det gjør at gjennomsiktighet er en av de viktigste nøklene i hva Naturity ønsker å tilby til kundene sine. Ingrediensene våre er tydelig listet, og vi holder oss unna kompliserte kjemikalier. Trygghet er ikke bare et løfte, det er en garanti.</p>
<h2>5 - Naturligvis gode priser</h2>
<p>I tillegg til å tilby bærekraftige og naturlige produkter, forplikter vi oss til å gjøre produktene våre tilgjengelige til gode priser og fraktpriser, og har som mål om å være ute i så mange utsalgssteder som mulig for å være lett tilgjengelig. Vi tror på å gjøre naturlige produkter tilgjengelig for alle, uten at det går på bekostning av kvalitet.</p>
<h2>Naturligvis et godt valg</h2>
<p>Vi ønsker at din hudpleieritual består av produkter som er både bra for huden din og er produsert på en bærekraftig og ansvarlig måte med tanke på kloden. Vi ønsker å tilby deg et altenativ i hudpleie som er et kjøp gjort med god samvittighet – et steg i en mer meningsfull og bevisst livsstil. For oss er ikke &quot;Naturligvis et godt valg&quot; bare ord. Det er en livsfilosofi som vi brenner for og som vi deler med deg gjennom hvert produkt, laget med kjærlighet og respekt for naturen.</p>

      </div>
      <BloggBunn Tagger={Tagger} />
    </div>
      </main>
    )
  }
  