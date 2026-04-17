'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function SolarPanel() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main panel frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2, 0.08]} />
        <meshStandardMaterial color="#1a1a2e" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Solar cells grid (3×2 cells) */}
      {Array.from({ length: 3 }).map((_, col) =>
        Array.from({ length: 2 }).map((_, row) => (
          <mesh
            key={`${col}-${row}`}
            position={[(col - 1) * 0.9, (row - 0.5) * 0.85, 0.05]}
          >
            <boxGeometry args={[0.82, 0.78, 0.01]} />
            <meshStandardMaterial
              color="#0d2a5e"
              metalness={0.8}
              roughness={0.15}
              envMapIntensity={1.5}
            />
          </mesh>
        ))
      )}

      {/* Cell grid lines */}
      {Array.from({ length: 4 }).map((_, i) => (
        <mesh key={`vline-${i}`} position={[(i - 1.5) * 0.9, 0, 0.06]}>
          <boxGeometry args={[0.02, 1.8, 0.01]} />
          <meshStandardMaterial color="#4a9eff" metalness={0.9} roughness={0.1} opacity={0.4} transparent />
        </mesh>
      ))}
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh key={`hline-${i}`} position={[0, (i - 1) * 0.85, 0.06]}>
          <boxGeometry args={[2.8, 0.02, 0.01]} />
          <meshStandardMaterial color="#4a9eff" metalness={0.9} roughness={0.1} opacity={0.4} transparent />
        </mesh>
      ))}

      {/* Mounting bracket */}
      <mesh position={[0, -1.2, -0.2]} rotation={[Math.PI / 6, 0, 0]}>
        <boxGeometry args={[2.4, 0.08, 0.5]} />
        <meshStandardMaterial color="#888" metalness={0.7} roughness={0.4} />
      </mesh>
    </group>
  )
}

function Particles() {
  const count = 40
  const meshRef = useRef<THREE.InstancedMesh>(null)

  const { positions, speeds } = useMemo(() => {
    const positions = Array.from({ length: count }, () => [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6,
    ])
    const speeds = Array.from({ length: count }, () => 0.002 + Math.random() * 0.006)
    return { positions, speeds }
  }, [])

  useFrame(() => {
    if (!meshRef.current) return
    const matrix = new THREE.Matrix4()
    positions.forEach((pos, i) => {
      pos[1] += speeds[i]
      if (pos[1] > 4) pos[1] = -4
      matrix.setPosition(pos[0], pos[1], pos[2])
      meshRef.current!.setMatrixAt(i, matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.04, 6, 6]} />
      <meshStandardMaterial color="#ffffff" emissive="#ffffaa" emissiveIntensity={0.5} />
    </instancedMesh>
  )
}

export default function SolarScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} color="#e8f0ff" />
      <pointLight position={[4, 3, 3]} intensity={2} color="#f59e0b" />
      <pointLight position={[-3, -2, 2]} intensity={0.5} color="#4a9eff" />

      <SolarPanel />
      <Particles />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        autoRotate={false}
      />
    </Canvas>
  )
}
