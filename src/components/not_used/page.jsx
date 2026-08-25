'use client'

import { useParams } from 'next/navigation'

import KatLeppepomade from "@/components/butikk_kategorier/Leppepomade.jsx"
import ErrorNotFound from "@/components/errors/NotFound.jsx"

export default function ButikkKategori() {

    const { kategori } = useParams()

    if (kategori == "deodorant") {
        return (
            <main className="butikk_kategori">
                <p>Butikk item Deodorant!</p>
            </main>
        )
    } else if (kategori == "leppepomade") {
        return (
            <main className="butikk_kategori">
                <div className="b_k_img">
                  <img src="/kategoritekst_leppepomade.svg" alt="Leppepomade" />
                </div>
                <KatLeppepomade />
            </main>
        )
    } else {
    return (
      <main>
        <ErrorNotFound />
      </main>
    )
    }
  }
  