import Link from "next/link"

export const metadata = {
	title: 'Våre forhandlere - Naturity',
	description: 'Naturity sine forhandlere og utsalgssteder.',
  }

export default function Forhandlere() {
    return (
      <main className="forhandlere">
       <h1>Våre forhandlere</h1>
        <p>Her finner du en oversikt over alle våre forhandlere.</p>
        <p>NB: utvalget i butikk kan variere.</p>
        <div className="forhandlere_list">
          <div className="forhandler_box">
            <a href="https://maps.app.goo.gl/7n3j8nimP8JBCQuZ6" target="_blank">Helios Trondheim</a>
            <p><img src="/location.svg" alt="Adresse" />Prinsens gate 53, 7011 Trondheim</p>
            <p><img src="/telefon.svg" alt="Telefon" />+47 735 28 250</p>
          </div>
          <p>Du kan også handle i <Link href="/butikk">Naturitys nettbutikk</Link></p>
        </div>
        <div className="forhandlere_map">
          <h2>Finn butikk på kart</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1784.4693381634904!2d10.389513476953828!3d63.43224597612375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d319b4816733d%3A0x534ac4b118d5d629!2sHelios%20Trondheim!5e0!3m2!1sno!2sno!4v1708680642845!5m2!1sno!2sno" width="600" height="450" className="map_iframe" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <span className="litentekst">Ønsker du å være en av våre forhandlere? Ta kontakt på <a href="mailto:erlend@naturity.no" target="_blank">erlend@naturity.no</a></span>
      </main>
    )
  }
  