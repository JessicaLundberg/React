import React from "react";
import LikeButton from "../components/Likebutton";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

class Extra extends React.Component {
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
                        <a href="/"><FontAwesomeIcon icon={faAngleLeft} size="2x"/></a>
                        <h2 class="page-name">Extra</h2>
                    </div>
                    <div class="pagetext">Här finns dem övriga kraven som inte passade in på hemsidan</div>

                    <LikeButton className="likebutton" />

                    <div class="form">
                        <h2>Registrering för nyhetsbrev</h2>

                        <form action="mailto:someone@example.com" method="post">
                            <label for="text">Namn:</label>
                            <input type="text" name="name" placeholder="Ditt namn" /><br />
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Din email" required />
                            <br />
                            <button type="submit" value="Send">Skicka</button>
                        </form>
                    </div>


                </div>

            </main>
        )
    }
}

export default Extra;