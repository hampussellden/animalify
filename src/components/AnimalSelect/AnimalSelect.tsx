
import { SelectProps } from '../../types';

const AnimalSelect = (props: SelectProps) => {
    const {selectName, animals, onChange} = props;

    const animalOption = animals.map((animal, i) => (
        <option key={i} value={animal.name}>{animal.name}</option>
    ));

return (
    <select name={selectName} onChange={(e) => onChange(
        animals.find((animal) => animal.name === e.target.value)
        )}>
            {animalOption}
    </select>
)
};
export default AnimalSelect;
