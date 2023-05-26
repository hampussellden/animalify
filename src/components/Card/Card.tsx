import { useEffect } from 'react';
import { Animal } from '../../types';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';



const Card = (props:{animal:Animal}) => {
    const [animalPic, setAnimalPic] = useState<string | undefined>(undefined);
    const {name, animalGroup, attribute} = props.animal;
    const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;


    const {isLoading, error, data}:any = useQuery({
        queryKey: ['unsplash'],
        queryFn: () => fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&query=${name},animal&orientation=squarish`).then((res) => res.json())
    });

    useEffect(() => {
        setAnimalPic(data?.urls.small);
    }, [data]);

return (
<>
    <div className='panel'> 
        <h2>{name}</h2>
        <p>{animalGroup}</p>
        <ul>
            {attribute.map((attr, i) =>{
                return <li key={i}>{attr}</li>
            })}
        </ul>
        <div>
        {isLoading && <h3>Img loading...</h3>}
        {animalPic && <img src={animalPic} alt="unsplash"/>}
        </div>
    </div>
</>
)};
export default Card;