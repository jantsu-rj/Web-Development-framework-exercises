import React from 'react'
import styles from "./NewsNotification.module.css"

export default function Notifications(props) {
    return (
        <div className={ styles.notificationBackground }>
            <div>
                <div className={ styles.container }>
                    <span className={ styles.header }>{ props.topic }:</span> { props.body }
            </div>
            </div>
        </div>
    )
}
