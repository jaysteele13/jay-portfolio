
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";


const SharkModel = ({ isMobile }) => {
  const { scene } = useGLTF(
    "./wave_shark/scene.gltf",
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
        position={[-0, 50, 30]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.01: 0.005}
        position={isMobile ? [0, -0.25, -3.0] : [0, -0.25, -0.5]}
        rotation={[.1,-6.1, -0.01]}
      />
    </mesh>
  );
};

const MemoizedSharkModel = React.memo(SharkModel);

const SharkCanvas = () => {
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
      camera={{ position: [0, 30, 25], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
           enableZoom={false}
           maxPolarAngle={Math.PI / 2} // Limits vertical rotation (90 degrees)
           minPolarAngle={Math.PI / 2} // Keeps it at 90 degrees (no up or down rotation)
           maxAzimuthAngle={Math.PI / 2} // Restricts horizontal rotation to 45 degrees to the right
           minAzimuthAngle={-Math.PI / 2.3}
        />
        <MemoizedSharkModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default SharkCanvas;
