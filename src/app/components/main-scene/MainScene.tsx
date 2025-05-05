'use client';

import { ContactShadows, OrbitControls, Environment } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react';
import { InteractiveCar } from '../interactive-car/InteractiveCar';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import gsap from 'gsap';

export function MainScene() {
  return (
    <div className="w-[100vw] h-[50vw] mx-auto">
      <Canvas
        className="w-full h-full"
        camera={{ position: [1.7, 1.9, 4.6], fov: 40 }}
      >
        <Suspense>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene() {
  const controlsRef = useRef<OrbitControlsImpl>(null!);
  const { camera } = useThree();
  const [isInteracting, setIsInteracting] = useState(false);
  const [isCanvasActive, setIsCanvasActive] = useState(false);
  const isAutoRotate = !isInteracting && !isCanvasActive;

  const handleCanvasClick = () => {
    setIsCanvasActive(true);
  };

  const animateToInteriorView = () => {
    const controls = controlsRef.current;
    if (!controls) return;

    const targetPosition = [0.3, 1.07, -0.4];
    const targetLookAt = [0.3, 0.7, 1];

    gsap.to(camera.position, {
      x: targetPosition[0],
      y: targetPosition[1],
      z: targetPosition[2],
      duration: 1.5,
      ease: 'power3.inOut',
    });

    gsap.to(controls.target, {
      x: targetLookAt[0],
      y: targetLookAt[1],
      z: targetLookAt[2],
      duration: 1.5,
      ease: 'power3.inOut',
      onUpdate: () => {
        controls.update();
      },
    });

    setIsInteracting(true);
  };

  return (
    <group onClick={handleCanvasClick}>
      <Environment
        preset="lobby"
        blur={1}
        background
        files={'/hdr/warehouse-256.hdr'}
      />
      <InteractiveCar onLookInside={animateToInteriorView} />
      <ContactShadows opacity={0.5} position={[0, -0.01, 0]} />
      <OrbitControls
        ref={controlsRef}
        enableZoom={isCanvasActive}
        enablePan={isCanvasActive}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.9}
        autoRotate={isAutoRotate}
        autoRotateSpeed={0.8}
        onStart={() => setIsInteracting(true)}
      />
    </group>
  );
}
