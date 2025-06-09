import { useLoaderData, useNavigation } from 'react-router-dom';
import { LoadingSpinner } from '../routes';

interface AboutLoaderData {
  message: string;
}

export function AboutComponent() {
  const data = useLoaderData() as AboutLoaderData;
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return <div>{isLoading ? <LoadingSpinner /> : <p>{data.message}</p>}</div>;
}

export default AboutComponent;
