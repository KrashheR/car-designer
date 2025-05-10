export const PORSCHE_BODY_COLORS = [
  { name: 'Black', hex: '#000000' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Red', hex: '#FF0000' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Silver', hex: '#C0C0C0' },
];

export const PORSCHE_LEFT_DOOR_ROTATIONS = {
  CLOSED: [0, 0, 0],
  OPEN: [0, -1, 0],
};

export const PORSCHE_RIGHT_DOOR_ROTATIONS = {
  CLOSED: [0, 0, 0],
  OPEN: [0, 1, 0],
};

export const PORSCHE_HOOD_ROTATIONS = {
  CLOSED: [0, 0, 0],
  OPEN: [-0.7, 0, 0],
};

export const PORSCHE_TARGET_POSITIONS = {
  DRIVER: [0.3, 1.07, -0.4],
  OUTSIDE: [5.3, 2.2, 4],
};

export const PORSCHE_TARGET_LOOK_AT = {
  DRIVER: [0.3, 0.7, 1],
  OUTSIDE: [0, 0, 0],
};

export const PORSCHE_INTERACTION_TYPES = {
  ENTER_INTERIOR: 'enter_interior',
  EXIT_INTERIOR: 'exit_interior',
} as const;

export const CAMERA_LOCATIONS = {
  INTERIOR: 'interior',
  EXTERIOR: 'exterior',
} as const;

export const INTERIOR_CAMERA_BOUNDS = {
  LEFT_FRONT_DOWN: [0.4, 0.28, 0.62],
  LEFT_FRONT_TOP: [0.55, 1.17, 0.02],
  LEFT_BACK_DOWN: [0.3, 0.48, -0.73],
  LEFT_BACK_TOP: [0.31, 1.12, -0.86],
  RIGHT_FRONT_DOWN: [-0.44, 0.39, 0.64],
  RIGHT_FRONT_TOP: [-0.51, 1.17, 0.12],
  RIGHT_BACK_DOWN: [-0.44, 0.52, -0.99],
  RIGHT_BACK_TOP: [-0.4, 1.12, -0.82],
} as const;
