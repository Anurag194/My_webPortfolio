import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return <Html center className="text-xl font-bold text-center">{progress}% Loaded</Html>;
};

export default Loader;
