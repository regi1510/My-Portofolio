import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useAppStore } from '../store';

const vertexShader = `
  uniform float uTime;
  uniform float uExplode;
  uniform vec3 uMouse;
  attribute vec3 aRandom;
  varying vec3 vColor;
  
  void main() {
    vec3 pos = position;
    
    // Singularity pull
    float distToCenter = length(pos);
    vec3 dirToCenter = normalize(-pos);
    
    // Mouse interaction
    float distToMouse = length(pos - uMouse);
    vec3 dirToMouse = normalize(pos - uMouse);
    float mouseForce = smoothstep(2.0, 0.0, distToMouse) * 0.5;
    
    // Explosion logic
    vec3 explodeDir = normalize(pos + aRandom);
    float explodeForce = uExplode * (2.0 + aRandom.y * 5.0);
    
    // Orbital motion
    float angle = uTime * (0.5 + aRandom.x) + aRandom.z * 6.28;
    float radius = distToCenter + sin(uTime * 2.0 + aRandom.y * 10.0) * 0.1;
    
    vec3 orbitPos = vec3(
      cos(angle) * radius,
      pos.y + sin(uTime * 3.0 + aRandom.x * 5.0) * 0.2,
      sin(angle) * radius
    );
    
    // Mix states
    vec3 finalPos = mix(orbitPos, orbitPos + explodeDir * explodeForce, uExplode);
    finalPos += dirToMouse * mouseForce * (1.0 - uExplode);
    
    vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation
    gl_PointSize = (2.0 + aRandom.z * 3.0) * (1.0 / -mvPosition.z);
    
    // Color based on distance and explosion
    vec3 coreColor = vec3(0.1, 0.5, 1.0); // Cyan/Blue
    vec3 edgeColor = vec3(0.8, 0.1, 1.0); // Purple/Pink
    vColor = mix(coreColor, edgeColor, distToCenter / 2.0 + uExplode);
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  
  void main() {
    // Circular particle
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    
    // Soft glow
    float alpha = smoothstep(0.5, 0.1, dist);
    gl_FragColor = vec4(vColor, alpha * 0.8);
  }
`;

export function Singularity() {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { appState } = useAppStore();
  
  const particleCount = 10000;
  
  const [positions, randoms] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const rnd = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      // Sphere distribution
      const r = Math.cbrt(Math.random()) * 1.5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      
      rnd[i * 3] = Math.random();
      rnd[i * 3 + 1] = Math.random();
      rnd[i * 3 + 2] = Math.random();
    }
    
    return [pos, rnd];
  }, []);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uExplode: { value: 0 },
    uMouse: { value: new THREE.Vector3() }
  }), []);

  useFrame((state) => {
    if (!materialRef.current) return;
    
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    
    // Update mouse position in 3D space
    const { cursorPosition } = useAppStore.getState();
    const x = (cursorPosition[0] / window.innerWidth) * 2 - 1;
    const y = -(cursorPosition[1] / window.innerHeight) * 2 + 1;
    materialRef.current.uniforms.uMouse.value.set(x * 5, y * 5, 0);
    
    // Animate explosion
    const targetExplode = appState === 'zero-state' ? 0 : 1;
    materialRef.current.uniforms.uExplode.value = THREE.MathUtils.lerp(
      materialRef.current.uniforms.uExplode.value,
      targetExplode,
      0.05
    );
    
    // Rotate entire system
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      pointsRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aRandom"
          count={particleCount}
          array={randoms}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
