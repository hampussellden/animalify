// import React from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { Animal } from '../../types';

// const getImage = (name:string,ACCESS_KEY:string) => {
//     const {isLoading, error, data}:any = useQuery({
//         queryKey: ['unsplash'],
//         queryFn: () => fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&query=${name},animal&orientation=squarish`).then((res) => res.json())
//     });
//     if (!isLoading){
//         return data.urls.small as string;
//     }
//     if(error){
//         return 'error';
//     }
// };

// const Unsplash = (props: {name:string, onChange:any}) => {
//     const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
//     const name = props.name;

//     const animalPic = getImage(name,ACCESS_KEY);
//     console.log(animalPic);
// return (
// <>
// { animalPic &&
//     <img src={animalPic} alt="unsplash" onChange={animalPic}/>
// }
// </>
// );
// };
// export default Unsplash;

