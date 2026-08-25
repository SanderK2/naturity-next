import Link from "next/link"

import Trustbox from "@/components/trustpilot/Trustbox.jsx"

export const metadata = {
  title: 'Leppepomade - Naturity',
  description: 'Naturity sine naturlige leppepomader er skapt med omtanke for både leppene dine og planeten.',
}
  
  import Kategori from "@/components/butikk_kategorier/Leppepomade.jsx"
  
  export default function KatLeppepomade() {
  
    return (
      <main className="butikk_kategori">
        <div className="b_k_img">
            <img src="/kategoritekst_leppepomade.svg" alt="Leppepomade" />
        </div>
        <Kategori />
        <div className="p-l-w">
          <Link href="/produkter" className="produkter-link">Se liste over alle produkter</Link>
        </div>
        <Trustbox />
      </main>
    )
  }
  