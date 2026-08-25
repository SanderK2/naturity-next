'use client'

import React, { useState } from 'react'

export default function InnholdPersonvern() {

    const [vis_innhold, setvis_innhold] = useState(false)

    function utvidInStyle() {
      if (vis_innhold == false) {
        document.getElementById("utvid").style.transform = 'rotate(180deg)';
      } else {
        document.getElementById("utvid").style.transform = 'rotate(0deg)';
      }
    } // try using inline conditional classname instead of this

    return (
        <div className="innhold">
                <button onClick={() => {setvis_innhold(!vis_innhold); utvidInStyle()}}>
                  <h3>Innhold</h3>
                  <img src="expand.svg" alt="Utvid" id="utvid" />
                </button>
                {vis_innhold && 
                <ul>
                  <li><a href="#innledning">Innledning</a></li>
                  <li><a href="#1">Endringer i denne personvernerklæringen</a></li>
                  <li><a href="#2">Hvordan vi samler inn og bruker din personlige informasjon</a></li>
                  <li><a href="#3">Hvilke personopplysninger vi samler inn</a></li>
                  <li><a href="#4">Informasjon vi samler inn direkte fra deg</a></li>
                  <li><a href="#5">Informasjon vi samler inn gjennom informasjonskapsler</a></li>
                  <li><a href="#6">Informasjon vi innhenter fra tredjeparter</a></li>
                  <li><a href="#7">Hvordan vi bruker din personlige informasjon</a></li>
                  <li><a href="#8">Informasjonskapsler</a></li>
                  <li><a href="#9">Hvordan vi avslører personlig informasjon</a></li>
                  <li><a href="#10">Brukergenerert innhold</a></li>
                  <li><a href="#11">Tredjeparts nettsteder og lenker</a></li>
                  <li><a href="#12">Opplysninger om barn</a></li>
                  <li><a href="#13">Sikkerhet og oppbevaring av informasjonen din</a></li>
                  <li><a href="#14">Dine rettigheter og valg</a></li>
                  <li><a href="#15">Klager</a></li>
                  <li><a href="#16">Internasjonale brukere</a></li>
                  <li><a href="#17">Kontakt</a></li>
                </ul>
                }
              </div>
    )
  }