import './App.css'

import Curtain from './components/Curtain'
import MainSwiper from './components/MainSwiper'
import { useEffect } from 'react'

function App() {
  // auto play music
  useEffect(() => {
    const audio = new Audio("/assets/audio.mp3")

    audio.loop = true

    const startAudio = () => {
      audio.play().catch(() => { })

      window.removeEventListener("click", startAudio)
      window.removeEventListener("touchstart", startAudio)
    }

    window.addEventListener("click", startAudio)
    window.addEventListener("touchstart", startAudio)

    return () => {
      audio.pause()

      window.removeEventListener("click", startAudio)
      window.removeEventListener("touchstart", startAudio)
    }
  }, [])

  return (
    <>
      <Curtain duration={3} />
      <MainSwiper />
    </>
  )
}

export default App
