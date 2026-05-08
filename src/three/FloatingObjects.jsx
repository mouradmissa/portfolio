import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, useTexture } from '@react-three/drei'
import profilePhoto from '../assets/photodeprofile.png'

function HeroLaptop() {
  const group = useRef(null)
  const profileTexture = useTexture(profilePhoto)

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.25
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.4) * 0.15
  })

  return (
    <group ref={group} scale={1.2}>
      <mesh position={[0, -0.4, 0]} castShadow>
        <boxGeometry args={[2, 0.12, 1.3]} />
        <meshStandardMaterial color="#181c28" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.16, -0.53]} rotation={[-0.55, 0, 0]} castShadow>
        <boxGeometry args={[1.82, 1.02, 0.08]} />
        <meshStandardMaterial color="#111318" metalness={0.35} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.16, -0.48]} rotation={[-0.55, 0, 0]}>
        <planeGeometry args={[1.55, 0.76]} />
        <meshStandardMaterial color="#ff7a00" emissive="#ff7a00" emissiveIntensity={0.9} />
      </mesh>
      <Text
        position={[0, 0.38, -0.42]}
        rotation={[-0.55, 0, 0]}
        fontSize={0.16}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        MOURAD.DEV
      </Text>
      <mesh position={[0, -0.08, 0.84]}>
        <planeGeometry args={[0.95, 0.95]} />
        <meshStandardMaterial map={profileTexture} metalness={0.2} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.08, 0.83]}>
        <ringGeometry args={[0.54, 0.62, 64]} />
        <meshStandardMaterial color="#ff7a00" emissive="#ff7a00" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

function SkillOrbs() {
  const group = useRef(null)
  const positions = useMemo(
    () => [
      [-1.2, 0.5, 0.1],
      [1.1, 0.7, -0.2],
      [0.1, -0.3, 0.8],
      [-0.4, -0.8, -0.5],
    ],
    [],
  )

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.3
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.08
  })

  return (
    <group ref={group}>
      {positions.map((pos, index) => (
        <mesh key={pos.join('-')} position={pos}>
          <sphereGeometry args={[0.34 + index * 0.06, 32, 32]} />
          <meshStandardMaterial
            color={index % 2 ? '#ff9b45' : '#ffd2a8'}
            emissive="#ff7a00"
            emissiveIntensity={0.5}
            metalness={0.5}
            roughness={0.25}
          />
        </mesh>
      ))}
    </group>
  )
}

function ProjectCrystals() {
  const group = useRef(null)
  const refs = useRef([])

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.2
    }
    refs.current.forEach((mesh, index) => {
      if (!mesh) return
      mesh.rotation.x += 0.01 + index * 0.002
      mesh.rotation.y += 0.012 + index * 0.002
    })
  })

  return (
    <group ref={group}>
      {[-1.1, 0, 1.1].map((x, index) => (
        <mesh
          key={x}
          ref={(node) => {
            refs.current[index] = node
          }}
          position={[x, 0, 0]}
          castShadow
        >
          <icosahedronGeometry args={[0.52, 0]} />
          <meshStandardMaterial
            color="#1f2638"
            emissive="#ff7a00"
            emissiveIntensity={0.4}
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}

function ParticleField({ count = 80 }) {
  const points = useMemo(
    () =>
      Array.from({ length: count }, () => [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
      ]),
    [count],
  )

  return (
    <group>
      {points.map((pos, index) => (
        <mesh key={`${index}-${pos[0]}`} position={pos}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#ff9b45" transparent opacity={0.55} />
        </mesh>
      ))}
    </group>
  )
}

export { HeroLaptop, SkillOrbs, ProjectCrystals, ParticleField }
