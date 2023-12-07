import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights";
import { Physics } from "@react-three/rapier";
import Planee from "./Planee";

export default function World() {
  return (
    <>
      <OrbitControls makeDefault />
      <axesHelper args={[2]} />
      <color attach="background" args={["#000000"]} />
      <Physics debug gravity={[0, -9.81]}>
        <Lights />
        <Planee />
      </Physics>
    </>
  );
}
