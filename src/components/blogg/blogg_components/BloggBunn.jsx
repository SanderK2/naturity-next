import Link from "next/link"

export default function BloggBunn({Tagger}) {
    return (
        <div>
            <div className="tagger_b">
                <p>Tagger:</p>
                {Tagger.map((tagg) => (
                    <span key={tagg}><Link href={'/tagger/' + tagg}>{tagg}</Link></span>
                ))}
            </div>
            <div className="underblogg">
                <Link href="/blogg" className="flereblogg">Les flere av våre bloggartikler</Link>
            </div>
        </div>
    )
  }
  