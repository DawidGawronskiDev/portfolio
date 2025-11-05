import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

export default function App() {
  return (
    <Canvas
      camera={{
        position: [-1.43, 1.41, 2],
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
      }}
      className="r3f"
    >
      <Experience />
    </Canvas>
  );
}
