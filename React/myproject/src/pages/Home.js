import React from "react";
import Ren from '../media/Ren.jpeg';
import Komet from '../media/Komet.jpeg';
import Man from '../media/Man.jpeg';
import Ice from '../media/Is.jpeg';
import America from '../media/America.jpeg';
import Mailard from '../media/Mailard.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Home extends React.Component {
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
                        <div class="page-name">Hem - Senaste nytt</div>
                    </div>
                    <div class="pagetext">De senaste artiklarna från Magnus Ehinger</div>

                    <div class="all-articles">
                        <div class="article">
                            <p class="image-text">Klarar renarna av ett varmare arktis?</p>
                            <img src={Ren} alt="Bild på en ren i vinterklimat" class="article-image" />
                        </div>
                        <div class="article">
                            <div class="image-text">Hur ett massutdöende ändrade våra hjärnor</div>
                            <img src={Komet} alt="Bild på en komet som åker mot jorden" class="article-image" />
                        </div>
                        <div class="article">
                            <div class="image-text">Hur människor och hundar samevolverat</div>
                            <img src={Man} alt="Bild på en man och hund från stenåldern" class="article-image" />
                        </div>
                        <div class="article-list">
                            <div class="article">
                                <div class="old-article-title">Under ytan på Domedagsglaciären</div>
                                <img src={Ice} alt="Bild på glaciär i vatten" class="article-image-small" />
                            </div>
                            <div class="article">
                                <div class="old-article-title">När amerikanska västern exploderade</div>
                                <img src={America} alt="Bild på en karta av Nordamerika med explosioner placerade på vänster del av landet." class="article-image-small" />
                            </div>
                            <div class="article">
                                <div class="old-article-title">Hur maillardreaktionen funkar</div>
                                <img src={Mailard} alt="Bild på en maillardreaktion" class="article-image-small" />
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        )
    }
}

export default Home;