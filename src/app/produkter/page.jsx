import Link from "next/link"

export const metadata = {
	title: 'Oversikt over alle produkter - Naturity',
	description: 'Lenker til alle produktene til Naturity.',
  }

export default function AlleProdukter() {
    return (
      <main>
        <div className="produkter">
            <img src="naturity_favicon.svg" alt="Naturity Logo" />
            <h2>Deodorantkremer</h2>
            <Link href="/produkt/noytral-deodorantkrem">Nøytral Deodorantkrem</Link>
            <Link href="/produkt/lime-deodorantkrem">Lime Deodorantkrem</Link>
            <Link href="/produkt/appelsin-og-rose-deodorantkrem">Appelsin & Rose Deodorantkrem</Link>
            <Link href="/produkt/peppermynte-deodorantkrem">Peppermynte Deodorantkrem</Link>
            <Link href="/produkt/lavendel-deodorantkrem">Lavendel Deodorantkrem</Link>
            <Link href="/produkt/vanilje-deodorantkrem">Vanilje Deodorantkrem</Link>
            <h2>Leppepomade</h2>
            <Link href="/produkt/leppepomade">Leppepomade</Link>
    </div>
      </main>
    )
  }
  