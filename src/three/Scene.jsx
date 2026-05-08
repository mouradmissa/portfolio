import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Lights from './Lights'
import { HeroLaptop, SkillOrbs, ProjectCrystals, ParticleField } from './FloatingObjects'

function CameraRig() {
  const rig = useRef(null)

  useFrame(({ pointer, camera }) => {
    if (!rig.current) return
    const scrollProgress = Math.min(window.scrollY / window.innerHeight, 3)
    rig.current.rotation.y = pointer.x * 0.3
    rig.current.rotation.x = -pointer.y * 0.15 + scrollProgress * 0.04
    rig.current.position.y = -scrollProgress * 0.18
    camera.position.x += (pointer.x * 0.35 - camera.position.x) * 0.05
    camera.position.y += (pointer.y * 0.2 + scrollProgress * 0.08 - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })

  return <group ref={rig} />
}

function SceneContent({ variant }) {
  return (
    <>
      <CameraRig />
      <Lights />
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        {variant === 'hero' && <HeroLaptop />}
        {variant === 'projects' && <ProjectCrystals />}
        {variant === 'skills' && <SkillOrbs />}
      </Float>
      <ParticleField />
      <Sparkles count={60} size={2} speed={0.4} opacity={0.35} color="#ff9b45" scale={[8, 4, 6]} />
      <EffectComposer>
        <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.9} intensity={0.85} />
      </EffectComposer>
    </>
  )
}

function Scene({ variant = 'hero', className = '' }) {
  return (
    <div className={className}>
      <Canvas shadows camera={{ position: [0, 0, 4.8], fov: 42 }}>
        <SceneContent variant={variant} />
      </Canvas>
    </div>
  )
}

export default Scene
