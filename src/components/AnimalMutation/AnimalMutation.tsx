import { ColorScheme, NewAnimal, AnimalMutationProps, Vertebrate } from "../../types";
import { useState } from "react";
import styled from "styled-components";

const NewAnimalCard = styled.div`
    display: flex;
    flex-direction: column;
`;

const AnimalMutation = (props: AnimalMutationProps) => {
    const [newAnimalLoaded, setNewAnimalLoaded] = useState<boolean>(false);
    const { selectedAnimal1, selectedAnimal2 } = props;
    const createNewAnimal = () => {
    const newName = () => {
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
    const newLocation = () => {
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
    const newAnimalParents = [selectedAnimal1, selectedAnimal2];
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
            <button onClick={() => {props.setNewAnimal(newAnimal),setNewAnimalLoaded(true)}}> Generate new Animal </button>
            { newAnimalLoaded && 
            <NewAnimalCard>
                <p>{newAnimal.name}</p>
                <p>{newAnimal.animalGroup}</p>
                <ul>
                    <p>Color</p>
                    {newAnimal.colorScheme.color.map((color, i) => {
                        return <li key={i}>{color}</li>;
                    })}
                </ul>
                <ul>
                    <p>Pattern</p>
                    {newAnimal.colorScheme.pattern.map((pattern, i) => {
                        return <li key={i}>{pattern}</li>;
                    })}
                </ul>
                <ul>
                    <p>Location</p>
                    {newAnimal.location.map((location, i) => {
                        return <li key={i}>{location}</li>;
                    })}
                </ul>
                <ul>
                    <p>Attribute</p>
                    {newAnimal.attribute.map((attribute, i) => {
                        return <li key={i}>{attribute}</li>;
                    })}
                </ul>
                <ul>
                    <p>Parents</p>
                    {newAnimal.parents.map((parent, i) => {
                        return <li key={i}>{parent.name}</li>;
                    })}
                </ul>
            </NewAnimalCard>}
        </>
    );
};
export default AnimalMutation;
