import { Mesh, Color, MeshPhysicalMaterial, MeshStandardMaterial } from 'three';
import React, { useMemo } from 'react';
import { useGLTF, Billboard, Image } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { animated, SpringValue } from '@react-spring/three';
import { ThreeEvent } from '@react-three/fiber';
import { PORSCHE_INTERACTION_TYPES } from '../constants/PorcheModelConstants';

type GLTFResult = GLTF & {
  nodes: {
    b_1car_911992Carrera4SFrontBumper00_vstd_RES0RES0004Front: Mesh;
    b_2car_911992Carrera4SBody00_vlgt_RES0RES0Body_00_RES0_Bun: Mesh;
    b_3car_911992Carrera4SCalipers00_FrontLeft_Stator_vwhl_RES: Mesh;
    b_3RES0001Calipers_00_RES0_Bundlecar_911992Carrera4SCalip002: Mesh;
    b_3RES0001Calipers_00_RES0_Bundlecar_911992Carrera4SCalip004: Mesh;
    b_3RES0001Calipers_00_RES0_Bundlecar_911992Carrera4SCalip: Mesh;
    car_911992Carrera4SBody00_vgla_RES0_car_vgla_911992Carrera4S_0: Mesh;
    car_911992Carrera4SBody00_vstd2_RES0_standardSurface1_0: Mesh;
    car_911992Carrera4SBody00_vstd_RES0_car_vstd_911992Carrera4S_0: Mesh;
    car_911992Carrera4SEngine00_vpnt_RES0_car_vpnt_911992Carrera4S_: Mesh;
    car_911992Carrera4SEngine00_vstd2_RES0_car_vstd_911992Carrera4S: Mesh;
    car_911992Carrera4SEngine00_vstd_RES0_car_vstd_911992Carrera4SE: Mesh;
    car_911992Carrera4SEngine00_vstda_RES0_car_vstda_911992Carrera4: Mesh;
    car_911992Carrera4SFrontBumper00_vlgt_RES0_car_vlgt_911992Carre: Mesh;
    car_911992Carrera4SFrontBumper00_vpnt_RES0_car_vpnt_911992Carre: Mesh;
    car_911992Carrera4SFrontBumper00_vstd2_RES0_standardSurface1_0: Mesh;
    car_911992Carrera4SFrontHood00_vstd_RES0_car_vstd_911992Carrera: Mesh;
    car_911992Carrera4SFrontHood00_vstd_RES0_car_vstd_911992Carrera_1: Mesh;
    car_911992Carrera4SInteriorStatic00_vpnt_RES0_car_vpnt_911992Ca: Mesh;
    car_911992Carrera4SRearBumper00_vlgt_RES0_car_vlgt_911992Carrer: Mesh;
    car_911992Carrera4SRearBumper00_vpnt_RES0_car_vpnt_911992Carrer: Mesh;
    car_911992Carrera4SRearBumper00_vstd_RES0_standardSurface1_0: Mesh;
    car_911992Carrera4SRearHood00_vgla_RES0_car_vgla_911992Carrera4: Mesh;
    car_911992Carrera4SRearHood00_vlgt_RES0_car_vlgt_911992Carrera4: Mesh;
    car_911992Carrera4SRearHood00_vpnt_RES0_car_vpnt_911992Carrera4: Mesh;
    car_911992Carrera4SRoof00_vpnt_RES0_car_vpnt_911992Carrera4S_0: Mesh;
    car_911992Carrera4SSideSkirtStatic00_vgla_RES0_car_vgla_911992C: Mesh;
    car_911992Carrera4SSideSkirtStatic00_vpnt_RES0_car_vpnt_911992C_1: Mesh;
    car_911992Carrera4SSideSkirtStatic00_vpnt_RES0_car_vpnt_911992C_2: Mesh;
    car_911992Carrera4SSideSkirtStatic00_vstd_RES0_car_vstd_911992C: Mesh;
    car_911992Carrera4SWing00_vlgt_RES0_car_vlgt_911992Carrera4S_0: Mesh;
    car_911992Carrera4SWing00_vpnt_RES0_car_vpnt_911992Carrera4S_0: Mesh;
    car_911992Carrera4SWing00_vstd_RES0_car_vstd_911992Carrera4S_0: Mesh;
    interiorcar_911992Carrera4SInteriorStatic00_vstd2_RES0Inte: Mesh;
    interiorInterior_StaticRES0006Interior_00_RES0_Bundlegrou: Mesh;
    interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Carrera: Mesh;
    interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Carrera_1: Mesh;
    interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Carrera_2: Mesh;
    interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Carrera_3: Mesh;
    rearcar_911992Carrera4SRearBumper00_vstd2_RES0RES0008Rear: Mesh;
    reargroup1car_911992Carrera4SRearBumper00ExhaustOutA00_vst: Mesh;
    reargroup1car_911992Carrera4SRearHood00_vstd_RES0RES0010R: Mesh;
    interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorRcar: Mesh;
    interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorRcar_1: Mesh;
    interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorRcar_2: Mesh;
    interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorRcar_3: Mesh;
    RIMcar_911992Carrera4SRims00_FrontLeft_Rotor_vwhl_RES0RES0001: Mesh;
    RIMRES0012Rims_00_RES0_Bundlecar_911992Carrera4SRims00_Fr: Mesh;
    RIMRES0012Rims_00_RES0_Bundlecar_911992Carrera4SRims00_Re: Mesh;
    RIMRES0012Rims_00_RES0_Bundlecar_911992Carrera4SRims00_Re001: Mesh;
    polySurface10_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_: Mesh;
    polySurface103_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface104_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface105_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface106_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface107_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface108_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface109_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface11_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_: Mesh;
    polySurface110_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface111_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface112_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface113_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface114_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface115_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface116_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface117_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface118_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface119_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface12_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_: Mesh;
    polySurface120_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface121_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface122_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface123_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface124_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface125_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface126_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface127_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface128_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface13_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_: Mesh;
    polySurface134_BL_RIM_0: Mesh;
    polySurface135_BL_RIM_0: Mesh;
    polySurface137_BL_RIM_0: Mesh;
    polySurface14_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_: Mesh;
    polySurface144_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface145_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface146_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface147_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface148_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface149_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface15_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_: Mesh;
    polySurface150_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface151_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface152_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface153_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface154_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface155_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface16_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_: Mesh;
    polySurface242_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface243_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface244_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface245_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface246_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface247_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface248_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface249_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface250_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface251_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface252_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface253_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface254_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface255_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface256_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface257_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface258_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface259_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface260_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface261_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface262_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface263_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface264_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface265_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface266_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface267_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface283_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface284_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface285_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface286_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface287_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface288_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface289_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface290_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface291_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface292_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface293_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface294_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface387_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface388_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface389_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface390_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface391_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface392_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface393_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface394_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface395_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface396_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface397_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface398_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface399_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface400_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface401_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface402_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface403_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface404_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface405_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface406_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface407_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface408_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface409_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface410_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface411_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface412_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface428_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface429_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface430_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface431_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface432_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface433_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface434_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface435_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface436_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface437_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface438_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface439_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface5_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3: Mesh;
    polySurface532_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface533_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface534_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface535_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface536_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface537_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface538_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface539_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface540_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface541_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface542_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface543_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface544_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface545_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface546_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface547_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface548_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface549_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface550_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface551_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface552_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface553_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface554_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface555_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface556_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface557_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D: Mesh;
    polySurface6_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3: Mesh;
    polySurface7_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3: Mesh;
    polySurface8_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3: Mesh;
    polySurface9_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3: Mesh;
  };
  materials: {
    ['car_vstd_911992Carrera4S.001']: MeshPhysicalMaterial;
    ['car_vlgt_911992Carrera4S.001']: MeshPhysicalMaterial;
    CALIP_COLOR: MeshStandardMaterial;
    car_vgla_911992Carrera4S: MeshPhysicalMaterial;
    standardSurface1: MeshPhysicalMaterial;
    car_vstd_911992Carrera4S: MeshPhysicalMaterial;
    car_vpnt_911992Carrera4S: MeshPhysicalMaterial;
    car_vstd_911992Carrera4SEngine: MeshPhysicalMaterial;
    car_vstda_911992Carrera4SGrid01: MeshStandardMaterial;
    car_vlgt_911992Carrera4S: MeshPhysicalMaterial;
    car_vstd_911992Carrera4SInterior: MeshPhysicalMaterial;
    ['car_vstd_911992Carrera4SInterior.001']: MeshPhysicalMaterial;
    ['car_vstd_911992Carrera4S.002']: MeshPhysicalMaterial;
    car_vwhl_911992Carrera4SRims: MeshPhysicalMaterial;
    Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate: MeshPhysicalMaterial;
    BL_RIM: MeshStandardMaterial;
  };
};

interface GLTFResultExt extends GLTFResult {
  nodes: GLTFResult['nodes'];
  materials: GLTFResult['materials'];
}

interface CarModelProps
  extends Omit<React.ComponentProps<'group'>, 'rotation'> {
  onLeftDoorClick: (event: ThreeEvent<MouseEvent>) => void;
  onRightDoorClick: (event: ThreeEvent<MouseEvent>) => void;
  onHoodClick: (event: ThreeEvent<MouseEvent>) => void;
  onHotspotInteraction: (interactionType: string) => void;
  leftDoorRotation: SpringValue<number[]>;
  rightDoorRotation: SpringValue<number[]>;
  hoodRotation: SpringValue<number[]>;
  bodyColor: string;
  showEnterHotspot: boolean;
  showExitHotspot: boolean;
}

export function PorscheModel(props: CarModelProps) {
  const { nodes, materials } = useGLTF(
    '/models/porsche_carrera4s.glb'
  ) as GLTFResultExt;
  const {
    onLeftDoorClick,
    onRightDoorClick,
    onHotspotInteraction,
    leftDoorRotation,
    rightDoorRotation,
    hoodRotation,
    onHoodClick,
    bodyColor,
    showEnterHotspot,
    showExitHotspot,
  } = props;

  const paintMaterial = useMemo(() => {
    const mat = materials.car_vpnt_911992Carrera4S.clone();
    mat.color = new Color(bodyColor);
    return mat;
  }, [materials.car_vpnt_911992Carrera4S, bodyColor]);

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="FINAL_MODELfbx" rotation={[Math.PI / 2, 0, 0]} scale={1}>
            <group name="RootNode">
              {showEnterHotspot && (
                <Billboard
                  position={[0.95, 0.7, -0.1]}
                  onClick={(event) => {
                    event.stopPropagation();
                    onHotspotInteraction(
                      PORSCHE_INTERACTION_TYPES.ENTER_INTERIOR
                    );
                  }}
                >
                  <Image url="/images/enter.svg" scale={0.18} transparent />
                </Billboard>
              )}
              {showExitHotspot && (
                <Billboard
                  position={[0.59, 0.89, 0.2]}
                  onClick={(event) => {
                    event.stopPropagation();
                    onHotspotInteraction(
                      PORSCHE_INTERACTION_TYPES.EXIT_INTERIOR
                    );
                  }}
                >
                  <Image url="/images/exit.svg" scale={0.05} transparent />
                </Billboard>
              )}
              <group name="b_1car_911992Carrera4SFrontBumper00_vstd_RES0RES0004FrontBump">
                <mesh
                  name="b_1car_911992Carrera4SFrontBumper00_vstd_RES0RES0004Front"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .b_1car_911992Carrera4SFrontBumper00_vstd_RES0RES0004Front
                      .geometry
                  }
                  material={materials['car_vstd_911992Carrera4S.001']}
                />
              </group>
              <group name="b_2car_911992Carrera4SBody00_vlgt_RES0RES0Body_00_RES0_Bundleg">
                <mesh
                  name="b_2car_911992Carrera4SBody00_vlgt_RES0RES0Body_00_RES0_Bun"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .b_2car_911992Carrera4SBody00_vlgt_RES0RES0Body_00_RES0_Bun
                      .geometry
                  }
                  material={materials['car_vlgt_911992Carrera4S.001']}
                />
              </group>
              <group name="b_3car_911992Carrera4SCalipers00_FrontLeft_Stator_vwhl_RES0RES">
                <mesh
                  name="b_3car_911992Carrera4SCalipers00_FrontLeft_Stator_vwhl_RES"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .b_3car_911992Carrera4SCalipers00_FrontLeft_Stator_vwhl_RES
                      .geometry
                  }
                  material={materials.CALIP_COLOR}
                />
              </group>
              <group name="b_3RES0001Calipers_00_RES0_Bundlecar_911992Carrera4SCalip001">
                <mesh
                  name="b_3RES0001Calipers_00_RES0_Bundlecar_911992Carrera4SCalip002"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .b_3RES0001Calipers_00_RES0_Bundlecar_911992Carrera4SCalip002
                      .geometry
                  }
                  material={materials.CALIP_COLOR}
                />
              </group>
              <group name="b_3RES0001Calipers_00_RES0_Bundlecar_911992Carrera4SCalip003">
                <mesh
                  name="b_3RES0001Calipers_00_RES0_Bundlecar_911992Carrera4SCalip004"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .b_3RES0001Calipers_00_RES0_Bundlecar_911992Carrera4SCalip004
                      .geometry
                  }
                  material={materials.CALIP_COLOR}
                />
              </group>
              <group name="b_3RES0001Calipers_00_RES0_Bundlecar_911992Carrera4SCalipers0">
                <mesh
                  name="b_3RES0001Calipers_00_RES0_Bundlecar_911992Carrera4SCalip"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .b_3RES0001Calipers_00_RES0_Bundlecar_911992Carrera4SCalip
                      .geometry
                  }
                  material={materials.CALIP_COLOR}
                />
              </group>
              <group
                name="group1"
                position={[0, 0.008, 0]}
                rotation={[0.006, 0, 0]}
              >
                <group name="Body_00_RES0_Bundle">
                  <group name="RES0">
                    <group name="car_911992Carrera4SBody00_vgla_RES0">
                      <mesh
                        name="car_911992Carrera4SBody00_vgla_RES0_car_vgla_911992Carrera4S_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SBody00_vgla_RES0_car_vgla_911992Carrera4S_0
                            .geometry
                        }
                        material={materials.car_vgla_911992Carrera4S}
                      />
                    </group>
                    <group name="car_911992Carrera4SBody00_vstd2_RES0">
                      <mesh
                        name="car_911992Carrera4SBody00_vstd2_RES0_standardSurface1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SBody00_vstd2_RES0_standardSurface1_0
                            .geometry
                        }
                        material={materials.standardSurface1}
                      />
                    </group>
                    <group name="car_911992Carrera4SBody00_vstd_RES0">
                      <mesh
                        name="car_911992Carrera4SBody00_vstd_RES0_car_vstd_911992Carrera4S_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SBody00_vstd_RES0_car_vstd_911992Carrera4S_0
                            .geometry
                        }
                        material={materials.car_vstd_911992Carrera4S}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="Engine_00_RES0_Bundle"
                  position={[0, 0.972, -1.572]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <group name="RES0002" position={[0, -0.322, -0.572]}>
                    <group
                      name="car_911992Carrera4SEngine00_vpnt_RES0"
                      position={[0, -0.65, -1]}
                    >
                      <mesh
                        name="car_911992Carrera4SEngine00_vpnt_RES0_car_vpnt_911992Carrera4S_"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SEngine00_vpnt_RES0_car_vpnt_911992Carrera4S_
                            .geometry
                        }
                        material={paintMaterial}
                      />
                    </group>
                    <group
                      name="car_911992Carrera4SEngine00_vstd2_RES0"
                      position={[0, 0.175, 0.78]}
                    >
                      <mesh
                        name="car_911992Carrera4SEngine00_vstd2_RES0_car_vstd_911992Carrera4S"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SEngine00_vstd2_RES0_car_vstd_911992Carrera4S
                            .geometry
                        }
                        material={materials.car_vstd_911992Carrera4SEngine}
                      />
                    </group>
                    <group
                      name="car_911992Carrera4SEngine00_vstd_RES0"
                      position={[0, -0.65, -1]}
                    >
                      <mesh
                        name="car_911992Carrera4SEngine00_vstd_RES0_car_vstd_911992Carrera4SE"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SEngine00_vstd_RES0_car_vstd_911992Carrera4SE
                            .geometry
                        }
                        material={materials.car_vstd_911992Carrera4SEngine}
                      />
                    </group>
                    <group
                      name="car_911992Carrera4SEngine00_vstda_RES0"
                      position={[0, -0.65, -1]}
                    >
                      <mesh
                        name="car_911992Carrera4SEngine00_vstda_RES0_car_vstda_911992Carrera4"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SEngine00_vstda_RES0_car_vstda_911992Carrera4
                            .geometry
                        }
                        material={materials.car_vstda_911992Carrera4SGrid01}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="FrontBumper_00_RES0_Bundle"
                  position={[0, 0.543, 1.808]}
                >
                  <group name="RES0004">
                    <group name="car_911992Carrera4SFrontBumper00_vlgt_RES0">
                      <mesh
                        name="car_911992Carrera4SFrontBumper00_vlgt_RES0_car_vlgt_911992Carre"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SFrontBumper00_vlgt_RES0_car_vlgt_911992Carre
                            .geometry
                        }
                        material={materials.car_vlgt_911992Carrera4S}
                      />
                    </group>
                    <group
                      name="car_911992Carrera4SFrontBumper00_vpnt_RES0"
                      position={[0, -0.186, 0.091]}
                    >
                      <mesh
                        name="car_911992Carrera4SFrontBumper00_vpnt_RES0_car_vpnt_911992Carre"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SFrontBumper00_vpnt_RES0_car_vpnt_911992Carre
                            .geometry
                        }
                        material={paintMaterial}
                      />
                    </group>
                    <group name="car_911992Carrera4SFrontBumper00_vstd2_RES0">
                      <mesh
                        name="car_911992Carrera4SFrontBumper00_vstd2_RES0_standardSurface1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SFrontBumper00_vstd2_RES0_standardSurface1_0
                            .geometry
                        }
                        material={materials.standardSurface1}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="FrontHood_00_RES0_Bundle"
                  position={[0, 0.65, 1.226]}
                >
                  <group name="RES0005">
                    <group name="car_911992Carrera4SFrontHood00_vpnt_RES0" />
                    <group name="car_911992Carrera4SFrontHood00_vstd_RES0">
                      <animated.group
                        name="hood"
                        position={[0, 0.224, -0.19]}
                        rotation={hoodRotation as any}
                        onClick={onHoodClick}
                      >
                        <mesh
                          name="car_911992Carrera4SFrontHood00_vstd_RES0_car_vstd_911992Carrera"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .car_911992Carrera4SFrontHood00_vstd_RES0_car_vstd_911992Carrera
                              .geometry
                          }
                          material={materials.car_vstd_911992Carrera4S}
                        />
                        <mesh
                          name="car_911992Carrera4SFrontHood00_vstd_RES0_car_vstd_911992Carrera_1"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .car_911992Carrera4SFrontHood00_vstd_RES0_car_vstd_911992Carrera_1
                              .geometry
                          }
                          material={paintMaterial}
                        />
                      </animated.group>
                    </group>
                  </group>
                </group>
                <group name="Interior_00_RES0_Bundle">
                  <group name="RES0006">
                    <group
                      name="Interior_DoorL"
                      position={[0.858, 0.745, 0.687]}
                    >
                      <group name="car_911992Carrera4SInteriorDoorL00_vpnt_RES0" />
                    </group>
                    <group
                      name="Interior_DoorR"
                      position={[-0.857, 0.745, 0.687]}
                    >
                      <group name="car_911992Carrera4SInteriorDoorR00_vpnt_RES0" />
                    </group>
                    <group name="Interior_Static" position={[0, 0.76, 0.17]}>
                      <group
                        name="car_911992Carrera4SInteriorStatic00_vpnt_RES0"
                        position={[0, -0.198, -0.094]}
                      >
                        <mesh
                          name="car_911992Carrera4SInteriorStatic00_vpnt_RES0_car_vpnt_911992Ca"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .car_911992Carrera4SInteriorStatic00_vpnt_RES0_car_vpnt_911992Ca
                              .geometry
                          }
                          material={paintMaterial}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="RearBumper_00_RES0_Bundle"
                  position={[0, 0.543, -1.506]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <group name="RES0008">
                    <group name="car_911992Carrera4SRearBumper00_vlgt_RES0">
                      <mesh
                        name="car_911992Carrera4SRearBumper00_vlgt_RES0_car_vlgt_911992Carrer"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SRearBumper00_vlgt_RES0_car_vlgt_911992Carrer
                            .geometry
                        }
                        material={materials.car_vlgt_911992Carrera4S}
                      />
                    </group>
                    <group name="car_911992Carrera4SRearBumper00_vpnt_RES0">
                      <mesh
                        name="car_911992Carrera4SRearBumper00_vpnt_RES0_car_vpnt_911992Carrer"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SRearBumper00_vpnt_RES0_car_vpnt_911992Carrer
                            .geometry
                        }
                        material={paintMaterial}
                      />
                    </group>
                    <group name="car_911992Carrera4SRearBumper00_vstd_RES0">
                      <mesh
                        name="car_911992Carrera4SRearBumper00_vstd_RES0_standardSurface1_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SRearBumper00_vstd_RES0_standardSurface1_0
                            .geometry
                        }
                        material={materials.standardSurface1}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="RearHood_00_RES0_Bundle"
                  position={[0, 0.972, -1.572]}
                >
                  <group name="RES0010" position={[0, 0.218, 0.347]}>
                    <group name="car_911992Carrera4SRearHood00_vgla_RES0">
                      <mesh
                        name="car_911992Carrera4SRearHood00_vgla_RES0_car_vgla_911992Carrera4"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SRearHood00_vgla_RES0_car_vgla_911992Carrera4
                            .geometry
                        }
                        material={materials.car_vgla_911992Carrera4S}
                      />
                    </group>
                    <group name="car_911992Carrera4SRearHood00_vlgt_RES0">
                      <mesh
                        name="car_911992Carrera4SRearHood00_vlgt_RES0_car_vlgt_911992Carrera4"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SRearHood00_vlgt_RES0_car_vlgt_911992Carrera4
                            .geometry
                        }
                        material={materials.car_vlgt_911992Carrera4S}
                      />
                    </group>
                    <group
                      name="car_911992Carrera4SRearHood00_vpnt_RES0"
                      position={[0, -1.19, 1.225]}
                    >
                      <mesh
                        name="car_911992Carrera4SRearHood00_vpnt_RES0_car_vpnt_911992Carrera4"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SRearHood00_vpnt_RES0_car_vpnt_911992Carrera4
                            .geometry
                        }
                        material={paintMaterial}
                      />
                    </group>
                  </group>
                </group>
                <group name="Roof_00_RES0_Bundle" position={[0, 1.282, -0.369]}>
                  <group name="RES0016">
                    <group
                      name="car_911992Carrera4SRoof00_vpnt_RES0"
                      position={[0, -1.285, 0.368]}
                    >
                      <mesh
                        name="car_911992Carrera4SRoof00_vpnt_RES0_car_vpnt_911992Carrera4S_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .car_911992Carrera4SRoof00_vpnt_RES0_car_vpnt_911992Carrera4S_0
                            .geometry
                        }
                        material={paintMaterial}
                      />
                    </group>
                  </group>
                </group>
                <group name="SideSkirt_00_RES0_Bundle">
                  <group name="RES0017">
                    <group
                      name="SideSkirt_DoorL"
                      position={[0.858, 0.745, 0.687]}
                    >
                      <group
                        name="car_911992Carrera4SSideSkirtDoorL00_vgla_RES0"
                        position={[0.019, 0.015, 0.249]}
                      />
                      <group
                        name="car_911992Carrera4SSideSkirtDoorL00_vpnt_RES0"
                        position={[0.013, -0.131, -0.625]}
                      />
                    </group>
                    <group
                      name="SideSkirt_DoorR"
                      position={[-0.857, 0.745, 0.687]}
                    >
                      <group
                        name="car_911992Carrera4SSideSkirtDoorR00_vgla_RES0"
                        position={[-0.019, 0.015, 0.249]}
                      />
                      <group
                        name="car_911992Carrera4SSideSkirtDoorR00_vpnt_RES0"
                        position={[-0.013, -0.131, -0.625]}
                      />
                    </group>
                    <group name="SideSkirt_Static" position={[0, 0.468, 0]}>
                      <group
                        name="car_911992Carrera4SSideSkirtStatic00_vgla_RES0"
                        position={[0, -0.468, 0]}
                      >
                        <mesh
                          name="car_911992Carrera4SSideSkirtStatic00_vgla_RES0_car_vgla_911992C"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .car_911992Carrera4SSideSkirtStatic00_vgla_RES0_car_vgla_911992C
                              .geometry
                          }
                          material={materials.car_vgla_911992Carrera4S}
                        />
                      </group>
                      <group
                        name="car_911992Carrera4SSideSkirtStatic00_vpnt_RES0"
                        position={[0, 0.236, 0.111]}
                      >
                        <group name="car_911992Carrera4SSideSkirtStatic00_vpnt_RES0_car_vpnt_911992C">
                          <mesh
                            name="car_911992Carrera4SSideSkirtStatic00_vpnt_RES0_car_vpnt_911992C_1"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .car_911992Carrera4SSideSkirtStatic00_vpnt_RES0_car_vpnt_911992C_1
                                .geometry
                            }
                            material={paintMaterial}
                          />
                          <mesh
                            name="car_911992Carrera4SSideSkirtStatic00_vpnt_RES0_car_vpnt_911992C_2"
                            castShadow
                            receiveShadow
                            geometry={
                              nodes
                                .car_911992Carrera4SSideSkirtStatic00_vpnt_RES0_car_vpnt_911992C_2
                                .geometry
                            }
                            material={materials.car_vstda_911992Carrera4SGrid01}
                          />
                        </group>
                      </group>
                      <group
                        name="car_911992Carrera4SSideSkirtStatic00_vstd_RES0"
                        position={[0, -0.468, 0]}
                      >
                        <mesh
                          name="car_911992Carrera4SSideSkirtStatic00_vstd_RES0_car_vstd_911992C"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .car_911992Carrera4SSideSkirtStatic00_vstd_RES0_car_vstd_911992C
                              .geometry
                          }
                          material={materials.car_vstd_911992Carrera4S}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group
                  name="Spoiler_00_RES0_Bundle"
                  position={[0, 0.867, -1.806]}
                >
                  <group name="RES0018">
                    <group name="Wing">
                      <group
                        name="car_911992Carrera4SWing00_vlgt_RES0"
                        position={[0, -0.093, -0.178]}
                      >
                        <mesh
                          name="car_911992Carrera4SWing00_vlgt_RES0_car_vlgt_911992Carrera4S_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .car_911992Carrera4SWing00_vlgt_RES0_car_vlgt_911992Carrera4S_0
                              .geometry
                          }
                          material={materials.car_vlgt_911992Carrera4S}
                        />
                      </group>
                      <group name="car_911992Carrera4SWing00_vpnt_RES0">
                        <mesh
                          name="car_911992Carrera4SWing00_vpnt_RES0_car_vpnt_911992Carrera4S_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .car_911992Carrera4SWing00_vpnt_RES0_car_vpnt_911992Carrera4S_0
                              .geometry
                          }
                          material={paintMaterial}
                        />
                      </group>
                      <group
                        name="car_911992Carrera4SWing00_vstd_RES0"
                        position={[0, -0.093, -0.178]}
                      >
                        <mesh
                          name="car_911992Carrera4SWing00_vstd_RES0_car_vstd_911992Carrera4S_0"
                          castShadow
                          receiveShadow
                          geometry={
                            nodes
                              .car_911992Carrera4SWing00_vstd_RES0_car_vstd_911992Carrera4S_0
                              .geometry
                          }
                          material={materials.car_vstd_911992Carrera4S}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group name="interiorcar_911992Carrera4SInteriorStatic00_vstd2_RES0Interior">
                <mesh
                  name="interiorcar_911992Carrera4SInteriorStatic00_vstd2_RES0Inte"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .interiorcar_911992Carrera4SInteriorStatic00_vstd2_RES0Inte
                      .geometry
                  }
                  material={materials.car_vstd_911992Carrera4SInterior}
                />
              </group>
              <group name="interiorInterior_StaticRES0006Interior_00_RES0_Bundlegroup1ca">
                <mesh
                  name="interiorInterior_StaticRES0006Interior_00_RES0_Bundlegrou"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .interiorInterior_StaticRES0006Interior_00_RES0_Bundlegrou
                      .geometry
                  }
                  material={materials.car_vstd_911992Carrera4SInterior}
                />
              </group>
              <group name="interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Car001" />
              <group name="interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorLcar" />
              <group name="left-door">
                <animated.group
                  name="interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Car"
                  position={[0.786, 0.688, 0.631]}
                  onClick={onLeftDoorClick}
                  rotation={leftDoorRotation as any}
                >
                  <mesh
                    name="interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Carrera"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Carrera
                        .geometry
                    }
                    material={materials['car_vstd_911992Carrera4SInterior.001']}
                  />
                  <mesh
                    name="interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Carrera_1"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Carrera_1
                        .geometry
                    }
                    material={paintMaterial}
                  />
                  <mesh
                    name="interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Carrera_2"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Carrera_2
                        .geometry
                    }
                    material={materials.car_vgla_911992Carrera4S}
                  />
                  <mesh
                    name="interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Carrera_3"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .interiorRES0006Interior_00_RES0_Bundlegroup1car_911992Carrera_3
                        .geometry
                    }
                    material={materials['car_vstd_911992Carrera4S.002']}
                  />
                </animated.group>
              </group>
              <group name="mirrorscar_911992Carrera4SSideSkirtDoorL00_vstd_RES0SideSkirt_" />
              <group name="mirrorsRES0017SideSkirt_00_RES0_Bundlegroup1car_911992Carrera" />
              <group name="rearcar_911992Carrera4SRearBumper00_vstd2_RES0RES0008RearBump">
                <mesh
                  name="rearcar_911992Carrera4SRearBumper00_vstd2_RES0RES0008Rear"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .rearcar_911992Carrera4SRearBumper00_vstd2_RES0RES0008Rear
                      .geometry
                  }
                  material={materials['car_vstd_911992Carrera4S.001']}
                />
              </group>
              <group name="reargroup1car_911992Carrera4SRearBumper00ExhaustOutA00_vstd_RE">
                <mesh
                  name="reargroup1car_911992Carrera4SRearBumper00ExhaustOutA00_vst"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .reargroup1car_911992Carrera4SRearBumper00ExhaustOutA00_vst
                      .geometry
                  }
                  material={materials['car_vstd_911992Carrera4S.001']}
                />
              </group>
              <group name="reargroup1car_911992Carrera4SRearHood00_vstd_RES0RES0010RearH">
                <mesh
                  name="reargroup1car_911992Carrera4SRearHood00_vstd_RES0RES0010R"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .reargroup1car_911992Carrera4SRearHood00_vstd_RES0RES0010R
                      .geometry
                  }
                  material={materials['car_vstd_911992Carrera4S.001']}
                />
              </group>
              <group name="right-door">
                <animated.group
                  name="interiorRES0006Interior_00_RES0_Bundlegroup1Interior_Door001"
                  position={[-0.785, 0.688, 0.63]}
                  onClick={onRightDoorClick}
                  rotation={rightDoorRotation as any}
                >
                  <mesh
                    name="interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorRcar"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorRcar
                        .geometry
                    }
                    material={materials['car_vstd_911992Carrera4SInterior.001']}
                  />
                  <mesh
                    name="interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorRcar_1"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorRcar_1
                        .geometry
                    }
                    material={paintMaterial}
                  />
                  <mesh
                    name="interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorRcar_2"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorRcar_2
                        .geometry
                    }
                    material={materials.car_vgla_911992Carrera4S}
                  />
                  <mesh
                    name="interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorRcar_3"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes
                        .interiorRES0006Interior_00_RES0_Bundlegroup1Interior_DoorRcar_3
                        .geometry
                    }
                    material={materials['car_vstd_911992Carrera4S.002']}
                  />
                </animated.group>
              </group>
              <group name="RIMcar_911992Carrera4SRims00_FrontLeft_Rotor_vwhl_RES0RES0012">
                <mesh
                  name="RIMcar_911992Carrera4SRims00_FrontLeft_Rotor_vwhl_RES0RES0001"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .RIMcar_911992Carrera4SRims00_FrontLeft_Rotor_vwhl_RES0RES0001
                      .geometry
                  }
                  material={materials.car_vwhl_911992Carrera4SRims}
                />
              </group>
              <group name="RIMRES0012Rims_00_RES0_Bundlecar_911992Carrera4SRims00_FrontR">
                <mesh
                  name="RIMRES0012Rims_00_RES0_Bundlecar_911992Carrera4SRims00_Fr"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .RIMRES0012Rims_00_RES0_Bundlecar_911992Carrera4SRims00_Fr
                      .geometry
                  }
                  material={materials.car_vwhl_911992Carrera4SRims}
                />
              </group>
              <group name="RIMRES0012Rims_00_RES0_Bundlecar_911992Carrera4SRims00_RearLe">
                <mesh
                  name="RIMRES0012Rims_00_RES0_Bundlecar_911992Carrera4SRims00_Re"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .RIMRES0012Rims_00_RES0_Bundlecar_911992Carrera4SRims00_Re
                      .geometry
                  }
                  material={materials.car_vwhl_911992Carrera4SRims}
                />
              </group>
              <group name="RIMRES0012Rims_00_RES0_Bundlecar_911992Carrera4SRims00_RearRi">
                <mesh
                  name="RIMRES0012Rims_00_RES0_Bundlecar_911992Carrera4SRims00_Re001"
                  castShadow
                  receiveShadow
                  geometry={
                    nodes
                      .RIMRES0012Rims_00_RES0_Bundlecar_911992Carrera4SRims00_Re001
                      .geometry
                  }
                  material={materials.car_vwhl_911992Carrera4SRims}
                />
              </group>
              <group name="Wheel1A_3D">
                <group name="Combined_Wheels_3D_">
                  <group name="Combined3DWheel_3DWheel_Front_L_Instance1_Src4">
                    <group
                      name="polySurface10"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface10_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface10_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface103"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface103_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface103_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface104"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface104_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface104_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface105"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface105_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface105_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface106"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface106_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface106_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface107"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface107_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface107_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface108"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface108_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface108_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface109"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface109_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface109_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface11"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface11_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface11_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface110"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface110_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface110_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface111"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface111_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface111_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface112"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface112_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface112_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface113"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface113_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface113_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface114"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface114_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface114_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface115"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface115_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface115_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface116"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface116_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface116_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface117"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface117_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface117_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface118"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface118_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface118_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface119"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface119_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface119_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface12"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface12_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface12_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface120"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface120_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface120_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface121"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface121_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface121_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface122"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface122_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface122_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface123"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface123_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface123_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface124"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface124_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface124_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface125"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface125_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface125_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface126"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface126_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface126_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface127"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface127_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface127_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface128"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface128_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface128_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface13"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface13_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface13_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface134"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface134_BL_RIM_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface134_BL_RIM_0.geometry}
                        material={materials.BL_RIM}
                      />
                    </group>
                    <group
                      name="polySurface135"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface135_BL_RIM_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface135_BL_RIM_0.geometry}
                        material={materials.BL_RIM}
                      />
                    </group>
                    <group
                      name="polySurface137"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface137_BL_RIM_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface137_BL_RIM_0.geometry}
                        material={materials.BL_RIM}
                      />
                    </group>
                    <group
                      name="polySurface14"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface14_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface14_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface144"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface144_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface144_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface145"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface145_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface145_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface146"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface146_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface146_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface147"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface147_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface147_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface148"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface148_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface148_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface149"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface149_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface149_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface15"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface15_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface15_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface150"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface150_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface150_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface151"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface151_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface151_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface152"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface152_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface152_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface153"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface153_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface153_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface154"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface154_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface154_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface155"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface155_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface155_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface16"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface16_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface16_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface242"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface242_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface242_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface243"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface243_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface243_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface244"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface244_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface244_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface245"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface245_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface245_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface246"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface246_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface246_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface247"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface247_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface247_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface248"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface248_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface248_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface249"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface249_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface249_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface250"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface250_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface250_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface251"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface251_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface251_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface252"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface252_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface252_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface253"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface253_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface253_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface254"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface254_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface254_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface255"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface255_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface255_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface256"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface256_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface256_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface257"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface257_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface257_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface258"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface258_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface258_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface259"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface259_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface259_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface260"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface260_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface260_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface261"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface261_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface261_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface262"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface262_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface262_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface263"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface263_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface263_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface264"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface264_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface264_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface265"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface265_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface265_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface266"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface266_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface266_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface267"
                      position={[-0.748, 0.341, 1.236]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface267_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface267_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface283"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface283_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface283_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface284"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface284_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface284_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface285"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface285_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface285_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface286"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface286_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface286_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface287"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface287_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface287_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface288"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface288_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface288_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface289"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface289_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface289_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface290"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface290_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface290_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface291"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface291_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface291_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface292"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface292_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface292_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface293"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface293_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface293_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface294"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface294_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface294_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface387"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface387_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface387_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface388"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface388_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface388_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface389"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface389_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface389_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface390"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface390_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface390_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface391"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface391_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface391_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface392"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface392_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface392_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface393"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface393_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface393_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface394"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface394_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface394_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface395"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface395_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface395_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface396"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface396_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface396_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface397"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface397_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface397_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface398"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface398_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface398_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface399"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface399_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface399_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface400"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface400_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface400_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface401"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface401_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface401_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface402"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface402_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface402_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface403"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface403_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface403_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface404"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface404_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface404_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface405"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface405_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface405_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface406"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface406_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface406_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface407"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface407_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface407_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface408"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface408_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface408_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface409"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface409_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface409_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface410"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface410_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface410_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface411"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface411_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface411_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface412"
                      position={[0.729, 0.359, -1.215]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface412_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface412_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface428"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface428_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface428_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface429"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface429_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface429_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface430"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface430_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface430_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface431"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface431_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface431_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface432"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface432_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface432_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface433"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface433_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface433_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface434"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface434_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface434_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface435"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface435_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface435_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface436"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface436_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface436_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface437"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface437_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface437_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface438"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface438_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface438_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface439"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface439_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface439_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface5"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface5_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface5_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface532"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface532_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface532_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface533"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface533_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface533_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface534"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface534_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface534_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface535"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface535_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface535_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface536"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface536_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface536_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface537"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface537_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface537_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface538"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface538_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface538_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface539"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface539_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface539_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface540"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface540_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface540_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface541"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface541_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface541_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface542"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface542_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface542_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface543"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface543_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface543_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface544"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface544_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface544_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface545"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface545_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface545_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface546"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface546_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface546_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface547"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface547_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface547_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface548"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface548_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface548_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface549"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface549_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface549_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface550"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface550_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface550_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface551"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface551_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface551_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface552"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface552_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface552_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface553"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface553_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface553_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface554"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface554_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface554_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface555"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface555_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface555_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface556"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface556_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface556_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface557"
                      position={[-0.729, 0.359, -1.215]}
                      rotation={[Math.PI, 0, -3.124]}
                    >
                      <mesh
                        name="polySurface557_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface557_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface6"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface6_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface6_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface7"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface7_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface7_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface8"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface8_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface8_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                    <group
                      name="polySurface9"
                      position={[0.748, 0.341, 1.236]}
                      rotation={[0, 0, 0.017]}
                    >
                      <mesh
                        name="polySurface9_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes
                            .polySurface9_Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3
                            .geometry
                        }
                        material={
                          materials.Porsche_911Targa4SRewardRecycled_2021_Wheel1A_3D_3DWheel1B_Mate
                        }
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/porsche_carrera4s.glb');
