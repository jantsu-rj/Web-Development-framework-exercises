import React from 'react'
import styles from "./Header.module.css"

export default function Header() {
    return (
        <div>
            <div className={ styles.headerBackground}>
                <div className={ styles.container }>
                    <div className= { styles.headerBoxes }>
                    <div className= { styles.brand }>HELSINGIN SANOMAT</div>
                    <div className= { styles.headerButtons }>Etusivu Uutiset Lehdet</div>
                    </div>

                    <div className= { styles.headerBoxes }>
                    <div className= { styles.headerButtons }>Tilaa Hae Kirjaudu Valikko</div>
                    </div>
                    
                </div>
            </div>
            <div className= { styles.navigationBar }>
                <div className= { styles.navigationButtons }>Etusivu Luetuimmat Uusimmat Politiikka Kaupunki Kulttuuri Tiede Hyvinvointi Ruoka Nyt</div>
            </div>
        </div>
    )
}
