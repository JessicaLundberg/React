import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Cellbiology extends React.Component {
    render() {
        return (
            <main>
                <div class="container">
                    <div class="menu">
                        <div class="search">Sök...
                            <FontAwesomeIcon icon={faSearch} className="searchicon" />
                        </div>
                        <a href="/"><div class="pagelinktitle">Hem</div></a>
                        <a href="/Kurser"><div class="Kurstitle">Kurser
                            <a href="/Biologi1"><div class="kurs">Biologi 1</div></a>
                            <div class="kurs">Biologi 2</div>
                            <div class="kurs">Bioteknik</div>
                            <div class="kurs">Experimentell fysik och kemi</div>
                            <div class="kurs">Kemi 1</div>
                            <div class="kurs">Kemi 2</div>
                            <div class="kurs">Gymnasiearbete</div>
                            <div class="kurs">Matematik</div>
                        </div></a>
                        <a href="/Extra"><div class="pagelinktitle">Inaktuella</div></a>
                        <div class="pagelinktitle">För Lärare</div>
                        <div class="pagelinktitle">Om</div>
                    </div>

                    <div class="pagetitle">
                        <a href="/Class"><i class="fa fa-angle-left fa-2x"></i></a>
                        <h2 class="page-name">Cellbiologi</h2>
                    </div>

                    <div class="page-content">
                        <div class="page-text">Mina flippade vi­deo­ge­nom­gång­ar om cell­bio­lo­gi till kur­sen i Biologi 1. Följ dem och ta an­teck­ning­ar från dem, så lär du dig allra mest!</div>

                        <div class="subheading">Kunskapsmål och nyckelbegrepp</div>
                        <div class="page-text">Skolverket säger att följande centrala innehåll ska behandlas:</div>


                        <div class="quote-box">
                            <i class="fa fa-quote-left"></i>
                            <div class="quote">Eukaryota och prokaryota cellers egenskaper och funktion.</div>
                            <i class="fa fa-quote-right"></i>
                        </div>

                        <div class="page-text">När vi har gått igenom det här momentet i kursen, ska du kunna förklara och använda dig av följande begrepp:</div>

                        <ol class="vocab-list">
                            <li class="bullet-list">Arké</li>
                            <li class="bullet-list">Bakterie</li>
                            <li class="bullet-list">Eukaryot cell</li>
                            <li class="bullet-list">Cellteorin</li>
                            <li class="bullet-list">Vetenskaplig metod</li>
                            <li class="bullet-list">Protein</li>
                            <li class="bullet-list">Nukleinsyra</li>
                            <li class="bullet-list">Polysackarid</li>
                            <li class="bullet-list">Fett</li>
                            <li class="bullet-list">Fosfolipid</li>
                            <li class="bullet-list">Cell</li>
                            <li class="bullet-list">Cellmembran</li>
                            <li class="bullet-list">Cellvägg</li>
                            <li class="bullet-list">Cellkärna</li>
                            <li class="bullet-list">ATP</li>
                            <li class="bullet-list">Kemotrof</li>
                            <li class="bullet-list">Fototrof</li>
                            <li class="bullet-list">Autotrof</li>
                            <li class="bullet-list">Heterotrof</li>
                            <li class="bullet-list">Cellandning</li>
                            <li class="bullet-list">Fotosyntes</li>
                            <li class="bullet-list">Kloroplast</li>
                        </ol>

                        <div class="videolectures-menu">
                            <div class="content">Videogenomgångar</div>
                            <ol class="video-list">
                                <li class="menu-list">Cellteorin (Biologi 1)</li>
                                <li class="menu-list">Hur får organismer kol och energi?</li>
                                <li class="menu-list">Tre typer av celler</li>
                            </ol>
                        </div>

                    </div>

                </div>

            </main>
        )
    }
}

export default Cellbiology;