import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  Backdrop,
  Environment,
  OrbitControls,
  Sky,
  SpotLight,
} from "@react-three/drei";

function App() {
  return (
    <div className="App">
      <Canvas shadows>
        <OrbitControls autoRotate />
        <Sky />

        {/* LIGHTS */}
        <ambientLight intensity={0.42} />

        {/* THREE SPOT LIGHTS */}
        <directionalLight position={[-2.5, 4, -2.5]} color="red" castShadow />
        <directionalLight position={[2.5, 4, -2.5]} color="green" castShadow />
        <directionalLight position={[-2.5, 4, 2.5]} color="blue" castShadow />

        {/* CUBE */}
        <mesh rotation-y={Math.PI * 0.25} castShadow>
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* GROUND */}
        <mesh
          receiveShadow
          position-y={-0.5}
          rotation-x={-Math.PI * 0.5}
          scale={5}
        >
          <planeGeometry />
          <meshStandardMaterial color="beige" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
