import React from "react";

import Cellgenetik from '../media/Cellgenetik.jpeg'
import Cellbiology from '../media/Cellbiologi.jpeg'
import klassiskgenetik from '../media/klassiskgenetik.jpeg'
import evo from '../media/evo.jpeg'
import etologi from '../media/etologi.jpeg'
import ekologi from '../media/ekologi.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Class extends React.Component {
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
                        <a href="/Biologi1"><i class="fa fa-angle-left fa-2x"></i></a>
                        <h2 class="page-name">Lektioner</h2>
                    </div>
                    <div class="pagetext">Här finns alla lektioner för kursen Biologi 1</div>

                    <div class="course-container">
                        <div class="course">
                            <a href="/Cellbiology"><img src={Cellbiology} alt="Bild på cellmodell" class="course-image" /></a>
                            <div class="course-name"><a href="Cellbiology.html">Cellbiologi</a></div>
                        </div>
                        <div class="course">
                            <img src={Cellgenetik} alt="Bild på inzooming från cell till dna sträng" class="course-image" />
                            <div class="course-name">Cellgenetik</div>
                        </div>
                        <div class="course">
                            <img src={klassiskgenetik} alt="Bild på en blomma" class="course-image" />
                            <div class="course-name">Klassisk genetik</div>
                        </div>
                        <div class="course">
                            <img src={evo} alt="Bild på en fossil" class="course-image" />
                            <div class="course-name">Evolution och systematik</div>
                        </div>
                        <div class="course">
                            <img src={etologi} alt="Bild på ett bi som sitter på en blomma" class="course-image" />
                            <div class="course-name">Kemi 1</div>
                        </div>
                        <div class="course">
                            <img src={ekologi} alt="Bild på en groda" class="course-image" />
                            <div class="course-name">Ekologi</div>
                        </div>
                    </div>

                </div>

            </main>
        )
    }
}

export default Class;