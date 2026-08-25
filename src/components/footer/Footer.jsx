import styles from "./footer.module.css"
import Link from "next/link"

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.info_wrapper}>
          <div>
            <h3>NATURITY.NO</h3>
            <p>Naturity er en produsent av naturlige hudpleieprodukter.</p>
            <p>Vi prioriterer korte ingredienslister med målet om å ivareta huden.</p>
          </div>
          <div>
            <h3>Om</h3>
            <Link href="/om">Om oss</Link>
            <Link href="/blogg">Blogg</Link>
            <Link href="/vilkar-og-betingelser">Vilkår og betingelser</Link>
            <Link href="/personvern">Personvernpolicy</Link>
            <Link href="/frakt-og-retur">Frakt og retur</Link>
          </div>
          <div>
            <h3>Kontakt</h3>
            <Link href="/kontakt">Kontakt oss</Link>
            <Link href="/ofte-stilte-sporsmal">Ofte stilte spørsmål</Link>
            <Link href="/forhandlere">Våre forhandlere</Link>
          </div>
          <div className={styles.socials}>
            <a href="https://facebook.com/naturityno" target="_blank"><img src="/facebook.png" alt="Facebook" title="Facebook" />naturityno</a>
            <a href="https://instagram.com/naturityno" target="_blank"><img src="/instagram.png" alt="Instagram" title="Instagram" />@naturityno</a>
            <a href="https://twitter.com/naturityno" target="_blank"><img src="/twitterx.png" alt="Twitter/X" title="Twitter/X" />@naturityno</a>
            <a href="https://pinterest.com/naturityno" target="_blank"><img src="/pinterest.png" alt="Pinterest" title="Pinterest" />@naturityno</a>
          </div>
          <div>
            <div className={styles.payment}>
              <img src="/visa.png" alt="Visa" title="Visa" />
              <img src="/mastercard.png" alt="Mastercard" title="Mastercard" />
              <img src="/vipps.png" alt="Vipps" title="Vipps" />
              <img src="/paypal.svg" alt="PayPal" title="PayPal" />
            </div>
            <div className={styles.condensed_margin}>
              <p>NATURITY UB</p>
              <p>C/O Erlend V. Bach</p>
              <p>Selsbakkvegen 34</p>
              <p>7027 Trondheim</p>
              <p>Org.nr: 932 541 890</p>
            </div>
            <div className={styles.condensed_margin}>
              <a href="mailto:kundeservice@naturity.no" target="_blank">kundeservice@naturity.no</a>
              <a href="tel:+4790257966">+47 902 57 966</a>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.grontpunkt}>
            <a href="https://www.grontpunkt.no/" target="_blank" title="Gå til Grønt Punkt Norge"><img src="/grontpunktnorge.svg" alt="Grønt Punkt Norge" /></a>
            <p>Vi tar miljøansvar! Medlem av Grønt Punkt Norge.</p>
          </div>
          <div className={styles.copyright}>
            2024 © Naturity. Alle rettigheter forbeholdt.
          </div>
        </div>
      </footer>
    )
  }
  