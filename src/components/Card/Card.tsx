import { Animal } from '../../types';

const Card = (props:{animal:Animal}) => {
    const {name, animalGroup, attribute} = props.animal;
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
    </div>
</>
);
};
export default Card;