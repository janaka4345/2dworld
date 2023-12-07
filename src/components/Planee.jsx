import { Box, Circle } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { BallCollider, CuboidCollider, RigidBody } from "@react-three/rapier";

export default function Planee(params) {
  const viewport = useThree((state) => state.viewport);
  return (
    <>
      <RigidBody type="fixed">
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 10, 10, 10]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      <RigidBody position={[0, 2, 0]} colliders={false}>
        <Circle material-color="green" />
        <CuboidCollider args={[1, 1, 0.1]} />
      </RigidBody>
    </>
  );
}
