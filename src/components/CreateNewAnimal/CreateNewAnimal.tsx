import { ColorScheme, NewAnimal, CreateAnimalProps } from "../../types";

const CreateNewAnimal = (props: CreateAnimalProps) => {
    const { selectedAnimal1, selectedAnimal2 } = props;

    const newName = () => {
        let count = 0;
        count += Math.floor(Math.random() * 4);
        let name:string = "";
        
        if (count === 0) {            
            name = selectedAnimal1.name.slice(0, 3) + selectedAnimal2.name.slice(0, 3);
        } else if (count === 1) {
            name = selectedAnimal1.name.slice(1, 3) + selectedAnimal2.name.slice(3);
        } else if (count === 2) {
            name = selectedAnimal1.name.slice(0, 2) + selectedAnimal2.name.slice(2, 2) + selectedAnimal1.name.slice(4, 2);
        } else if (count === 3) {
            name = selectedAnimal1.name.slice(-3) + selectedAnimal2.name.slice(0, 2);
        } else {
            name = selectedAnimal1.name.slice(0, 2) + selectedAnimal2.name.slice(2, 4) + selectedAnimal1.name.slice(2, 2);
        }

        return name.toLowerCase();
    }

    const newAnimalGroup = () => {
        let randomInteger = Math.floor(Math.random() * 2);
        let animalGroup:string = "";

        if (randomInteger === 1) {
            animalGroup = selectedAnimal1.animalGroup;
        } else {
            animalGroup = selectedAnimal2.animalGroup;
        }

        return animalGroup;
    }

    const newColorScheme = () => {
        let colors: string[] = [];
        let patterns: string[] = [];

        let newColorScheme: ColorScheme = {
            color: colors,
            pattern: patterns,
        };

        selectedAnimal1.colorScheme.color.map((color) => {
                if (colors.indexOf(color) === -1) {
                    colors.push(color)
            }
        })

        selectedAnimal2.colorScheme.color.map((color) => {
                if (colors.indexOf(color) === -1) {
                    colors.push(color)
            }
        })

        selectedAnimal1.colorScheme.pattern.map((pattern) => {
            if (patterns.indexOf(pattern) === -1) {
                patterns.push(pattern)
        }
        })
        selectedAnimal2.colorScheme.pattern.map((pattern) => {
            if (patterns.indexOf(pattern) === -1) {
                patterns.push(pattern)
            }
        })

        return newColorScheme;
    }

    const newLocation = () => {
        let locations: string[] = [];

        selectedAnimal1.location.map((loc) => {
            if (locations.indexOf(loc) === -1) {
                locations.push(loc)
        }
        })
        selectedAnimal2.location.map((loc) => {
            if (locations.indexOf(loc) === -1) {
                locations.push(loc)
        }
        })

        return locations;
    }

    // const newAnimal: NewAnimal = {
    //     name: newName(),
    //     animalGroup: newAnimalGroup(),
    //     colorScheme: newColorScheme(),
    //     location: newLocation(),
    //     attribute:,
    // }

return (
    <div>{newName() + newAnimalGroup()}</div>
)
};
export default CreateNewAnimal;