import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'
import useMousePosition from '../hooks/useMousePosition'
import profilePhoto from '../assets/photodeprofile.png'

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function ProfileCard() {
  const [ready, setReady] = useState(false)
  const [parallaxOff, setParallaxOff] = useState(false)
  const mouse = useMousePosition()

  const xSpring = useSpring(0, { stiffness: 90, damping: 20, mass: 0.75 })
  const ySpring = useSpring(0, { stiffness: 90, damping: 20, mass: 0.75 })
  const rotateSpring = useSpring(0, { stiffness: 90, damping: 22, mass: 0.7 })

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 40)
    return () => window.clearTimeout(t)
  }, [])

  useEffect(() => {
    const update = () => {
      const noFinePointer = window.matchMedia('(hover: none)').matches
      const narrow = window.innerWidth < 768
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setParallaxOff(noFinePointer || narrow || reduceMotion)
    }
    update()
    window.addEventListener('resize', update)
    const mqHover = window.matchMedia('(hover: none)')
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    mqHover.addEventListener('change', update)
    mqMotion.addEventListener('change', update)
    return () => {
      window.removeEventListener('resize', update)
      mqHover.removeEventListener('change', update)
      mqMotion.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (parallaxOff) {
      xSpring.set(0)
      ySpring.set(0)
      rotateSpring.set(0)
      return
    }

    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const deltaX = mouse.x - cx
    const deltaY = mouse.y - cy
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    const force = clamp(distance / 420, 0, 1)
    const maxX = 42
    const maxY = 32
    const targetX = clamp(deltaX * 0.14 * (0.45 + force * 0.55), -maxX, maxX)
    const targetY = clamp(deltaY * 0.11 * (0.45 + force * 0.55), -maxY, maxY)
    const targetRotate = clamp(targetX * 0.1, -7, 7)

    xSpring.set(targetX)
    ySpring.set(targetY)
    rotateSpring.set(targetRotate)
  }, [mouse, xSpring, ySpring, rotateSpring, parallaxOff])

  return (
    <div className="profile-system">
      <motion.div
        className="profile-card-shell"
        initial={{ opacity: 0, y: -56, scale: 0.9 }}
        animate={
          ready
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: -56, scale: 0.9 }
        }
        transition={{ type: 'spring', stiffness: 140, damping: 16, mass: 0.85 }}
      >
        <motion.div
          className="profile-card-track"
          style={{ x: xSpring, y: ySpring, rotate: rotateSpring }}
        >
          <div className="profile-card">
            <img src={profilePhoto} alt="Profile" className="profile-card-image" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ProfileCard
