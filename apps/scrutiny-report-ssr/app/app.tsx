import { useLoaderData } from 'react-router-dom';
import React from 'react';

interface HomeLoaderData {
  message: string;
}

export function App(): JSX.Element {
  const data = useLoaderData() as HomeLoaderData;

  return <div><p>{data.message}</p></div>;
}

export default App;
