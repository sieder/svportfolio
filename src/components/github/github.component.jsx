import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import './github.styles.scss'

export const Github = () => {
    return (
        <div>
            <p>
            check out my <a 
            target="_blank" 
            href="https://github.com/sieder">
            github<FontAwesomeIcon icon={faGithub} />
            </a>.
            </p>
        </div>
    )
}