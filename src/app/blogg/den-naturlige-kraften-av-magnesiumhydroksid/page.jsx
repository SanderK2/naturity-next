import Link from "next/link"

import BloggTopp from "@/components/blogg/blogg_components/BloggTopp.jsx"
import BloggBunn from "@/components/blogg/blogg_components/BloggBunn.jsx"

export const metadata = {
  title: 'Den naturlige kraften av: Magnesiumhydroksid - Naturity',
  description: 'Er det en fugl? Er det et fly? Nei, det er magnesiumhydroksid - naturens svar på friskhet!',
}

export default function b_post_020623() {

  // ? Endre på disse variablene for å endre på innholdet i bloggposten
  const Hoved_Bilde = "/magnesiumhydroksid2.jpg"
  const Hoved_Bilde_Alt = "Bilde av magnesiumhydroksid"
  const Tittel = "Den naturlige kraften av: Magnesiumhydroksid"
  const Undertittel = "Er det en fugl? Er det et fly? Nei, det er magnesiumhydroksid - naturens svar på friskhet!"
  const Forfatter = "Naturity"
  const Dato = "2. juni 2023"
  const Tagger = ['Den naturlige kraften av', 'Ingredienser', 'Naturity', 'Deodorant']

    return (
      <main>
        <div className="bloggpost">
          <BloggTopp Hovedbilde={Hoved_Bilde} Hovedbilde_alt={Hoved_Bilde_Alt} Tittel={Tittel} Undertittel={Undertittel} Forfatter={Forfatter} Dato={Dato} />
        <div className="formater">

         
        <p>Naturity er opptatt av å levere deodoranter av høy kvalitet som både er effektive og skånsomme for kroppen. En grunnleggende aktiv ingrediens vi benytter i våre deodoranter er magnesiumhydroksid. Magnesiumhydroksid er kjent som et kosttilskudd, men brukes også i hudpleie. I vår formula er dette effektive naturstoffet brukt først og fremst på grunn av dets antibakterielle egenskaper.</p>
        <h2>Hva er magnesiumhydroksid?</h2>
        <p>Magnesiumhydroksid er, som navnet tilsier, en forbindelse som består av magnesium, hydrogen og oksygen. Det forekommer naturlig i mineralet brucitt, men vanligere er det å utvinne det gjennom hydrering av magnesiumoksid, eller utfelling av sjøvann eller saltlake. Magnesium finnes også i kosten og er nødvendig for kroppcellene, samt en viktig komponent i hundrevis av ulike prosesser i kroppen.</p>
        <h2>Hvordan fungerer magnesiumhydroksid i deodorant?</h2>
        <p>Magnesiumhydroksid nøytraliserer lukt og hemmer veksten av luktfremkallende bakterier ved å heve pH-nivået på huden. Huden er normalt et ideelt miljø for bakterievekst, da bakterier trives på et nøytralt pH-nivå. Magnesiumhydroksid gjør huden din mer alkalisk (hever pH-nivået), som resulterer i et ugunstig miljø for bakteriene å boltre seg i.</p>
        <h2>Magnesiumhydroksid vs. natron</h2>
        <p>Sodium Bicarbonate (norsk: natron, natriumbikarbonat, bakepulver) er en vanlig ingrediens i dagens naturlige deodoranter. På lik linje med magnesiumhydroksid er det antibakterielt, da den øker pH-verdien på huden. Hvorfor velger vi da bort natron i fordel for magnesiumhydroksid?</p>
        <p>Når vi utviklet og testet vår deodorantformula, viste våre funn at natron kan være irriterende for mange og at resultatet kan være røde, kløende og irriterte armhuler. Dermed var det viktig å finne et godt alternativ til natron som både fungerer, men også er irritasjonsfri.</p>
        <p>Selv om både natron og magnesiumhydroksid er alkaliske, har magnesiumhydroksid et enda høyere pH-nivå enn natron. Vanligvis kan høye pH-nivåer føre til irritasjoner, som vi også observerte under testingen av Naturity deodoranter. Men hvorfor oppstår det ikke lignende irritasjoner hos de fleste mennesker når de bruker magnesiumhydroksid, til tross for dets høyere pH-nivå?</p>
        <p>Magnesiumhydroksid er nemlig mindre løselig i vann, som gjør at det tar lengre tid for den å løses opp i svette. Dette betyr at pH-verdien på huden din økes på en mer langsom og jevn måte. Dette gjør magnesiumhydroksid mer skånsom mot huden og mindre sannsynlig å forårsake irritasjon.</p>
        <p><b>Du kan bli nærmere kjent med både de nye og de allerede kjente Naturity deodorantene i <Link href="/butikk">nettbutikken vår</Link>. I tillegg ulike dufter, finner du også en <Link href="/produkt/noytral-deodorantkrem">luktfri deodorant</Link> som er for de som foretrekker et mer nøytralt produkt, uten eteriske oljer.</b></p>


      </div>
      <BloggBunn Tagger={Tagger} />
    </div>
      </main>
    )
  }
  