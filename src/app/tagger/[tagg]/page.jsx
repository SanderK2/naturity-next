
import Mainpage from "@/components/blogg/blogg_mainpage/Mainpage.jsx"

export const metadata = {
	title: 'Tagg-søk - Naturity',
	description: 'Søk etter en spesifik emneknagg for å finne artikler om det du er interessert i.',
  }

export default function Tagg({params}) {

  // turn %20 into space in params.tagg
  var tagg = params.tagg.replace(/%20/g, " ");

    return (
      <main className="tagg">
        <div className="toppen">
          <h4>Artikler om</h4>
          <h1>{tagg}</h1>
        </div>
        <Mainpage Tagg={tagg} />
      </main>
    )
  }
  