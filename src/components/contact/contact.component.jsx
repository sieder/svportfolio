import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './contact.styles.scss'

export const Contact = () => {
    return (
        <div>
            <p>email: 
            <a href = "mailto:sieder00@gmail.com?subject = Feedback&body = Message">
            sieder00@gmail.com
            </a>
            </p>
        </div>
    )
}