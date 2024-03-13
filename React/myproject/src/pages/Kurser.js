import React from "react";

import biologi1 from '../media/biologi1.jpeg'
import biologi2 from '../media/biologi2.jpeg'
import bioteknik from '../media/bioteknik.jpeg'
import exp from '../media/exp.jpeg'
import kemi1 from '../media/kemi1.jpeg'
import kemi2 from '../media/kemi2.jpeg'
import matematik from '../media/matematik.jpeg'
import gymnasiearbete from '../media/gymnasiearbete.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Kurser extends React.Component {
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
                        <a href="/"><i class="fa fa-angle-left fa-2x"></i></a>
                        <h2 class="page-name">Kurser</h2>
                    </div>
                    <div class="pagetext">Vad vill du lära dig om idag?</div>

                    <div class="course-container">
                        <div class="course">
                            <a href="/Biologi1"><img src={biologi1} alt="Bild på cell i mikroskop" class="course-image" /></a>
                            <div class="course-name"><a href="/Biologi1">Biologi 1</a></div>
                        </div>
                        <div class="course">
                            <img src={biologi2} alt="Bild på Vitruvianske mannen" class="course-image" />
                            <div class="course-name">Biologi 2</div>
                        </div>
                        <div class="course">
                            <img src={bioteknik} alt="Bild på vaga eldlågor" class="course-image" />
                            <div class="course-name">Bioteknik</div>
                        </div>
                        <div class="course">
                            <img src={exp} alt="Bild på metall material i en petriskål" class="course-image" />
                            <div class="course-name">Experimentell fysik & kemi</div>
                        </div>
                        <div class="course">
                            <img src={kemi1} alt="Bild på olika element från Periodiska systemet" class="course-image" />
                            <div class="course-name">Kemi 1</div>
                        </div>
                        <div class="course">
                            <img src={kemi2} alt="Bild på en cells uppbyggnad" class="course-image" />
                            <div class="course-name">Kemi 2</div>
                        </div>
                        <div class="course">
                            <img src={matematik} alt="Bild på matematisk uträkning skriven på en svart griffeltavla" class="course-image" />
                            <div class="course-name">Matematik</div>
                        </div>
                        <div class="course">
                            <img src={gymnasiearbete} alt="Bild på tre kugghjul med en hand på varsitt kugghjul" class="course-image" />
                            <div class="course-name">Gymnasiearbete</div>
                        </div>
                    </div>
                </div>


            </main>
        )
    }
}

export default Kurser;