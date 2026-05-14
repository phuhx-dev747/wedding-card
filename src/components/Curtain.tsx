import { motion } from "motion/react"
import curtainRedLeft from "../assets/curtain-red-left.webp"
import curtainRedRight from "../assets/curtain-red-right.jpg"
import audioSrc from "../assets/audio.mp3"
import { useRef, useState } from "react"
import images from "../assets/image";

export default function Curtain({
  duration = 2,
  delay = 0.7,
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const curtainBackground = {
    backgroundImage: `url(${curtainRedRight})`,
    backgroundSize: "auto 100vh",
    backgroundPosition: "center",
  }

  const handleOpenInvitation = async () => {
    if (isPlaying) {
      setIsPlaying(false)
      audioRef.current?.pause()
      return
    }

    if (!audioRef.current) {
      audioRef.current = new Audio(audioSrc)
      audioRef.current.loop = true
      audioRef.current.volume = 0.6
    }

    try {
      await audioRef.current.play()
      setIsPlaying(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="curtain flex justify-center absolute overflow-hidden">
      <motion.img
        src={curtainRedLeft}
        alt="curtain-left"
        className="absolute top-0 h-full z-10"
        initial={{ x: 1 }}
        animate={{
          x: [1, -window.innerWidth],
          display: 'none'
        }}
        transition={{
          duration,
          delay,
          ease: "easeInOut"
        }} />
      <motion.div
        className='curtainLeft w-[50vw] h-screen z-9'
        style={curtainBackground}
        animate={{
          x: [0, -window.innerWidth],
          display: 'none'
        }}
        transition={{
          duration,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div
        className='curtainRight w-[50vw] h-screen z-9'
        style={curtainBackground}
        animate={{
          x: [0, window.innerWidth],
          display: 'none'
        }}
        transition={{
          duration,
          delay,
          ease: "easeInOut"
        }}
      ></motion.div>

      {/* MUSIC BUTTON */}
      <button
        className="
          fixed bottom-4 right-4
          z-[30]

          bg-[#f4a57a]
          backdrop-blur-md

          text-white
          px-3 py-2
          rounded-full

          shadow-xl
          transition
          opacity-95
          hover:opacity-100
          hover:scale-105
          active:scale-95
          flex items-center
          group overflow-hidden
        "
        onClick={handleOpenInvitation}
      >
        <img src={images.music} className="w-7 h-7" style={{ animation: isPlaying ? 'spin 10s linear infinite' : 'none' }} /> <span className="group-hover:w-[50px] duration-500 w-0 group-hover:opacity-100 opacity-0 transition-all">Music</span>
      </button>
    </div>
  )
}