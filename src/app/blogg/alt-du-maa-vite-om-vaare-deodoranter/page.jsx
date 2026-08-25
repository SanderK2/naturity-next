import Link from "next/link"

import BloggTopp from "@/components/blogg/blogg_components/BloggTopp.jsx"
import BloggBunn from "@/components/blogg/blogg_components/BloggBunn.jsx"

export const metadata = {
  title: 'Alt du må vite om våre deodoranter - Naturity',
  description: 'Naturity har lenge jobbet med en deodorantformulering som verdsetter både effektivitet og omsorg for kroppen din. Den er spesielt utviklet med tanke på sensitiv hud.',
}

export default function b_post_031023() {

  // ? Endre på disse variablene for å endre på innholdet i bloggposten
  const Hoved_Bilde = "/deopic.png"
  const Hoved_Bilde_Alt = "Bilde av en deodorant"
  const Tittel = "Alt du må vite om våre deodoranter"
  const Undertittel = "Naturity har lenge jobbet med en deodorantformulering som verdsetter både effektivitet og omsorg for kroppen din. Den er spesielt utviklet med tanke på sensitiv hud."
  const Forfatter = "Naturity"
  const Dato = "3. oktober 2023"
  const Tagger = ['Deodorant', 'Naturity']

    return (
      <main>
        <div className="bloggpost">
          <BloggTopp Hovedbilde={Hoved_Bilde} Hovedbilde_alt={Hoved_Bilde_Alt} Tittel={Tittel} Undertittel={Undertittel} Forfatter={Forfatter} Dato={Dato} />
        <div className="formater">

        <p><span style={{color: '#007542'}}>Sist oppdatert: <b>21.02.2024</b></span></p>
        <p>På ingredienslistene våre benyttes INCI (International Nomenclature of Cosmetic Ingredients) sine navn, grunnet EUs regelverk. Vi skjønner at dette kan være forvirrende. Nedenfor følger en oversikt over de ingrediensene vi benytter i våre deodoranter, hvor ingrediensene kommer fra, samt en kort beskrivelse av deres respektive funksjoner.</p>
        <p>Naturity jobber for å være transparent angående ingredienser. Om du ønsker nærmere informasjon om en spesifikk ingrediens, les på <Link href="/tagger/Ingredienser">emneknaggen Ingredienser</Link>.</p>
        <h2>Felles ingredienser</h2>
        <p><b>Maranta Arundinacea Root Powder</b></p>
        <p>Norsk navn: Pilerotpulver</p>
        <p>Kommer fra: Indisk pilerot</p>
        <p>Funksjon: Naturlig absorberende, inneholder viktige vitaminer og mineraler og er mildt nok selv for den mest sensitive huden.</p>
        <p><b>Solanum Tuberosum Starch</b></p>
        <p>Norsk navn: Potetmel</p>
        <p>Kommer fra: Potet</p>
        <p>Funksjon: Absorberer fuktighet og polerer bort døde hudceller ved å eksfoliere huden forsiktig. Hjelper til å gi deodoranten den perfekte konsistensen.</p>
        <p><b>Cocos Nucifera Oil</b></p>
        <p>Norsk navn: Kokosolje</p>
        <p>Kommer fra: Kokosnøtten</p>
        <p>Funksjon: Naturlig antibakterielt, antiinflammatorisk, antioksiderende og inneholder vitamin E.</p>
        <p><b>Butyrospermum Parkii Butter</b></p>
        <p>Norsk navn: Sheasmør</p>
        <p>Kommer fra: Smørtreet</p>
        <p>Funksjon: Naturlig antibakterielt, vitaminrik, antioksiderende og gir en glatt konsistens.</p>
        <p><b>Magnesium Hydroxide</b></p>
        <p>Norsk navn: Magnesiumhydroksid</p>
        <p>Kommer fra: Det brukes tre hovedmetoder for å utvinne Magnesiumhydroksid. (1) Dens naturlige forekomst som mineralet brucitt, (2) gjennom hydrering av magnesiumoksid, og (3) gjennom utfelling av sjøvann eller saltlake.</p>
        <p>Funksjon: Motvirker enhver luktproduserende bakterie på overflaten av huden uten å påvirke dermis - laget av hud der svettekjertler, porer og hårsekkene er inneholdt. Den gjør dette ved å skape et pH-miljø som er akkurat høyt nok for at bakterier ikke skal kunne overleve.</p>
        <p><b>Tocopherol</b></p>
        <p>Norsk navn: Vitamin E</p>
        <p>Kommer fra: Hvete</p>
        <p>Funksjon: Antioksiderende, forhindrer harskning og forlenger holdbarheten til produktet. Hjelper huden å fornye cellene raskere. Mykgjørende.</p>
        <p>Overnevnte er de ingrediensene som er felles for alle våre deodoranter. Naturity har et større utvalg av deodoranter som i tillegg inneholder eteriske oljer for å gi dem en ønsket lukt. Les mer om dette nedenfor.</p>
        <h2>Vår jobb med ingredienslisten</h2>
        <p>Vi har utført omfattende tester og jobbet intenst med ingredienslisten vår for å finne en formulering som fungerer for alle. Natron er en vanlig ingrediens i dagens naturlige deodoranter. Våre funn viser at denne ingrediensen ikke egner seg for alle, selv ikke for personer som ikke anses å gå inn i klassifiseringen “sensitiv hud”. Derfor har vi valgt å gå over til mildere alternativer, som i dette tilfellet er magnesiumhydroksid som nevnt over.</p>
        <p>Dette alternativet har vist seg å være like effektivt som natron til å nøytralisere, samtidig som det gir en minimal risiko for hudreaksjoner hos de aller fleste.</p>
        <h2>Eteriske oljer</h2>
        <p>Naturity tilbyr et bredt utvalg av deodoranter med eteriske oljer for å gi lukt. Eteriske oljer er naturlige oljer som finnes i de fleste planter, og er ikke det samme som syntetisk duftolje. Utvinningen skjer vanligvis gjennom destillering, spalting eller pressing. Det er viktig å merke seg at eteriske oljer er svært konsentrerte substanser. Selv om vi kun bruker dem i nødvendige mengder for aroma, kan en liten andel av mennesker oppleve hudsensitivitet overfor visse oljer. Noen eteriske oljer er sterkere enn andre, og enkelte kan reagere forskjellig på ulike oljer. Derfor tilbyr vi også <Link href="/produkt/noytral-deodorantkrem">en nøytral versjon</Link> av vår deodorantkrem, som er helt fri for eteriske oljer.</p>
        <p>Det skal bemerkes at <Link href="/produkt/noytral-deodorantkrem">Nøytral Deodorantkrem</Link>, som er uten eteriske oljer, er like effektiv som de med. Eteriske oljer utgjør lite betydelig forskjell når det gjelder effektivitet i vår deodorantformula, selv om de har gode egenskaper og er antibakterielle, antiinflammatoriske, antioksiderende m.m.. De er der først og fremst for lukt, så vi vil gjerne fremheve de aromaterapeutiske fordelene de gir.</p>
        <p><b>Citrus Aurantium Dulcis Peel Oil</b></p> 
        <p>Brukes i: <Link href="/produkt/appelsin-og-rose-deodorantkrem">Appelsin & Rose Deodorantkrem</Link></p>
        <p>Norsk navn: Appelsin eterisk olje</p>
        <p>Kommer fra: Appelsin</p>
        <p>Aromaterapeutiske egenskaper: Frisk, søt og fruktig duft som kan virke oppkvikkende og energigivende. Den kan også hjelpe med å redusere stress og angst.</p>
        <p><b>Rosa Damascena Flower Oil</b></p>
        <p>Brukes i: <Link href="/produkt/appelsin-og-rose-deodorantkrem">Appelsin & Rose Deodorantkrem</Link></p>
        <p>Norsk navn: Damask rose eterisk olje</p>
        <p>Kommer fra: Damask rose</p>
        <p>Aromaterapeutiske egenskaper: Ekotisk, dyp og søt rose- og blomsterduft. Antidepressiv, rensende, hjertestyrkende og nerveberoligende.</p>
        <p><b>Pelargonium Graveolens Flower Oil</b></p>
        <p>Brukes i: <Link href="/produkt/appelsin-og-rose-deodorantkrem">Appelsin & Rose Deodorantkrem</Link></p>
        <p>Norsk navn: Rosengeranium eterisk olje</p>
        <p>Kommer fra: Rosengeranium</p>
        <p>Aromaterapeutiske egenskaper: Søt blomsteraroma. Antidepressiv og nervestyrkende.</p>
        <p><b>Lavandula Angustifolia Oil</b></p>
        <p>Brukes i: <Link href="/produkt/lavendel-deodorantkrem">Lavendel Deodorantkrem</Link></p>
        <p>Norsk navn: Lavendel eterisk olje</p>
        <p>Kommer fra: Engelsk lavendel</p>
        <p>Aromaterapeutiske egenskaper: Fruktig, søt, blomster. Insektsavvisende, avslappende, blodtrykksenkende og fordøyelsesfremmende.</p>
        <p><b>Mentha Piperita Oil</b></p>
        <p>Brukes i: <Link href="/produkt/peppermynte-deodorantkrem">Peppermynte Deodorantkrem</Link></p>
        <p>Norsk navn: Peppermynte eterisk olje</p>
        <p>Kommer fra: Peppermynte (Mentha × piperita)</p>
        <p>Aromaterapeutiske egenskaper: Varm mentolaroma, avkjølende og beroligende.</p>
        <p><b>Citrus Aurantifolia Oil</b></p>
        <p>Brukes i: <Link href="/produkt/lime-deodorantkrem">Lime Deodorantkrem</Link></p>
        <p>Norsk navn: Lime eterisk olje</p>
        <p>Kommer fra: Key lime</p>
        <p>Aromaterapeutiske egenskaper: Skarp og søt sitrusduft som både er avkjølende og appetittvekkende.</p>
        <h2>Absolutter</h2>
        <p>I likhet med eteriske oljer, er absolutter svært aromatiske væsker som kommer fra planter. Forskjellen er utvinningsmetoden.</p>
        <p>Absolutter ekstraheres på en måte som krever bruk av et løsemiddel for å trekke ut de dyrebare aromaene fra planten. Løsningsmidlet fjernes så senere under de siste stadiene av produksjonen.</p>
        <p>Naturity bruker per nå kun én absolutt.</p>
        <p><b>Vanilla Bean Absolute</b></p>
        <p>Brukes i: <Link href="/produkt/vanilje-deodorantkrem">Vanilje Deodorantkrem</Link></p>
        <p>Norsk navn: Vaniljestang absolutt</p>
        <p>Kommer fra: Vestindisk vaniljeorkidé</p>
        <p>Aromaterapeutiske egenskaper: Dyp, eksklusiv og søt duft som virker antidepressiv, stressdempende og oppløftende.</p>
        <h2>Avsluttende avsnitt</h2>
        <p>Naturity ønsker mer åpenhet rundt ingredienser i hudpleiebransjen. Derfor oppfordrer vi til at du leser våre artikler som nøye beskriver hvorfor vi velger akkurat de ingrediensene vi gjør og hvilke funksjoner de har.</p>
        <p>Nå er det opp til deg å ta steget mot naturlig hudpleie. Sjekk ut vårt utvalg av deodoranter <Link href="/butikk">her.</Link></p>


      </div>
      <BloggBunn Tagger={Tagger} />
    </div>
      </main>
    )
  }
  