'use client';

import { ContactShadows, OrbitControls, Environment } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { InteractiveCar } from '../interactive-car/InteractiveCar';
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import gsap from 'gsap';
import {
  PORSCHE_TARGET_POSITIONS,
  PORSCHE_TARGET_LOOK_AT,
  PORSCHE_INTERACTION_TYPES,
  CAMERA_LOCATIONS,
  INTERIOR_CAMERA_BOUNDS,
} from '../constants/PorcheModelConstants';
import type { CameraLocation } from './InteractiveViewer';
import { checkIfPositionInsideBounds } from '../../utils/geometryUtils';

interface ThreeCanvasSceneProps {
  isCanvasActive: boolean;
  isInteracting: boolean;
  setIsInteracting: (isInteracting: boolean) => void;
  onCameraLocationChange: (newLocation: CameraLocation) => void;
  cameraLocation: CameraLocation;
}

export function ThreeCanvasScene({
  isCanvasActive,
  isInteracting,
  setIsInteracting,
  onCameraLocationChange,
  cameraLocation,
}: ThreeCanvasSceneProps) {
  const controlsRef = useRef<OrbitControlsImpl>(null!);
  const { camera } = useThree();
  const isAutoRotate = !isInteracting && !isCanvasActive;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const animateCameraToView = (interactionType: string) => {
    const controls = controlsRef.current;
    if (!controls) return;

    setIsInteracting(true);

    let targetPositionArray: number[];
    let targetLookAtArray: number[];
    let newLogicalCameraLocation: CameraLocation;

    if (interactionType === PORSCHE_INTERACTION_TYPES.ENTER_INTERIOR) {
      targetPositionArray = PORSCHE_TARGET_POSITIONS.DRIVER;
      targetLookAtArray = PORSCHE_TARGET_LOOK_AT.DRIVER;
      newLogicalCameraLocation = CAMERA_LOCATIONS.INTERIOR;
    } else if (interactionType === PORSCHE_INTERACTION_TYPES.EXIT_INTERIOR) {
      targetPositionArray = PORSCHE_TARGET_POSITIONS.OUTSIDE;
      targetLookAtArray = PORSCHE_TARGET_LOOK_AT.OUTSIDE;
      newLogicalCameraLocation = CAMERA_LOCATIONS.EXTERIOR;
    } else {
      console.warn(
        'Unknown interactionType for camera animation:',
        interactionType
      );
      setIsInteracting(false);
      return;
    }

    gsap.to(camera.position, {
      x: targetPositionArray[0],
      y: targetPositionArray[1],
      z: targetPositionArray[2],
      duration: 1.5,
      ease: 'power3.inOut',
      onComplete: () => {
        onCameraLocationChange(newLogicalCameraLocation);
      },
    });

    gsap.to(controls.target, {
      x: targetLookAtArray[0],
      y: targetLookAtArray[1],
      z: targetLookAtArray[2],
      duration: 1.5,
      ease: 'power3.inOut',
      onUpdate: () => {
        controls.update();
      },
    });
  };

  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) {
      return;
    }

    const handleChange = () => {
      if (timerRef.current) {
        return;
      }

      timerRef.current = setTimeout(() => {
        const physicallyInside = checkIfPositionInsideBounds(
          camera.position,
          INTERIOR_CAMERA_BOUNDS
        );
        console.log('physicallyInside', physicallyInside);
        const currentLogicalLocationIsInterior =
          cameraLocation === CAMERA_LOCATIONS.INTERIOR;

        if (physicallyInside && !currentLogicalLocationIsInterior) {
          onCameraLocationChange(CAMERA_LOCATIONS.INTERIOR);
        } else if (!physicallyInside && currentLogicalLocationIsInterior) {
          onCameraLocationChange(CAMERA_LOCATIONS.EXTERIOR);
        }
        timerRef.current = null;
      }, 1000);
    };

    controls.addEventListener('change', handleChange);
    return () => {
      controls.removeEventListener('change', handleChange);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [camera, cameraLocation, onCameraLocationChange, controlsRef.current]);

  useEffect(() => {
    console.log('EFFECTcameraLocation', cameraLocation);
    animateCameraToView(cameraLocation);
  }, [cameraLocation]);

  return (
    <group>
      <Environment
        preset="lobby"
        blur={1}
        background
        files={'/hdr/warehouse-256.hdr'}
      />
      <InteractiveCar
        onHotspotInteraction={animateCameraToView}
        cameraLocation={cameraLocation}
      />
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
        onEnd={() => setIsInteracting(false)}
      />
    </group>
  );
}
