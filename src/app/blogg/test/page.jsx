import Link from "next/link"

import BloggTopp from "@/components/blogg/blogg_components/BloggTopp.jsx"
import BloggBunn from "@/components/blogg/blogg_components/BloggBunn.jsx"

export const metadata = {
  title: 'Test artikkel - Naturity',
  description: 'Test artikkel beskrivelse',
}

export default function b_post_000000() {

  // ? Endre på disse variablene for å endre på innholdet i bloggposten
  const Hoved_Bilde = "/deodorantkremer.png"
  const Hoved_Bilde_Alt = "Test bilde"
  const Tittel = "Test tittel"
  const Undertittel = "Test undertittel"
  const Forfatter = "Naturity"
  const Dato = "1. Januar 2024"
  const Tagger = ['Oppdateringer', 'Tips']

    return (
      <main>
        <div className="bloggpost">
          <BloggTopp Hovedbilde={Hoved_Bilde} Hovedbilde_alt={Hoved_Bilde_Alt} Tittel={Tittel} Undertittel={Undertittel} Forfatter={Forfatter} Dato={Dato} />
        <div className="formater">

         
          {/* 
          ARTIKKEL TEKST HER 

          !! VIKTIG!!
          Anførselstegn må skrives med &quot;
        
          Formatering:
          <p> = Avsnitt
          <h1> = Stor tittel
          <h2> = Mellomstor tittel
          <h3> = Liten tittel
          <b> = Fet tekst
          <i> = Kursiv tekst
          <u> = Understreket tekst
          <li> = Tekst med punkliste (!! Kan ikke settes inne i en <p> tag !!)
          <ol><li> = Tekst med tall liste
          <span style="color: #000000"> = Bruk dette for å forandre skriftfarge
          <img src="" alt=""> = Bilde (Stort bilde med avsnitt) (!! Ikke sett inn i noen andre tagger !!)
          <a href="" target="_blank"> = Ekstern nettside som åpnes i ny fane
          <router-link to="/"> = Intern link som går til en side på naturity.no
         */}
        

        <h1>Test tekst - h1</h1>
        <h2>Test tekst - h2</h2>
        <h3>Test tekst - h3</h3>
        <p>Test tekst - p</p>
        <p><b>Test tekst - p - b</b></p>
        <p><i>Test tekst - p - i</i></p>
        <p><u>Test tekst - p - u</u></p>
        <li>Test tekst - li</li>
        <ol><li>Test tekst - p - ol - li</li></ol>
        <p><span style={{color: 'green'}}>Test tekst med egendefinert stil - p - span</span></p>
        <img src="/deodorantkremer.png" alt="Test bilde" />
        <p><a href="https://google.com">Test ekstern link (google.com) - p - a</a></p>
        <p><Link href="/">Test intern link (naturity.no) - p - Link</Link></p>

      </div>
      <BloggBunn Tagger={Tagger} />
    </div>
      </main>
    )
  }
  