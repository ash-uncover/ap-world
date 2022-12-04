import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// Libs
import { ShortcutManager, Shortcuts } from '@uncover/games-common'
// Components
import HomeMenu from './HomeMenu'

import './Home.css'

const HomeMain = () => {

  // Hooks //

  const navigate = useNavigate()

  useEffect(() => {
    const shortcuts: Shortcuts = {
      id: 'home-main-shortcuts',
      priority: 1,
      shortcuts: [
        { code: 'KeyN', callback: handleNew },
        { code: 'KeyS', callback: handleSettings },
      ]
    }
    return ShortcutManager.addShortcuts(shortcuts)
  })

  // Events //

  const handleNew = () => {
    navigate('new')
  }

  const handleSettings = () => {
    navigate('settings')
  }

  // Rendering //

  return (
    <HomeMenu
      title='AP Maze'
      items={[
        { text: 'New', onClick: handleNew },
        { text: 'Settings', onClick: handleSettings },
      ]}
    />
  )
}

export default HomeMain