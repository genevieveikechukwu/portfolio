import { Canvas } from "@react-three/fiber";
import { Float, Sphere, Box, Torus } from "@react-three/drei";
import { motion } from "framer-motion";

const FloatingShape = ({ position, color, size = 1, children }: any) => (
  <Float
    speed={1.5}
    rotationIntensity={0.5}
    floatIntensity={0.5}
  >
    <mesh position={position}>
      {children}
      <meshPhongMaterial color={color} transparent opacity={0.6} />
    </mesh>
  </Float>
);

const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#8B5CF6" />
      
      <FloatingShape position={[-4, 2, -2]} color="#8B5CF6">
        <Sphere args={[0.8]} />
      </FloatingShape>
      
      <FloatingShape position={[4, -1, -3]} color="#10B981">
        <Box args={[1.2, 1.2, 1.2]} />
      </FloatingShape>
      
      <FloatingShape position={[2, 3, -1]} color="#EC4899">
        <Torus args={[0.8, 0.3, 8, 16]} />
      </FloatingShape>
      
      <FloatingShape position={[-3, -2, -4]} color="#06B6D4">
        <Box args={[0.6, 2, 0.6]} />
      </FloatingShape>
      
      <FloatingShape position={[0, 4, -5]} color="#F59E0B">
        <Sphere args={[0.5]} />
      </FloatingShape>
    </>
  );
};

export const FloatingElements = () => {
  return (
    <>
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* CSS Animated Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 blur-sm"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-secondary rounded-lg opacity-30"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-accent rounded-full opacity-25"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-60 right-40 w-8 h-8 bg-primary opacity-40 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Particle-like elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </>
  );
};