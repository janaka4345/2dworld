import { Box, Circle } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import {
  BallCollider,
  CuboidCollider,
  RigidBody,
  useRapier,
} from "@react-three/rapier";
import { useEffect } from "react";
// import * as DD from "@dimforge/rapier2d-compat";
// import { ColliderDesc, RigidBodyDesc } from "@dimforge/rapier2d-compat";

export default function Planee(params) {
  const viewport = useThree((state) => state.viewport);
  const rapier = useRapier();
  useEffect(() => {
    console.log(rapier);
  }, []);
  // console.log("DD", DD);
  return (
    <>
      <RigidBody type="fixed">
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 10, 10, 10]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      {/* <RigidBody position={[0, 2, 0]} colliders={false}>
        <Circle material-color="green" />
        <CuboidCollider args={[1, 1]} />
      </RigidBody>{" "}
      */}
    </>
  );
}
