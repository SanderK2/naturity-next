'use client'

import styles from "./trustbox.module.css"

export default function Trustbox() {

    return (
      <main className='trustbox-comp'>
        <section className={styles.trustpilot_widget}>
            <a href="https://naturity.no/trustpilot" target="_blank">Vurder oss på <img src="/trustpilot.svg" alt="Trustpilot icon" /></a>
        </section>
      </main>
    )
  }
  