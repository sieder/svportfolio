import React, { useState, useEffect } from 'react'

import './app.styles.scss'
import { ReactComponent as Loadersvg} from './assets/images/loader.svg'
import { Portfolio } from './page/portfolio.component'

function App() {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      console.log('Hello, World! after 3000=3 seconds')
      setLoading(false)
    }, 3000);
    
  }, [])

  if (isLoading) {
    return (
    <div className="container">
      <Loadersvg style={{width: '250px'}} />
      <p>loading</p>
    </div>
    )
  } else {
    return <Portfolio />
  }

}

export default App;