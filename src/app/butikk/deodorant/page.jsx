import Link from "next/link"

import Trustbox from "@/components/trustpilot/Trustbox.jsx"

export const metadata = {
  title: 'Deodorant - Naturity',
  description: 'Naturity sine deodoranter er basert på magnesium - som er skånsomt og egnet til sensitiv hud.',
}
  
  import Kategori from "@/components/butikk_kategorier/Deodorantkrem.jsx"
  
  export default function KatDeodorant() {
  
    return (
      <main className="butikk_kategori">
        <div className="b_k_img">
            <img src="/deodorantkremtekst.svg" alt="Deodorantkrem" />
        </div>
        <Kategori />
        <div className="p-l-w">
          <Link href="/produkter" className="produkter-link">Se liste over alle produkter</Link>
        </div>
        <Trustbox />
      </main>
    )
  }
  