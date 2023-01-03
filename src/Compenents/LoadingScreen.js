import { CircleLoader } from 'react-spinners';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-1/2">
      <CircleLoader size={150} color="#3498db" />
    </div>
  );
};

export default LoadingScreen;
