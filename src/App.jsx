import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

export default function App() {
  return (
    <Canvas
      camera={{
        position: [-1, 2, 3],
      }}
      className="r3f"
    >
      <Experience />
    </Canvas>
  );
}
