'use client'

import Link from "next/link"

export default function SporsmalOgSvar() {

    const sporsmalOgSvar = [
        {
            id: 1,
            kategori: "generelt",
            sporsmal: "Hva gjør Naturity annerledes?",
            svar: 
            <div>
                <p>For oss er irritasjonsfri og naturlig lik. I Naturity sitt sortiment kan vi garantere at du <strong>aldri vil finne:</strong></p>
                <ul>
                    <li>Alkohol (f.eks Cetyl, Stearyl, Cetearyl, Ethyl, Benzyl, Isopropyl)</li>
                    <li>Natron – bakepulver, bikarbonat (Sodium Bicarbonate)</li>
                    <li>Fargestoffer</li>
                    <li>Syntetiske dufter eller stoffer</li>
                    <li>Kunstige konserveringsmidler</li>
                    <li>Aluminium</li>
                    <li>Nanopartikler</li>
                    <li>Parabener</li>
                    <li>Sulfater</li>
                    <li>… og alt annet som ikke er naturlig.</li>
                </ul>
                <p>Disse er stoffer som har vist seg å være enten irriterende for huden, skadelig for kroppen eller begge deler. Når du handler hos oss, skal du være trygg på at det du handler er skånsomt mot huden. Les mer om vår skånsomhetsgaranti under.</p>
            </div>,
        },
        {
            id: 2,
            kategori: "generelt",
            sporsmal: "Hva er Naturitys skånsomhetsgaranti?",
            svar: 
            <div>
                <p>Når du legger inn en bestilling på naturity.no, har du alltid skånsomhetsgaranti. Det betyr at du fritt fram kan prøve produktet, og om du opplever hudreaksjoner, refunderer vi deg pengene*. Vi ber deg om å tydelig lese regler for bruk og oppbevaring som er skrevet på produktetiketten før du bruker produktene våre.</p>
                <p>Garantien gjelder ikke om du har kjøpt produktet fra en av våre forhandlere, da vi må ha en bestilling lagt inn for å kunne gjennomføre en refusjon.</p>
                <p>*Inkluderer ikke fraktkostnader.</p>
            </div>,
        },
        {
            id: 3,
            kategori: "generelt",
            sporsmal: "Selges Naturity sine produkter i fysiske butikker?",
            svar: 
            <div>
                <p>Ja! I tillegg til nettbutikken, kan du kjøpe hos <Link href="/forhandlere">våre forhandlere</Link>. Det anbefales sterkt om du ønsker å slippe fraktkostnader og ventetider.</p>
            </div>,
        },
        {
            id: 4,
            kategori: "deodorant",
            sporsmal: "Hvorfor naturlig deodorant?",
            svar: 
            <div>
                <p>Det er naturlig å svette. Naturlige deodoranter lar kroppen din gjøre sitt, mens du gjør det du kan gjøre. Antiperspiranter med aluminium tetter porene, og lar ikke kroppen gjøre jobben sin. Svetten kommer som et resultat ikke ut, og kroppen får ikke frigjort toksiner og regulere kroppstemperaturen.</p>
            </div>,
        },
        {
            id: 5,
            kategori: "deodorant",
            sporsmal: "Hvordan fungerer magnesium?",
            svar: 
            <div>
                <p>I alle Naturity sine deodoranter er den aktive ingrediensen, altså den som sørger for at bakterier ikke kan trives, magnesiumhydroksid. Vi har valgt dette over det mest vanlige alternativet bikarbonat (natron), fordi det oppleves som mer skånsomt mot huden. Dette nettopp fordi det løses opp mer langsomt i svetten, og du blir dermed ikke tørr og rød under armene. <Link href="/blogg/den-naturlige-kraften-av-magnesiumhydroksid">Les mer om magnesiumhydroksid på bloggen vår</Link>.</p>
            </div>,
        },
        {
            id: 6,
            kategori: "deodorant",
            sporsmal: "Hvorfor bruker dere glasskrukker i stedet for tradisjonell deodorantemballasje?",
            svar: 
            <div>
                <p>Når vi utviklet våre deodorantprodukter, var vi fast bestemt på å finne en emballasjeløsning som oppfylte våre krav til miljøvennlighet, brukervennlighet og en nøye utvalgt formulasjon. Etter nøye overveielse har vi valgt glasskrukker som vår foretrukne emballasje, og her er hvorfor:</p>
                <ul>
                    <li>Miljøvern er en kjerneverdi for Naturity. Vi har lenge søkt etter alternativer til tradisjonell plastemballasje, men det har vist seg å være utfordrende. Bioplastemballasje er en flott tanke, men til dags dato har vi ikke funnet en løsning som oppfyller våre krav til bærekraft og brukervennlighet. Vi vil sørge for at våre produkter har minimal miljøpåvirkning, og glasskrukker kan resirkuleres og bidrar til å bevare naturressursene.</li>
                    <li>Brukervennlighet er utrolig viktig for oss. Glasskrukker gir deg muligheten til å bruke så mye eller så lite som du trenger uten å sløse, og du kan være sikker på at du får mest mulig ut av produktet.</li>
                    <li>Hylseemballasje ville også tvunget oss over til å benytte voks. Les mer om hvorfor vi ikke bruker voks i deodorantene våre i spørsmålet under.</li>
                </ul>
            </div>,
        },
        {
            id: 7,
            kategori: "deodorant",
            sporsmal: "Hvorfor bruker dere ikke voks i deodorantene?",
            svar: 
            <div>
                <p>Voks er god på å regulere kremens temperatur og holde den stabil. Problemet med å bruke voks i deodorant er at ubleket voks (som er det mest naturlige, uten bruk av kjemikalier) har en gulaktig farge, (eller om en bruker bleket voks, hvit farge) som kan forbli i klær. Da alle vokser har et høyt smeltepunkt, går dette som regel ikke vekk med mindre du vasker klærne dine på dens smeltepunkt, som kan variere fra 60 til 90 grader. Dette er ikke forenelig med å tilby bærekraftige produkter, og er ikke bra for klærne.</p>
                <p>Voks er en fantastisk ingrediens, og egner seg veldig godt til alle andre produkter enn deodoranter. For eksempel i leppepomader eller andre kremer, da disse ikke direkte smitter over til klærne som deodoranter gjør.</p>
                <p>Naturity sin deodorant er hvit og fargen kommer som en kombinasjon av alle ingrediensene vi bruker. Om det oppstår oljeflekker fra de naturlige oljene eller hvite pulverrester, er det lett å fjerne disse. På det aktuelle stedet, bruk litt oppvaskemiddel og bikarbonat og la det stå for noen minutter. Legg deretter klærne i vaskemaskinen. Voila, så er klærne dine er gode som ny!</p>
            </div>,
        },
        {
            id: 8,
            kategori: "frakt_og_angrerett",
            sporsmal: "Hvordan returnerer jeg en vare?",
            svar: 
            <div>
                <p>Du har rett til å angre på kjøp ved bruk av angreretten. Angreretten er på 14 dager og begynner å løpe fra du har mottatt produktet. Produktet må være ubrukt og returneres i sin originale emballasje og tilstand. Du vil motta en tilbakebetaling for produktet, men ikke for fraktgebyrene. Legg ved angreskjema i pakken du returnerer (<a href="https://naturity.no/no-angreskjema.pdf" target="_blank">skriv det ut her</a>).</p>
            </div>,
        },
        {
            id: 9,
            kategori: "frakt_og_angrerett",
            sporsmal: "Produktet jeg mottok er ødelagt, hva gjør jeg?",
            svar: 
            <div>
                <p>Hvis produktet er defekt eller skadet ved din mottakelse, <Link href="/kontakt">ta kontakt</Link> med oss for å foreta reklamasjon.</p>
            </div>,
        },
        {
            id: 10,
            kategori: "frakt_og_angrerett",
            sporsmal: "Er det gratis frakt?",
            svar: 
            <div>
                <p>Vi tilbyr gratis frakt til alle bestillinger over 499 kr. For bestillinger under dette beløpet vil det påløpe et fraktgebyr.</p>
            </div>,
        },
        {
            id: 11,
            kategori: "frakt_og_angrerett",
            sporsmal: "Hvor lang tid tar leveringen?",
            svar: 
            <div>
                <p>Leveringstiden vil variere avhengig av destinasjonen og kan påvirkes av forhold som er utenfor vår kontroll. Vi tar ikke ansvar for eventuelle forsinkelser eller tap som følge av forsinkelser i leveransen.</p>
            </div>,
        },

    ]

    function closeAll(exceptId) {
        // Get all elements with the class "ans_open"
        const openElements = document.querySelectorAll('.ans_open');
      
        // Loop through all open elements and remove the "ans_open" class
        openElements.forEach((element) => {
          if (element.id !== exceptId) {
            element.classList.remove('ans_open');
          }
        });

        // also rotate the arrow back to original position
        const utvids = document.querySelectorAll('.utvid');
        utvids.forEach((utvid) => {
          utvid.style.transform = 'rotate(0deg)';
        });

      }

      function utvidInStyle(id) {
        if (document.querySelector("#ans_" + id).classList.contains("ans_open")) {
          document.getElementById("utvid_" + id).style.transform = 'rotate(0deg)';
        } else {
          document.getElementById("utvid_" + id).style.transform = 'rotate(180deg)';
        }
      }


    const qnaItems_generelt = sporsmalOgSvar
        .filter(qna => qna.kategori === "generelt")
        .map(qna => 
            <div className="qna" key={qna.id}>
                <button onClick={ () => {closeAll("ans_" + qna.id); utvidInStyle(qna.id); document.querySelector("#ans_" + qna.id).classList.toggle("ans_open") }}>
                    <h3>{qna.sporsmal}</h3>
                    <img src="expand.svg" alt="Utvid" className="utvid" id={"utvid_" + qna.id} />
                </button>
                <div className="qna_answer" id={"ans_" + qna.id}>{qna.svar}</div>
            </div>
    )

    const qnaItems_deodorant = sporsmalOgSvar
        .filter(qna => qna.kategori === "deodorant")
        .map(qna => 
            <div className="qna" key={qna.id}>
                <button onClick={ () => {closeAll("ans_" + qna.id); utvidInStyle(qna.id); document.querySelector("#ans_" + qna.id).classList.toggle("ans_open") }}>
                    <h3>{qna.sporsmal}</h3>
                    <img src="expand.svg" alt="Utvid" className="utvid" id={"utvid_" + qna.id} />
                </button>
                <div className="qna_answer" id={"ans_" + qna.id}>{qna.svar}</div>
            </div>
    )

    const qnaItems_fraktAngrerett = sporsmalOgSvar
        .filter(qna => qna.kategori === "frakt_og_angrerett")
        .map(qna => 
            <div className="qna" key={qna.id}>
                <button onClick={ () => {closeAll("ans_" + qna.id); utvidInStyle(qna.id); document.querySelector("#ans_" + qna.id).classList.toggle("ans_open") }}>
                    <h3>{qna.sporsmal}</h3>
                    <img src="expand.svg" alt="Utvid" className="utvid" id={"utvid_" + qna.id} />
                </button>
                <div className="qna_answer" id={"ans_" + qna.id}>{qna.svar}</div>
            </div>
    )

    

    return (
      <div className="SOG">
        <h2>Generelt</h2>

        <div>{qnaItems_generelt}</div>

        <h2>Deodorant</h2>

        <div>{qnaItems_deodorant}</div>

        <h2>Frakt og angrerett</h2>

        <p>Dette er en kort oppsummering. For nærmere informasjon, sjekk ut <Link href="/frakt-og-retur">informasjon om frakt og retur</Link>.</p>

        <div>{qnaItems_fraktAngrerett}</div>

      </div>
    )
  }
  