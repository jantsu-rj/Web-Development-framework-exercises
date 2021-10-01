import React from 'react'
import styles from './MainSection.module.css'

export default function MainSection(props) {
    return (
        <div className={ styles.mainBackground }>
            <div className={ styles.mainContainer }>
                <div>{props.image}</div>
                <div className={ styles.title }><span className={ styles.topic }>{props.topic}    |</span> {props.title} </div>
                <div className={ styles.info }>{props.category}  {props.time}</div>
            </div>
            <div className={ styles.sideContainer }>  </div>
        </div>
    )
}
