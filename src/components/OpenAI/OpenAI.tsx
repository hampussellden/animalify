
import { Animal } from '../../types';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

function OpenAI(props:{animal:Animal}) {

  const animal = props.animal;
  
  const body = JSON.stringify({animal});
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: body
  }
  const { isLoading, error, data } = useQuery({
    queryKey: ['data'],
    queryFn: () =>
    fetch('https://localhost:3000/api',options).then(
      (res) => res.json())
    });

  if (isLoading) return(
    <div>
      <h1>Loading...</h1>
    </div>
  ) 

  if (error) return (
    <div>
      <h1>Error</h1>
    </div>
  )
  if (data){
    console.log(data);
  }
  return (
    <div>
      {/* <h1>{data}</h1> */}
      <h2>hello world</h2>
    </div>
  )
}
export default OpenAI;