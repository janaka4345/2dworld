import { Circle, Plane } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";

export default function Planee(params) {
  const viewport = useThree((state) => state.viewport);
  return (
    <>
      <RigidBody type="fixed">
        <mesh>
          <planeGeometry args={[viewport.width, viewport.height, 10, 10]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      <RigidBody type="dynamic" colliders="ball">
        <Circle material-color="green" />
      </RigidBody>
    </>
  );
}
