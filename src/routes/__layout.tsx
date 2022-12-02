import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'

import RouteRoot from 'routes/index'
import RouteHome from 'routes/home/index'
import RouteHomeNew from 'routes/home/new'
import RouteHomeSettings from 'routes/home/settings'
import RouteGame from 'routes/game/index'
import RouteNotFound from 'routes/notfound'

import HomeMain from 'components/home/HomeMain'
import Audio from 'components/utils/Audio'

const Root = () => {

  // Rendering //

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RouteRoot />}>
            <Route path='' element={<RouteHome />}>
              <Route path='' element={<HomeMain />} />
              <Route path='new' element={<RouteHomeNew />} />
              <Route path='settings' element={<RouteHomeSettings />} />
            </Route>
            <Route path='game' element={<RouteGame />} />
            <Route path='*' element={<RouteNotFound />} />
          </Route>
        </Routes>
      </Router>
      <Audio />
    </>
  )
}

export default Root
