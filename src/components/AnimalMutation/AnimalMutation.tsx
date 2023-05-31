
import { useState } from "react";
import styled from "styled-components";
import { Animal, NewAnimal, Vertebrate, ColorScheme } from '../../types';

const NewAnimalButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    color: white;
    background-color: rgba(18, 6, 5, 0.725);
    &:hover {
      background-color: rgba(18, 6, 5, 0.3);
    }
`;
const NewAnimalCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid black;    
    padding: 1rem;
`;
const AnimalDetailsContainer = styled.div`
    display: flex;
    gap: 1rem;
`;    
const AnimalDetails = styled.ul`
    list-style-type: none;
    & p {
        font-weight: bold;
    }
`;

type AnimalMutationProps = {
    selectedAnimal1: Animal,
    selectedAnimal2: Animal,
    setNewAnimal: (obj:NewAnimal) => void | React.Dispatch<React.SetStateAction<NewAnimal | undefined>>
}

const AnimalMutation = (props: AnimalMutationProps) => {
    const [newAnimalLoaded, setNewAnimalLoaded] = useState<boolean>(false);
    const { selectedAnimal1, selectedAnimal2 } = props;

    const createNewAnimal = ():NewAnimal => {
        const newName = ():string => {
            let count = 0;
            count += Math.floor(Math.random() * 3);
            let name: string;
            console.log({ count });

            if (count === 0) {
                name = selectedAnimal1.name.slice(0, 3) + selectedAnimal2.name.slice(0, 3);
            } else if (count === 1) {
                name = selectedAnimal1.name.slice(0, 3) + selectedAnimal2.name.slice(0, 3) + selectedAnimal1.name.slice(3);
            } else if (count === 2) {
                name = selectedAnimal1.name.slice(0, 4) + selectedAnimal2.name.slice(4) + selectedAnimal1.name.slice(0, 2);
            } else {
                name = selectedAnimal1.name.slice(0, 2) + selectedAnimal2.name.slice(2, 2) + selectedAnimal1.name.slice(2, 2);
            }

            return name.toLowerCase();
        };
        const newAnimalGroup = (): Vertebrate => {
            let randomInteger = Math.floor(Math.random() * 2);
            let animalGroup: Vertebrate;

            if (randomInteger === 1) {
                animalGroup = selectedAnimal1.animalGroup;
            } else {
                animalGroup = selectedAnimal2.animalGroup;
            }

            return animalGroup;
        };
        const newAnimalColorScheme = (): ColorScheme => {
            let newColorScheme: ColorScheme = {
                color: [],
                pattern: [],
            };

            selectedAnimal1.colorScheme.color.map((color) => {
                if (newColorScheme.color.indexOf(color) === -1) {
                    newColorScheme.color.push(color);
                }
            });

            selectedAnimal2.colorScheme.color.map((color) => {
                if (newColorScheme.color.indexOf(color) === -1) {
                    newColorScheme.color.push(color);
                }
            });

            selectedAnimal1.colorScheme.pattern.map((pattern) => {
                if (newColorScheme.pattern.indexOf(pattern) === -1) {
                    newColorScheme.pattern.push(pattern);
                }
            });
            selectedAnimal2.colorScheme.pattern.map((pattern) => {
                if (newColorScheme.pattern.indexOf(pattern) === -1) {
                    newColorScheme.pattern.push(pattern);
                }
            });
            return newColorScheme;
        };
        const newLocation = ():string[] => {
            let locations: string[] = [];

            selectedAnimal1.location.map((loc) => {
                if (locations.indexOf(loc) === -1) {
                    locations.push(loc);
                }
            });
            selectedAnimal2.location.map((loc) => {
                if (locations.indexOf(loc) === -1) {
                    locations.push(loc);
                }
            });

            return locations;
        };
        const newAttributes = (): string[] => {
            let attributes: string[] = [];

            selectedAnimal1.attribute.map((attr) => {
                if (attributes.indexOf(attr) === -1) {
                    attributes.push(attr);
                }
            });
            selectedAnimal2.attribute.map((attr) => {
                if (attributes.indexOf(attr) === -1) {
                    attributes.push(attr);
                }
            });

            return attributes;
        };
        const newAnimalParents:Animal[] = [selectedAnimal1, selectedAnimal2];
        const newAnimal: NewAnimal = {
            name: newName(),
            animalGroup: newAnimalGroup(),
            colorScheme: newAnimalColorScheme(),
            location: newLocation(),
            attribute: newAttributes(),
            parents: newAnimalParents,
        };
    return newAnimal;
    }
    const newAnimal = createNewAnimal();
    return (
        <>
        <div>
            <NewAnimalButton onClick={() => {props.setNewAnimal(newAnimal),setNewAnimalLoaded(true)}}> 
                Generate new Animal 
            </NewAnimalButton>
            { newAnimalLoaded && 
            <NewAnimalCard>
                <h4>{newAnimal.name}</h4>
                <h5>{newAnimal.animalGroup}</h5>
                <AnimalDetailsContainer>
                    <AnimalDetails>
                        <p>Color</p>
                        {newAnimal.colorScheme.color.map((color, i) => {
                            return <li key={i}>{color}</li>;
                        })}
                    </AnimalDetails>
                    <AnimalDetails>
                        <p>Pattern</p>
                        {newAnimal.colorScheme.pattern.map((pattern, i) => {
                            return <li key={i}>{pattern}</li>;
                        })}
                    </AnimalDetails>
                    <AnimalDetails>
                        <p>Location</p>
                        {newAnimal.location.map((location, i) => {
                            return <li key={i}>{location}</li>;
                        })}
                    </AnimalDetails>
                    <AnimalDetails>
                        <p>Attribute</p>
                        {newAnimal.attribute.map((attribute, i) => {
                            return <li key={i}>{attribute}</li>;
                        })}
                    </AnimalDetails>
                    <AnimalDetails>
                        <p>Parents</p>
                        {newAnimal.parents.map((parent, i) => {
                            return <li key={i}>{parent.name}</li>;
                        })}
                    </AnimalDetails>
                </AnimalDetailsContainer>
            </NewAnimalCard>}
        </div>
        </>
    );
};
export default AnimalMutation;
