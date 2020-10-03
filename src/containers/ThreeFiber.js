import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const ThreeFiber = () => {

  const boxes = []
  for (var x = -6; x < 8; x += 2) {
    for (var y = -6; y < 8; y += 2) {
      boxes.push(<Box position={[x, y, 0]} />)
    }
  }
  return (
    <div className="page" >
      <h1>three fiber</h1>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {boxes}
      </Canvas>
  </div>
  );
};

export default ThreeFiber;