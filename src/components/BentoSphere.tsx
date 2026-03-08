import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useAppStore } from '../store';

const projects = [
  { id: 1, title: 'NEURAL_UI', color: '#ff0055', pos: [2, 1, -1] },
  { id: 2, title: 'QUANTUM_DB', color: '#00ffaa', pos: [-2, 2, 0] },
  { id: 3, title: 'VOID_ENGINE', color: '#5500ff', pos: [0, -2, 1] },
  { id: 4, title: 'SYNTH_WAVE', color: '#ffaa00', pos: [3, -1, 2] },
  { id: 5, title: 'HOLO_DECK', color: '#00aaff', pos: [-3, -1, -2] },
];

function BentoModule({ project, index }: { project: any, index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { appState } = useAppStore();
  
  const targetPos = useMemo(() => new THREE.Vector3(...project.pos), [project.pos]);
  const startPos = useMemo(() => new THREE.Vector3(0, 0, 0), []);
  const targetScaleVec = useMemo(() => new THREE.Vector3(), []);
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Animate from center to target position when state changes
    const target = appState === 'bento-sphere' ? targetPos : startPos;
    meshRef.current.position.lerp(target, 0.05);
    
    // Add some organic rotation
    meshRef.current.rotation.x += delta * 0.2 * (index % 2 === 0 ? 1 : -1);
    meshRef.current.rotation.y += delta * 0.3 * (index % 3 === 0 ? 1 : -1);
    
    // Scale animation
    const targetScale = appState === 'bento-sphere' ? 1 : 0.01;
    meshRef.current.scale.lerp(targetScaleVec.set(targetScale, targetScale, targetScale), 0.08);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={0.01}>
        <RoundedBox args={[1.5, 1.5, 0.2]} radius={0.1} smoothness={4}>
          <meshPhysicalMaterial 
            color={project.color}
            transmission={0.9}
            opacity={1}
            metalness={0.1}
            roughness={0.1}
            ior={1.5}
            thickness={0.5}
            specularIntensity={1}
            clearcoat={1}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.15]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {project.title}
        </Text>
      </mesh>
    </Float>
  );
}

export function BentoSphere() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    const { scrollVelocity } = useAppStore.getState();
    // Rotate entire sphere based on scroll velocity
    groupRef.current.rotation.y += delta * 0.1 + scrollVelocity * 0.01;
    groupRef.current.rotation.x += scrollVelocity * 0.005;
  });

  return (
    <group ref={groupRef}>
      {projects.map((p, i) => (
        <BentoModule key={p.id} project={p} index={i} />
      ))}
    </group>
  );
}
