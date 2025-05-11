'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import { ThreeCanvasScene } from './ThreeCanvasScene';
import {
  CAMERA_LOCATIONS,
  PORSCHE_INTERACTION_TYPES,
} from '../constants/PorcheModelConstants';
import { ColorPicker } from '../color-picker/ColorPicker';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '@/store/store';
import {
  setTargetCameraLocation,
  setTargetIsCanvasActive,
} from '@/store/features/camera/cameraSlice';
import { selectIsCanvasActive } from '@/store/features/camera/cameraSelectors';

export type CameraLocation =
  (typeof CAMERA_LOCATIONS)[keyof typeof CAMERA_LOCATIONS];

export type CameraInteractionType =
  (typeof PORSCHE_INTERACTION_TYPES)[keyof typeof PORSCHE_INTERACTION_TYPES];

export function InteractiveViewer() {
  const [isInteracting, setIsInteracting] = useState(false);
  const isCanvasActive = useSelector(selectIsCanvasActive);
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleContainerClick = () => {
    if (!isCanvasActive) {
      dispatch(setTargetIsCanvasActive(true));
      setIsHovered(false);
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(setTargetIsCanvasActive(false));
    setIsInteracting(false);
  };

  const handlePointerEnter = () => {
    if (!isCanvasActive) {
      setIsHovered(true);
    }
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-[100vw] h-[50vw] mx-auto relative cursor-pointer"
      onClick={handleContainerClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {!isCanvasActive && isHovered && (
        <div className="absolute inset-0 bg-black/20 flex justify-center items-center flex-col gap-2 text-white text-2xl pointer-events-none z-10">
          <img
            src="/images/pointer.svg"
            alt="cursor"
            className="w-10 h-10"
            decoding="async"
          />
          <span className="cursor-pointer">Click to Interact</span>
        </div>
      )}
      {isCanvasActive && (
        <div
          onClick={handleCloseClick}
          className="absolute top-5 right-5 text-white text-2xl cursor-pointer z-10 p-[12px] hover:text-gray-300 transition-colors bg-white rounded-2xl"
        >
          <div className="flex items-center flex-col gap-2">
            <img
              src="/images/return.svg"
              alt="close"
              className="w-10 h-10"
              decoding="async"
            />
          </div>
        </div>
      )}
      <Canvas
        className="w-full h-full"
        camera={{ position: [1.7, 1.9, 4.6], fov: 40 }}
      >
        <Suspense fallback={null}>
          <ThreeCanvasScene
            isCanvasActive={isCanvasActive}
            isInteracting={isInteracting}
            setIsInteracting={setIsInteracting}
          />
        </Suspense>
      </Canvas>
      <ColorPicker />
    </div>
  );
}
