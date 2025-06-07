import { useLoaderData, useNavigation } from 'react-router-dom';
import { LoadingSpinner } from '../routes';

interface AboutLoaderData {
  message: string;
}

export function AboutComponent() {
  const data = useLoaderData() as AboutLoaderData;
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>
      
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <p>{data.message}</p>
      )}
    </div>
  );
}

export default AboutComponent;
