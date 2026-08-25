import Link from "next/link"

import Trustbox from "@/components/trustpilot/Trustbox.jsx"

export const metadata = {
  title: 'Naturity - Din butikk for skånsomhet',
  description: 'Din butikk for skånsomhet. Naturity mener irritasjonsfri og naturlig er lik. Vi har skånsomhetsgaranti.',
}

export default function Hjem() {

  // ? ========== Endre her ==========
  
  // * Stor forside-bilde
    const stor_forside_bilde = "/lavendel.png"
    const stor_forside_bilde_link = "/produkt/lavendel-deodorantkrem"
    const stor_forside_bilde_alt = "Lavendel Deodorantkrem"
  
  // * Liten forside-bilde venstre
    const bilde_venstre = "/NaturityPic5_1.jpg"
    const bilde_venstre_link = "/deodorant"
    const bilde_venstre_alt = "Bloggartikkel"

  // * Liten forside-bilde høyre
    const bilde_hoyre = "/NaturityPic4_1.jpg"
    const bilde_hoyre_link = "/butikk"
    const bilde_hoyre_alt = "Diverse"
  

  // ? ===============================

  return (
    <main className="home">
      <Link href={stor_forside_bilde_link}><img src={stor_forside_bilde} alt={stor_forside_bilde_alt} /></Link>
      <div>
        <Link href={bilde_venstre_link}><img src={bilde_venstre} alt={bilde_venstre_alt} /></Link>
        <Link href={bilde_hoyre_link}><img src={bilde_hoyre} alt={bilde_hoyre_alt} /></Link>
      </div>
      <h1>Din butikk for skånsomhet</h1>
      <Link href="/blogg/naturligvis-et-godt-valg-naturity-sine-5-lofter" className="leshvorfor">Les hvorfor</Link>
      <Trustbox />
    </main>
  )
}
