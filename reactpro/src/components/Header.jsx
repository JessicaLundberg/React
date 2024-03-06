import React from "react";

class Header extends React.Component {
    render() {
        return(
            <header>
                <div class="header">
                    <div class="icon"><i class="fa fa-flask fa-4x"></i></div>
                    <h1 class="title">Magnus Ehinger</h1>
                    <div class="undertitle">- Allt du behöver för A i Biologi, Kemi, Bioteknik, Gymnasiearbete m.m.</div>
                </div>
            </header>
        )
    }
}

export default Header;