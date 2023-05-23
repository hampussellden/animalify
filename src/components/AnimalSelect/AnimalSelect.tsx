
import {AnimalSelector } from '../../types';

const AnimalSelect = (props: AnimalSelector) => {
    const {selectName, selectId, animals, onChange} = props;
return (
    <select name={selectName} id={selectId} onChange={(e) => onChange(e.target.value)}>
        {animals.map((animal, i) => (
            <option key={i} value={animal.name}>{animal.name}</option>
        ))}
    </select>
)
};
export default AnimalSelect;