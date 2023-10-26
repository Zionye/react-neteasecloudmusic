import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router'
import { globalRouters } from '~/router'

const App = () => {
  return (
    <div className="App">
      <Suspense fallback="">
        <div className="main">{useRoutes(globalRouters)}</div>
      </Suspense>
    </div>
  )
}

export default App