'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function Blogg_comp_mainpage({Tagg}) {
    const pathname = usePathname()

    // maka the input field search for articles and hide the ones that don't match the search
    function keyDownFunction(e) {
      if (e.key === 'Enter') {
        var input, filter, articles, a, i, txtValue;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        articles = document.getElementsByClassName("artikkel");
        var noItemsFound = document.getElementById("noItemsFound");
        var foundItems = 0;
        for (i = 0; i < articles.length; i++) {
          a = articles[i].getElementsByClassName("y")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            articles[i].style.display = "";
            foundItems++;
          } else {
            articles[i].style.display = "none";
          }
        }
        if (foundItems === 0) {
          noItemsFound.style.display = "block";
        } else {
          noItemsFound.style.display = "none";
        }
      }
    }

    function waitForElement(selector, callback) {
        if (typeof window !== "undefined") {
        if (document.querySelector(selector)) {
          callback();
        } else {
          setTimeout(() => waitForElement(selector, callback), 500);
        }
      }
      }
      
      waitForElement("#noItemsFound", () => {
        startTaggSearch();
      });

      function startTaggSearch() {
    // make the Tagg prop search for articles with the same tag and hide the ones that don't match the tag
    if (Tagg) {
        var articles = document.getElementsByClassName("artikkel");
        var noItemsFound = document.getElementById("noItemsFound");
        var foundItems = 0;
        for (var i = 0; i < articles.length; i++) {
            var tagger = articles[i].getElementsByClassName("tagger")[0].getElementsByTagName("a");
            var tagg;
            for (var j = 0; j < tagger.length; j++) {
            tagg = tagger[j].innerText;
            if (tagg === Tagg) {
                articles[i].style.display = "";
                foundItems++;
                break;
            } else {
                articles[i].style.display = "none";
            }
            }
        }
        if (foundItems === 0) {
            noItemsFound.style.display = "block";
        } else {
            noItemsFound.style.display = "none";
        }
        }
    }

    return (
      <main>
        <div className="blogg">
      <div className="toppen">
        { pathname === '/blogg' ? <input type="text" id="search" autoComplete="off" placeholder="Søk" onKeyDown={keyDownFunction} /> : null}
      </div>
      <div className="artikler">

        

        {/* ! Jeg har kommentert det ut sånn at du vet hvordan du legger inn din egen blogg artikkel, men at det ikke vises noen

        <div className="artikkel">
          <Link href="/blogg/test" className="artikkellink">
          <img src="deodorantkremer.png" alt="">
          <div className="y">
            <h2>Dette er en bloggtittel der du kan skrive litt tekst</h2>
            <p>Av Naturity | 1. Januar 2023</p>
            <p>Dette er litt undertekst der du kan utdype litt mer om hva denne artikkelen handler om og sånt.</p>
          </div>
          </Link>
          <div className="tagger">
            <Link href="/tagger/Oppdateringer">Oppdateringer</Link>
            <Link href="/tagger/Tips">Tips</Link>
          </div>
        </div> */}
        

        <div className="artikkel">
          <Link href="/blogg/naturligvis-et-godt-valg-naturity-sine-5-lofter" className="artikkellink">
          <img src="/naturity_noun.png" alt="" />
          <div className="y">
            <h2>Naturligvis et godt valg: Naturity sine 5 løfter</h2>
            <p>Av Naturity | 21. februar 2024</p>
            <p>Hva er Naturity sine kjerneverdier?</p>
          </div>
          </Link>
          <div className="tagger">
            <Link href="/tagger/Naturity">Naturity</Link>
          </div>
        </div>


        <div className="artikkel">
          <Link href="/blogg/vi-senker-fraktprisene" className="artikkellink">
          <img src="/parcel.jpg" alt="" />
          <div className="y">
            <h2>Vi senker fraktprisene!</h2>
            <p>Av Naturity | 21. februar 2024</p>
            <p>Det er blitt billigere å handle Naturity på nett.</p>
          </div>
          </Link>
          <div className="tagger">
            <Link href="/tagger/Oppdateringer">Oppdateringer</Link>
            <Link href="/tagger/Naturity">Naturity</Link>
          </div>
        </div>

        <div className="artikkel">
          <Link href="/blogg/nytt-design-og-nye-produkter" className="artikkellink">
          <img src="/nyblogg_produkter2.png" alt="" />
          <div className="y">
            <h2>Nytt design og nye produkter</h2>
            <p>Av Naturity | 13. oktober 2023</p>
            <p>Vi har gledende nyheter å dele! To nye produkter, blant annet.</p>
          </div>
          </Link>
          <div className="tagger">
            <Link href="/tagger/Oppdateringer">Oppdateringer</Link>
            <Link href="/tagger/Deodorant">Deodorant</Link>
            <Link href="/tagger/Naturity">Naturity</Link>
          </div>
        </div>

        <div className="artikkel">
          <Link href="/blogg/alt-du-maa-vite-om-vaare-deodoranter" className="artikkellink">
          <img src="/deopic.png" alt="" />
          <div className="y">
            <h2>Alt du må vite om våre deodoranter</h2>
            <p>Av Naturity | 3. oktober 2023</p>
            <p>Naturity har lenge jobbet med en deodorantformulering som verdsetter både effektivitet og omsorg for kroppen din. Den er spesielt utviklet med tanke på sensitiv hud.</p>
          </div>
          </Link>
          <div className="tagger">
            <Link href="/tagger/Deodorant">Deodorant</Link>
            <Link href="/tagger/Naturity">Naturity</Link>
          </div>
        </div>

        <div className="artikkel">
          <Link href="/blogg/sommerstengt-2023" className="artikkellink">
          <img src="/sommerstengt-foto.jpg" alt="" />
          <div className="y">
            <h2>Sommerstengt hos Naturity i juli 2023</h2>
            <p>Av Naturity | 1. juli 2023</p>
            <p>Informasjon angående sommerstengt i perioden 1. juli - 1. august.</p>
          </div>
          </Link>
          <div className="tagger">
            <Link href="/tagger/Oppdateringer">Oppdateringer</Link>
            <Link href="/tagger/Naturity">Naturity</Link>
          </div>
        </div>

        <div className="artikkel">
          <Link href="/blogg/den-naturlige-kraften-av-magnesiumhydroksid" className="artikkellink">
          <img src="/magnesiumhydroksid2.jpg" alt="" />
          <div className="y">
            <h2>Den naturlige kraften av: Magnesiumhydroksid</h2>
            <p>Av Naturity | 2. juni 2023</p>
            <p>Er det en fugl? Er det et fly? Nei, det er magnesiumhydroksid - naturens svar på friskhet!</p>
          </div>
          </Link>
          <div className="tagger">
            <Link href="/tagger/Den naturlige kraften av">Den naturlige kraften av</Link>
            <Link href="/tagger/Ingredienser">Ingredienser</Link>
            <Link href="/tagger/Naturity">Naturity</Link>
            <Link href="/tagger/Deodorant">Deodorant</Link>
          </div>
        </div>


      </div>
      <p id="noItemsFound">Fant ingen artikler som passer søket ditt</p>
    </div>
      </main>
    )
  }
  