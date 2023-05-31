import { useState } from "react";
import styled from "styled-components";
import { Animal, NewAnimal, Vertebrate, ColorScheme } from "../../types";

const NewAnimalButton = styled.div`
    margin-top: 1rem;
    width: 32.25rem;
    border-radius: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: 100;
    text-transform: capitalize;
    color: #f0f0eb;
    cursor: pointer;
    background-color: #120605b9;
    &:hover {
        background-color: rgba(18, 6, 5, 0.3);
    }
`;
const NewAnimalCard = styled.div`
    width: 100%;
    max-width: 1130px;
    border-radius: 0.1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: #120605b9;
    padding: 1rem;

    span {
        display: flex;
        gap: 1rem;
    }

    h4 {
        font-size: 4rem;
        font-weight: 100;
        letter-spacing: 0.1rem;
        text-transform: capitalize;
        color: #d0adf0;
        margin: 0;
        padding: 0;
    }

    h5 {
        font-size: 2rem;
        font-weight: 100;
        text-transform: capitalize;
        font-style: italic;
        transform: translateY(0.56rem);
    }
`;
const AnimalDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
`;

const AnimalDetails = styled.ul`
    list-style-type: none;
    & p {
        font-size: 1.5rem;
        font-weight: 400;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        padding-bottom: 0.5rem;
    }

    li {
        font-size: 1.5rem;
        font-weight: 100;
        letter-spacing: 0.1rem;
        text-transform: capitalize;
    }
`;

type AnimalMutationProps = {
    selectedAnimal1: Animal;
    selectedAnimal2: Animal;
    setNewAnimal: (obj: NewAnimal) => void | React.Dispatch<React.SetStateAction<NewAnimal | undefined>>;
};

const AnimalMutation = (props: AnimalMutationProps) => {
    const [newAnimalLoaded, setNewAnimalLoaded] = useState<boolean>(false);
    const { selectedAnimal1, selectedAnimal2 } = props;

    const createNewAnimal = (): NewAnimal => {
        const newName = (): string => {
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
        const newLocation = (): string[] => {
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
        const newAnimalParents: Animal[] = [selectedAnimal1, selectedAnimal2];
        const newAnimal: NewAnimal = {
            name: newName(),
            animalGroup: newAnimalGroup(),
            colorScheme: newAnimalColorScheme(),
            location: newLocation(),
            attribute: newAttributes(),
            parents: newAnimalParents,
        };
        return newAnimal;
    };
    const newAnimal = createNewAnimal();
    return (
        <>
            <NewAnimalButton
                onClick={() => {
                    props.setNewAnimal(newAnimal), setNewAnimalLoaded(true);
                }}
            >
                Unveil Mutation
            </NewAnimalButton>
            {newAnimalLoaded && (
                <NewAnimalCard>
                    <span>
                        <h4>{newAnimal.name}</h4>
                        <h5>{newAnimal.animalGroup}</h5>
                    </span>
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
                            <p>Attributes</p>
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
                </NewAnimalCard>
            )}
        </>
    );
};
export default AnimalMutation;
