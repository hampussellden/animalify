
import { Animal } from '../../types';
import { useQuery } from '@tanstack/react-query';

function OpenAI(props:{animal:Animal}) {
  const animal = props.animal;
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://localhost:3000',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({animal})
      }).then(
        (res) => res.json(),
      ),
  })

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

  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}
export default OpenAI;