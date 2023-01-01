import { CircleLoader } from 'react-spinners';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <CircleLoader size={150} color="#3498db" />
    </div>
  );
};

export default LoadingScreen;
