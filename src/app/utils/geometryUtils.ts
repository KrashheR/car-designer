import { Vector3 } from 'three';
import type { INTERIOR_CAMERA_BOUNDS } from '../components/constants/PorcheModelConstants';

export function checkIfPositionInsideBounds(
  position: Vector3,
  bounds: typeof INTERIOR_CAMERA_BOUNDS
): boolean {
  const points = {
    LFT: new Vector3(...bounds.LEFT_FRONT_TOP),
    LFD: new Vector3(...bounds.LEFT_FRONT_DOWN),
    LBT: new Vector3(...bounds.LEFT_BACK_TOP),
    LBD: new Vector3(...bounds.LEFT_BACK_DOWN),
    RFT: new Vector3(...bounds.RIGHT_FRONT_TOP),
    RFD: new Vector3(...bounds.RIGHT_FRONT_DOWN),
    RBT: new Vector3(...bounds.RIGHT_BACK_TOP),
    RBD: new Vector3(...bounds.RIGHT_BACK_DOWN),
  };

  const faces = [
    [points.LFD, points.RFD, points.RFT, points.LFT],
    [points.RBD, points.LBD, points.LBT, points.RBT],
    [points.LBD, points.LFD, points.LFT, points.LBT],
    [points.RFD, points.RBD, points.RBT, points.RFT],
    [points.LFT, points.RFT, points.RBT, points.LBT],
    [points.LBD, points.RBD, points.RFD, points.LFD],
  ];

  const center = new Vector3();
  Object.values(points).forEach((p) => center.add(p));
  center.divideScalar(8);

  for (const face of faces) {
    const p1 = face[0];
    const p2 = face[1];
    const p3 = face[2];

    const v1 = new Vector3().subVectors(p2, p1);
    const v2 = new Vector3().subVectors(p3, p1);
    const normal = new Vector3().crossVectors(v1, v2);

    const vecToCenter = new Vector3().subVectors(center, p1);
    if (normal.dot(vecToCenter) > 0) {
      normal.negate();
    }

    const vecToPosition = new Vector3().subVectors(position, p1);
    if (normal.dot(vecToPosition) > 1e-6) {
      return false;
    }
  }

  return true;
}
