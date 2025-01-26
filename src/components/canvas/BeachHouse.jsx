
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader";
import CanvasLoader from "../Loader";


const BeachHouseModel = ({ isMobile }) => {
  const { scene } = useGLTF(
    "./beach_house/scene.gltf",
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
        scale={isMobile ? 1: .705}
        position={isMobile ? [0, -5.75, -1.0] : [0, -4.25, -0.5]}
        rotation={[.05,-6.1, -0.01]}
      />
    </mesh>
  );
};

const MemoizedBeachModel = React.memo(BeachHouseModel);

const BeachHouseCanvas = () => {
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
      camera={{ position: [0, 30, 25], fov: 46 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
           enableZoom={false}
           maxPolarAngle={Math.PI / 2} // Limits vertical rotation (90 degrees)
           minPolarAngle={Math.PI / 2} // Keeps it at 90 degrees (no up or down rotation)
           maxAzimuthAngle={Infinity} // Restricts horizontal rotation to 45 degrees to the right
           minAzimuthAngle={-Infinity}
           mouseButtons={{
            LEFT: 0, // Left-click is allowed (rotate horizontally)
            MIDDLE: 0, // Middle mouse button (scroll) is disabled
            RIGHT: null, // Disable right-click drag functionality
          }}
        />
        <MemoizedBeachModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BeachHouseCanvas;
