import Link from "next/link"

import Trustbox from "@/components/trustpilot/Trustbox.jsx"

export const metadata = {
  title: 'Alle produkter - Naturity',
  description: 'Naturity sin butikk består av kun naturlige produkter. Sjekk ut hele kolleksjonen her.',
}

import Deodoranter from "@/components/butikk_kategorier/Deodorantkrem.jsx"
import Leppepomader from "@/components/butikk_kategorier/Leppepomade.jsx"

export default function Butikk() {

  return (
    <main className="butikk_kategori">
      <div className="b_k_img">
        <img src="/deodorantkremtekst.svg" alt="Deodorantkrem" />
      </div>
      <Deodoranter />
      <div className="b_k_img">
        <img src="/kategoritekst_leppepomade.svg" alt="Leppepomade" />
      </div>
      <Leppepomader />
      <div className="p-l-w">
        <Link href="/produkter" className="produkter-link">Se liste over alle produkter</Link>
      </div>
      <Trustbox />
    </main>
  )
}
