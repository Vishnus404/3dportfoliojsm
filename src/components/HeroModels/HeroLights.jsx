import React from 'react'
import { ThreeMFLoader } from 'three/examples/jsm/Addons.js'
import * as Three from 'three';


const HeroLights = () => {
  return (
    <>
        <spotLight position = {[2,5,6]}
        angle={0.15}
        intensity={100}
        penumbra={0.7}
        color="white"
        />

        <spotLight position = {[4,5,4]}
        angle={0.3}
        intensity={40}
        penumbra={0.5}
        color="#4cc0f0"
        />

        <spotLight position = {[-3,5,5]}
        angle={0.4}
        intensity={60}
        penumbra={1}
        color="#9d4edd"
        />

        <primitive
         object={new Three.RectAreaLight('#A259FF', 8, 3, 2)}
         position={[0, 3, 4]}
         intensity={5}
         rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        />

        <pointLight
         position={[0, 1, 0]}
         intensity={10}
         color="#7209b7" 
         />

         <pointLight
         position={[1, 2, -2]}
         intensity={10}
         color="#0d00a4" 
         />     
    </>
  )
}

export default HeroLights