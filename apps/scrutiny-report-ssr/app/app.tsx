import { useLoaderData, useNavigation } from 'react-router-dom';
import { LoadingSpinner } from './routes';

interface HomeLoaderData {
  message: string;
}

export function App() {
  const data = useLoaderData() as HomeLoaderData;
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  
  return (
    <div>
      <h1>
        <span> Hello there, </span>
        Welcome scrutiny-report-ssr 👋
      </h1>
      
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <p>{data.message}</p>
      )}
    </div>
  );
}

export default App;
