import React from "react";

import Biologiintro from '../media/Biologi-intro.mp4'
import metan from '../media/metan.jpeg'
import etanol from '../media/etanol.jpeg'
import adenin from '../media/adenin.jpeg'
import polyadenin from '../media/polyadenin.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Biologi1 extends React.Component {
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
                              <a href="/Kurser"><i class="fa fa-angle-left fa-2x"></i></a>
                              <h2 class="page-name">Biologi 1</h2>
                         </div>

                         <div class="page-content">
                              <div class="page-text">Här hittar du allt vad du behöver för att lyckas med dina studier i Biologi 1, från gamla kursscheman till lektioner (videogenomgångar), laborationer och gamla prov!</div>

                              <div class="subheading">Introduktion</div>
                              <div class="page-text">Min in­tro­duk­tions­lek­tion till kur­sen i Biologi 1. Kolla på videon, läs texten och förstå varför biologi är så viktigt!</div>

                              <video controls>
                                   <source src={Biologiintro} type="video/mp4" />
                                   Your browser does not support the video tag.
                              </video>

                              <div class="subheading">Vad är biologi?</div>
                              <div class="page-text">Läran om livet! <br />- bio = liv <br />- logos = lära, skrift</div>

                              <div class="subheading">Definiera liv!</div>
                              <div class="page-text">Var går gränsen mellan det levande och det icke-levande?</div>

                              <table border="1" class="molecule-table">
                                   <tr>
                                        <th>Är den levande?</th>
                                   </tr>
                                   <tr>
                                        <td><img src={metan} alt="Bild på metan molekyl" class="molecule" /></td>
                                   </tr>
                                   <tr>
                                        <td><img src={etanol} alt="Bild på metan molekyl" class="molecule" /></td>
                                   </tr>
                                   <tr>
                                        <td><img src={adenin} alt="Bild på metan molekyl" class="molecule" /></td>
                                   </tr>
                              </table>

                              <img src={polyadenin} alt="Bild på polyadenin molekyl" class="big-molecule" />

                              <div class="course-menu">
                                   <div class="content">Innehåll</div>
                                   <ol class="course-list">
                                        <li class="menu-list">Kursscheman</li>
                                        <li class="menu-list"><a href="/Class">Lektioner</a></li>
                                        <li class="menu-list">Laborationer och övningar</li>
                                        <li class="menu-list">Gamla Prov</li>
                                        <li class="menu-list">Pedagogiska resurser på nätet</li>
                                   </ol>
                              </div>

                         </div>

                    </div>

               </main>
          )
     }
}

export default Biologi1;