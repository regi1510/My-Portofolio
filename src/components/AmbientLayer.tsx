import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import { useAppStore } from '../store';

export function AmbientLayer() {
  const { appState, scrollVelocity } = useAppStore();
  
  const bloomIntensity = appState === 'zero-state' ? 2.5 : 1.2;
  const aberrationOffset = new THREE.Vector2(0.005 + scrollVelocity * 0.001, 0.005 + scrollVelocity * 0.001);
  
  return (
    <EffectComposer>
      <Bloom 
        intensity={bloomIntensity} 
        luminanceThreshold={0.1} 
        luminanceSmoothing={0.9} 
        blendFunction={BlendFunction.SCREEN} 
      />
      <ChromaticAberration 
        blendFunction={BlendFunction.NORMAL} 
        offset={aberrationOffset} 
      />
      <Noise 
        premultiply 
        blendFunction={BlendFunction.ADD} 
        opacity={0.1} 
      />
      <Vignette 
        eskil={false} 
        offset={0.1} 
        darkness={1.1} 
      />
    </EffectComposer>
  );
}
