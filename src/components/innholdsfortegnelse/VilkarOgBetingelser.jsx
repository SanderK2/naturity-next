'use client'

import React, { useState } from 'react'

export default function InnholdVilkarOgBetingelser() {

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
                  <li><a href="#1">1. Avtalen</a></li>
                  <li><a href="#2">2. Partene</a></li>
                  <li><a href="#3">3. Pris</a></li>
                  <li><a href="#4">4. Avtaleinngåelse</a></li>
                  <li><a href="#5">5. Betalingen</a></li>
                  <li><a href="#6">6. Levering</a></li>
                  <li><a href="#7">7. Risikoen for varen</a></li>
                  <li><a href="#8">8. Angrerett</a></li>
                  <li><a href="#9">9. Forsinkelse og manglende levering - kjøpernes rettigheter og frist for å melde krav</a></li>
                  <li><a href="#10">10. Mangel ved varen - kjøperens rettigheter og reklamasjonsfrist</a></li>
                  <li><a href="#11">11. Selgerens rettigheter ved kjøperens mislighold</a></li>
                  <li><a href="#12">12. Garanti</a></li>
                  <li><a href="#13">13. Personopplysninger</a></li>
                  <li><a href="#14">14. Konfliktløsning</a></li>
                </ul>
                }
              </div>
    )
  }