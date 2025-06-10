import { useLoaderData } from 'react-router-dom';
import React from 'react';

interface AboutLoaderData {
  message: string;
}

export function AboutComponent(): JSX.Element {
  const data = useLoaderData() as AboutLoaderData;

  return <div><p>{data.message}</p></div>;
}

export default AboutComponent;
