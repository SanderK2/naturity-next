
export default function BloggTopp({Hovedbilde, Hovedbilde_alt, Tittel, Undertittel, Forfatter, Dato}) {
    return (
        <div className="bloggtopp">
            <img src={Hovedbilde} alt={Hovedbilde_alt} />
            <div>
                <h1 lang="no">{Tittel}</h1>
                <p className="ForfatterOgDato">Av {Forfatter} | {Dato}</p>
                <p className="undertittel">{Undertittel}</p>
            </div>
        </div>
    )
  }
  