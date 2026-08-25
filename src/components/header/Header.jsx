'use client'

import styles from "./header.module.css"
import Link from "next/link"
import React, { useState } from 'react'

export default function Header() {

  // ? ========== Endre her ==========
  const konstant_melding_venstre = "Pakke i postkasse 49,-"
  const konstant_melding_hoyre = "Fri frakt fra 499,-"

  const [vis_melding, setvis_melding] = useState(false) // endre på true/false
  const varsel_melding = "Naturity.no 2.0 er her!"
  const vis_link = true
  const link_tekst = "Se butikken"
  const link_url = "/butikk" // må ha / (slash)
  // ? ===============================

  const [btk_mstatus, setbtk_mstatus] = useState(false) // butikk dropdown status
  const [vis_burgermeny, setvis_burgermeny] = useState(false)
  const [vis_burgerbutikk, setvis_burgerbutikk] = useState(false)

  function btkStatus() {
    if (btk_mstatus == false) {
      setbtk_mstatus(true);
      btkActive();
    } else {
      setbtk_mstatus(false);
      btkLeave();
    }
  }

  function btkActive() {
    setbtk_mstatus(true);
    document.getElementById("btkDropdown").style.display = 'flex';
    document.getElementById("butikkLink").style.color = '#058c51';
    document.getElementById("btkExpand").style.transform = 'rotate(180deg)';
    setTimeout(() => {
      document.getElementById("btkDropdown").style.opacity = '1';
    }, 1);
  }

  function btkLeave() {
    setbtk_mstatus(false);
    document.getElementById("btkDropdown").style.opacity = '0';
    document.getElementById("butikkLink").style.color = '#000000';
    document.getElementById("btkExpand").style.transform = 'rotate(0deg)';
    setTimeout(() => {
      document.getElementById("btkDropdown").style.display = 'none';
    }, 200);
  }

    return (
      <header>
        <div className={styles.mld_const}>
          <span>{ konstant_melding_venstre }</span>
          <span className={styles.mld_const_desktop}>{ konstant_melding_hoyre }</span>
        </div>
        <nav className={styles.nav}>
          <div>
            <Link href="/" className={styles.logolink}><img src="/naturity_headericon.svg" alt="Naturity Logo" className={styles.logo} /></Link>
          </div>
          <div className={styles.nav_u}>
            <div 
              className={styles.butikkWrapper}
              onMouseEnter={btkActive}
              onMouseLeave={btkLeave}
            >
              <button className={styles.butikkLink} id="butikkLink" onClick={btkStatus}>Butikk <img src="/expand.svg" id="btkExpand" className={styles.btkExpand} /></button>
              <div className={styles.butikkDropdown} id="btkDropdown">
                <div>
                  <h3>Kremer</h3>
                  <Link href="/butikk/deodorant" onClick={btkLeave}>Deodorantkrem</Link>
                </div>
                <div>
                  <h3>Diverse</h3>
                  <Link href="/butikk/leppepomade" onClick={btkLeave}>Leppepomade</Link>
                  <Link href="/butikk" onClick={btkLeave}>Alle produkter</Link>
                </div>
              </div>
            </div>
            <Link href="/blogg" className={styles.link}>Blogg</Link>
            <Link href="/om" className={styles.link}>Om oss</Link>
            <Link href="/kontakt" className={styles.link}>Kontakt</Link>
          </div>
          <div className={styles.findStore}><Link href="/forhandlere"><img src="/location_green.svg" alt="Kartnål" />Finn utsalgssted</Link></div>
          <button onClick={() => {setvis_burgermeny(!vis_burgermeny); setvis_burgerbutikk(false);}} className={styles.burger}>
            <div className={styles.b_line_1}></div>
            <div className={styles.b_line_2}></div>
            <div className={styles.b_line_3}></div>
          </button>
          {vis_burgermeny && <div className={styles.bm_bg} onClick={() => setvis_burgermeny(false)}></div>}
          {vis_burgermeny && <div className={styles.burgerMenu}>
            <div className={styles.bm_links}>
              <button onClick={() => setvis_burgerbutikk(!vis_burgerbutikk)}><img className={vis_burgerbutikk ? styles.btk_expanded : null} src="/expand_gray.svg" /> Butikk</button>
              {vis_burgerbutikk && <div className={styles.bm_b_links}>
                <h3>Kremer</h3>
                <Link href="/butikk/deodorant" onClick={() => setvis_burgermeny(false)} className={styles.bm_b_link}>Deodorantkrem</Link>
                <h3>Diverse</h3>
                <Link href="/butikk/leppepomade" onClick={() => setvis_burgermeny(false)} className={styles.bm_b_link}>Leppepomade</Link>
                <Link href="/butikk" onClick={() => setvis_burgermeny(false)} className={styles.bm_b_link}>Alle produkter</Link>
              </div>}
              <Link href="/blogg" onClick={() => setvis_burgermeny(false)} className={styles.bm_link}>Blogg</Link>
              <Link href="/om" onClick={() => setvis_burgermeny(false)} className={styles.bm_link}>Om oss</Link>
              <Link href="/kontakt" onClick={() => setvis_burgermeny(false)} className={styles.bm_link}>Kontakt</Link>
              <Link href="/forhandlere" onClick={() => setvis_burgermeny(false)} className={styles.bm_link}>Finn utsalgssted</Link>
            </div>
          </div>}
        </nav>
        {vis_melding && 
          <div className={styles.mld_varsel}>
            <div className={styles.v_mld}>
              <div className={styles.v_link_wrapper}>{ varsel_melding } &nbsp;</div>
              {vis_link && <div className={styles.v_link_wrapper}><Link href={ link_url } onClick={() => setvis_melding(false)} className={styles.v_link}>{ link_tekst }</Link></div>}
            </div>
            <div className={styles.v_lukk}>
              <button className={styles.lukk_btn} onClick={() => setvis_melding(false)}>X</button>
            </div>
          </div>
          }
      </header>
    )
  }
  