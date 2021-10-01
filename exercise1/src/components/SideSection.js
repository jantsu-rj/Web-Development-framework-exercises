import React from 'react'
import styles from './SideSection.module.css'

export default function SideSection(props) {
    return (
        <div>
            <div className={ styles.sideContainer }>
                <div className={ styles.number }> {props.number} </div>
                <div className={ styles.title }>
                    <span className={ styles.topic }>{props.topic}    |</span> {props.title} </div>
            </div>
            <div className={ styles.line }> ______________________________________ </div>

        </div>
    )
}
