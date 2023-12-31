// App.jsx

import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Add } from "./components/pages/Add.jsx";
import Blogs from "./components/pages/Blogs.jsx";
import  Full  from "./components/pages/Full.jsx";
import { Con } from "./components/pages/Contact.jsx";
import { Del } from "./components/pages/Delete.jsx";
import { Home } from "./components/pages/Home.jsx";

const MIN_RADIUS = 30;
const MAX_RADIUS = 25;
const DEPTH = 20;
const NUM_POINTS = 1500;

const pointsInner = Array.from({ length: NUM_POINTS }, (_, k) => {
  const randomRadius = Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS;
  const randomAngle = Math.random() * Math.PI * 2;
  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = Math.random() * (DEPTH * 2) - DEPTH;

  return {
    idx: k + 1,
    position: [x, y, z],
  };
});

const pointsOuter = Array.from({ length: NUM_POINTS / 4 }, (_, k) => {
  const randomRadius =
    Math.random() * (MAX_RADIUS * 1.5 - MIN_RADIUS * 0.5) + MIN_RADIUS * 0.5;
  const randomAngle = Math.random() * Math.PI * 2;
  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = Math.random() * (DEPTH * 10) - DEPTH * 10;

  return {
    idx: k + 1,
    position: [x, y, z],
  };
});

const App = () => {
 

  const PointCircle = () => {
    const ref = useRef();

    useFrame(({ clock }) => {
      if (ref.current?.rotation) {
        ref.current.rotation.z = clock.getElapsedTime() * .4;
      }
    });

    return (
      <group ref={ref}>
        {pointsInner.map((point) => (
          <Point key={point.idx} position={point.position} />
        ))}
        {pointsOuter.map((point) => (
          <Point key={point.idx} position={point.position} />
        ))}
      </group>
    );
  };

  const Point = ({ position }) => {
    return (
      <Sphere position={position} args={[0.1, 10, 10]}>
        <shaderMaterial
          attach="material"
          vertexShader={`
            varying vec3 vPosition;

            void main() {
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vPosition;

            void main() {
              gl_FragColor = vec4(normalize(vPosition), 1.0);
            }
          `}
        />
      </Sphere>
    );
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Add-Blog" element={<Add />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Con />} />
        <Route path="/Delete-Blog" element={<Del />} />
        <Route path="/Full" element={<Full />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Canvas
        camera={{
          position: [Math.floor(Math.random() * (20 - (-10) + 1) + (-10)), Math.floor(Math.random() * (20 - (-10) + 1) + (-10)), Math.floor(Math.random() * (20 - (-10) + 1) + (-10))],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={30} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
    </div>
  );
};

export default App;
