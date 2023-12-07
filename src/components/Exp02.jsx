import { Circle, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  CuboidCollider,
  Physics,
  RigidBody,
  useRapier,
} from "@react-three/rapier";
import { useEffect, useMemo, useRef } from "react";

// const Controls = {
//   forward: "forward",
//   back: "back",
//   left: "left",
//   right: "right",
//   jump: "jump",
// };
export default function Exp02() {
  const physicsRef = useRef();
  const RAPIER = useRapier();
  //   let groundColliderDesc = RAPIER.ColliderDesc.cuboid(10.0, 0.1);
  //   world.createCollider(groundColliderDesc);
  useEffect(() => {
    console.log(RAPIER);
  }, []);
  //   const map = useMemo(
  //     () => [
  //       { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
  //       { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
  //       { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
  //       { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
  //       { name: Controls.jump, keys: ["Space"] },
  //     ],
  //     [],
  //   );

  return (
    // <KeyboardControls map={map}>
    <Canvas>
      {/* <OrbitControls /> */}
      <Physics>
        <RigidBody position={[0, 2, 0]} colliders={false}>
          <Circle material-color="green" />
          <CuboidCollider args={[1, 1, 1]} />
        </RigidBody>
      </Physics>
    </Canvas>
    // </KeyboardControls>
  );
}
