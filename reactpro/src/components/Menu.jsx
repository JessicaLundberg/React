import React from "react";

class Menu extends React.Component {
    render() {
        return(
            <div>
                <div class="menu">
                        <div class="search">Sök...
                            <i class="search-icon material-icons">search</i>
                        </div>
                        <a href="index.html"><div class="pagelinktitle">Hem</div></a> 
                        <a href="Kurser.html"><div class="Kurstitle">Kurser
                            <a href="Biologi1.html"><div class="kurs">Biologi 1</div></a> 
                            <div class="kurs">Biologi 2</div>
                            <div class="kurs">Bioteknik</div>
                            <div class="kurs">Experimentell fysik och kemi</div>
                            <div class="kurs">Kemi 1</div>
                            <div class="kurs">Kemi 2</div>
                            <div class="kurs">Gymnasiearbete</div>
                            <div class="kurs">Matematik</div>
                        </div></a>
                        <a href="Extra.html"><div class="pagelinktitle">Inaktuella</div></a> 
                        <div class="pagelinktitle">För Lärare</div>
                        <div class="pagelinktitle">Om</div>
                    </div>
            </div>
        )
    }
}

export default Menu;