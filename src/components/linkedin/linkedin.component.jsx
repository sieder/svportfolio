import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './linkedin.styles.scss'

export const LinkedIn = () => {
    return (
        <div>
            <p>
            connect with me on <a 
            target="_blank" 
            href="https://www.linkedin.com/in/sieder-villareal-259ab1ab/">
             linkedin <FontAwesomeIcon icon={faLinkedin} />
            </a>.
            </p>
        </div>
    )
}