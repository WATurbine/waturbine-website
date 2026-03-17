'use client';

import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, useAnimations, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const MODEL_PATH = '/models/wind-turbine.glb';
const DEBUG_MODEL_HELPER = true;

function HeroTurbine() {
  const group = useRef();
  const helperRef = useRef(null);
  const rootScene = useThree((state) => state.scene);
  const { scene, animations } = useGLTF(MODEL_PATH, true, true, (loader) => {
    loader.manager.onLoad = () => {
      console.info('[MissionWindScene] GLB load complete:', MODEL_PATH);
    };
    loader.manager.onError = (url) => {
      console.error('[MissionWindScene] GLB load error:', url);
    };
  });
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    let meshCount = 0;

    scene.traverse((node) => {
      if (node.isMesh) {
        meshCount += 1;
        node.castShadow = false;
        node.receiveShadow = false;
      }
    });

    const bounds = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    bounds.getSize(size);

    console.info('[MissionWindScene] GLB stats:', {
      path: MODEL_PATH,
      meshCount,
      bounds: {
        x: Number(size.x.toFixed(3)),
        y: Number(size.y.toFixed(3)),
        z: Number(size.z.toFixed(3)),
      },
    });
  }, [scene]);

  useEffect(() => {
    if (!DEBUG_MODEL_HELPER || !group.current) return;

    const helper = new THREE.BoxHelper(group.current, 0x00ff88);
    helper.material.transparent = true;
    helper.material.opacity = 0.85;
    rootScene.add(helper);
    helperRef.current = helper;

    return () => {
      rootScene.remove(helper);
      helperRef.current = null;
    };
  }, [rootScene]);

  useEffect(() => {
    Object.values(actions || {}).forEach((action) => action?.play());
  }, [actions]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const t = Math.min(state.clock.elapsedTime / 2.8, 1);
    const eased = 1 - Math.pow(1 - t, 3);

    group.current.rotation.y += delta * 0.2;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.03 - 0.33;
    group.current.position.z = THREE.MathUtils.lerp(-0.8, 0, eased);

    const revealScale = THREE.MathUtils.lerp(0.9, 1.28, eased);
    group.current.scale.setScalar(revealScale);

    if (helperRef.current) {
      helperRef.current.update();
    }
  });

  return (
    <group ref={group} position={[0, -0.33, -0.8]} scale={0.9}>
      <primitive object={scene} />
    </group>
  );
}

function HeroPedestal() {
  const ringPulseRef = useRef();

  useFrame((state) => {
    if (!ringPulseRef.current) return;
    ringPulseRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 1.25) * 0.02);
  });

  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.23, 0]}>
        <cylinderGeometry args={[2.45, 2.45, 0.34, 64]} />
        <meshStandardMaterial color="#394663" roughness={0.48} metalness={0.35} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.03, 0]}>
        <circleGeometry args={[1.55, 64]} />
        <meshStandardMaterial color="#7b89ad" roughness={0.25} metalness={0.65} />
      </mesh>

      <mesh ref={ringPulseRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.01, 0]}>
        <ringGeometry args={[1.64, 1.86, 64]} />
        <meshBasicMaterial color="#9ec1ff" transparent opacity={0.5} side={THREE.DoubleSide} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.39, 0]}>
        <planeGeometry args={[22, 22]} />
        <meshStandardMaterial color="#0f1527" roughness={0.98} metalness={0.03} />
      </mesh>
    </group>
  );
}

function HeroCameraMotion() {
  useFrame((state) => {
    const t = Math.min(state.clock.elapsedTime / 3, 1);
    const eased = 1 - Math.pow(1 - t, 3);

    state.camera.position.x = THREE.MathUtils.lerp(0.42, 0.12, eased);
    state.camera.position.y = THREE.MathUtils.lerp(1.65, 1.2, eased);
    state.camera.position.z = THREE.MathUtils.lerp(5.9, 4.25, eased);
    state.camera.lookAt(0, -0.2, 0);
  });

  return null;
}

export default function MissionWindScene() {
  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [0.42, 1.65, 5.9], fov: 38 }}>
      <color attach="background" args={['#0c101f']} />
      <fog attach="fog" args={['#0c101f', 7, 18]} />
      <ambientLight intensity={0.4} color="#9bb2ff" />
      <spotLight
        position={[2.6, 4.4, 3.2]}
        intensity={2.2}
        angle={0.46}
        penumbra={0.6}
        color="#d8e6ff"
      />
      <directionalLight position={[-5, 4, -4]} intensity={0.9} color="#7ea6ff" />
      <pointLight position={[0, 0.8, -2.8]} intensity={0.5} color="#5c7ed6" />
      <Suspense fallback={null}>
        <HeroPedestal />
        <HeroTurbine />
        <Environment preset="studio" />
      </Suspense>
      <HeroCameraMotion />
    </Canvas>
  );
}

useGLTF.preload(MODEL_PATH);
