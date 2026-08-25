import SporsmalOgSvar from "@/components/sporsmal_og_svar/Oss.jsx"

export const metadata = {
  title: 'Ofte stilte spørsmål - Naturity',
  description: 'Finn svar på ofte stilte spørsmål om Naturity sine produkter og tjenester.',
}

export default function OSS() {
    return (
      <main className="oss">
        <h1>Ofte stilte spørsmål</h1>
        <p>Her kan du finne svar på noen spørsmål som ofte blir stilt om Naturity.</p>
        <SporsmalOgSvar />
      </main>
    )
  }
  