
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";


const SurferModel = ({ isMobile }) => {
  const { scene } = useGLTF(
    "./surfer_girl/scene.gltf",
    undefined,
    (loader) => {
      const dracoLoader = new DRACOLoader();
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 30]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.43: 0.50}
        position={isMobile ? [0, -3.25, -3.0] : [0, -4.25, -3.5]}
        rotation={[-0.0, -1.0, -0.1]}
      />
    </mesh>
  );
};

const MemoizedSurferModel = React.memo(SurferModel);

const SurferCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [25, 10, 25], fov: 10 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
           enableZoom={false}
           maxPolarAngle={Math.PI / 2} // Limits vertical rotation (90 degrees)
           minPolarAngle={Math.PI / 2} // Keeps it at 90 degrees (no up or down rotation)
           maxAzimuthAngle={Math.PI / 2} // Restricts horizontal rotation to 45 degrees to the right
           minAzimuthAngle={-Math.PI / 8}
        />
        <MemoizedSurferModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default SurferCanvas;
