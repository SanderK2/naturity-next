import Link from "next/link"

export const metadata = {
  title: 'Kontakt oss - Naturity',
  description: 'Kontakt oss i Naturity - enten det er spørsmål, tilbakemeldinger eller tips.',
}

export default function Kontakt() {
    return (
      <main className="kontakt">
        <h1>Kontakt oss</h1>
        <p>For oss er det kjempeviktig med tilbakemeldinger - da vi ønsker å tilby det som passer til ditt behov. Ikke nøl med å kontakte oss, enten det er spørsmål, tilbakemeldinger eller tips.</p>
        <div className="ContactMethods">
          <div>
            <h2>E-post</h2>
            <div>
              <img src="/mail.svg" alt="E-post ikon" />
              <a href="mailto:kundeservice@naturity.no">kundeservice@naturity.no</a>
            </div>
          </div>
          <div>
            <h2>Telefon</h2>
            <div>
              <img src="/telefon.svg" alt="Telefon ikon" />
              <a href="tel:+4790257966">+47 902 57 966</a>
            </div>
          </div>
        </div>
        <p>Eller se om vi har svart på spørsmålet på <Link href="/ofte-stilte-sporsmal">ofte stilte spørsmål</Link>.</p>
        <div className="BusninessInfo">
          <h2>Bedrift</h2>
          <div>
          <div>
            <h3>Firmanavn</h3>
            <p>Naturity UB</p>
          </div>
          <div>
            <address>
              <h3>Adresse</h3>
              <p>Selsbakkvegen 34, 7027 Trondheim</p>
            </address>
          </div>
          <div>
            <h3>Daglig leder</h3>
            <p>erlend@naturity.no</p>
          </div>
          <div>
            <h3>Org.nr</h3>
            <p>932541890</p>
          </div>
          <div>
            <h3>Telefon</h3>
            <p>+47 902 57 966</p>
          </div>
          </div>
        </div>
      </main>
    )
  }
  