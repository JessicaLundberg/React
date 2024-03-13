import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons';


class Header extends React.Component {
    render() {
        return(
            <header>
                <div class="header">
                    <div class="icon"><FontAwesomeIcon icon={faFlask} size="4x" /></div>
                    <h1 class="title">Magnus Ehinger</h1>
                    <div class="undertitle">- Allt du behöver för A i Biologi, Kemi, Bioteknik, Gymnasiearbete m.m.</div>
                </div>
            </header>
        )
    }
}

export default Header;