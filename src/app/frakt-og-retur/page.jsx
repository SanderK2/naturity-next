import Link from "next/link"

export const metadata = {
	title: 'Frakt og retur - Naturity',
	description: 'Viktig informasjon om frakt og retur.',
  }

export default function FraktOgRetur() {

    return (
      <main className="vilogbet for">
              <h1>Frakt og retur</h1>
      <h2 id="innledning">Viktig informasjon om frakt</h2>
<p>Ved automatisk retur av pakken på grunn av feilmerking av mottakerens postkasse (manglende navn på postkassen), manglende henting i butikk eller feilaktig adresse oppgitt av kjøper, påløper det kostnader for å få sendt ordren på nytt. Kunden må selv dekke disse fraktkostnadene.</p>
<p>Automatiske returer vil i tillegg medføre et returgebyr på 75 kr.</p>

<h2 id="1">Fraktpris</h2>
<p>Vi tilbyr gratis frakt for alle bestillinger over 499 kr.</p>
<p>For alle andre bestillinger påløper det et fraktgebyr:</p>
<ul>
	<li>Pakke i postkassen koster 49 kr (om det ikke er plass i postkassen vil pakken leveres til nærmeste hentested, og du vil få en hentemelding).</li>
	<li>Pakke til hentested koster 105 kr.</li>
</ul>
<p>Ved sending til Svalbard må kunden ta kontakt med oss før hen bestiller. Vi vil da gi egne fraktpriser og opprette en manuell bestilling for kunden.</p>

<h2 id="2">Levering</h2>
<p>Vi sender vanligvis innen 2 virkedager. Gjelder ikke i høytider og avvik kan forekomme. Du velger selv om du vil sende med Bring eller PostNord.</p>

<h2 id="3">Gratis frakt</h2>
	<p>Vi tilbyr gratis frakt til alle bestillinger over 499 kr.</p>

<h2 id="4">Angrerett og retur</h2>
	<p>Du kan returnere uåpnede varer innen 14 dager etter at du mottok varene. Vi refunderer deg beløpet for varene innen 14 dager fra du har meldt retur. Om du ønsker å returnere, ta kontakt med oss på e-post.</p>
	<p>Kunden dekker selv alle fraktkostnader.</p>
	<p>For mer informasjon angående angrerett og returer, <Link href="/vilkar-og-betingelser#8">se vilkår og betingelser, punkt 8</Link>.</p>

<h2 id="5">Garanti og klagerett</h2>
	<p><Link href="/vilkar-og-betingelser#10">Se vilkår og betingelser, punkt 10.</Link></p>


      </main>
    )
  }
  