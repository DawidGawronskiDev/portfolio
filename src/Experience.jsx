import {
  ContactShadows,
  Center,
  Environment,
  Float,
  PresentationControls,
  useGLTF,
  Html,
} from "@react-three/drei";

import { Suspense } from "react";

export default function Experience() {
  const macbook = useGLTF("/model.gltf");

  return (
    <>
      <Environment preset="city" />

      <color attach="background" args={["#101010"]} />

      <Suspense fallback={null}>
        <PresentationControls
          global
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          damping={0.1}
          config={{ mass: 2, tension: 400 }}
        >
          <Center>
            <Float>
              <primitive object={macbook.scene} position={[0, -1, 0]}>
                <Html
                  transform
                  wrapperClass="htmlScreen"
                  distanceFactor={1.17}
                  position={[0, 1.56, -1.4]}
                  rotation={[-0.25, 0, 0]}
                >
                  <iframe src="/portfolio.html" />
                </Html>
              </primitive>
            </Float>
          </Center>
        </PresentationControls>
        <ContactShadows position-y={-1.4} opacity={0.4} />
      </Suspense>
    </>
  );
}
