// export enum Vertebrae {
//     Fish='Fish',
//     Reptile='Reptile',
//     Amphibian='Amphibian',
//     Bird='Bird',
//     Mammal='Mammal'
// }

const vertebrate = ['Fish', 'Reptile', 'Amphibian', 'Bird', 'Mammal'] as const
export type Vertebrate = typeof vertebrate[number]

// const patterns = ['dotted', 'striped', 'solid', 'split', 'spotted', 'transparent', 'camouflage'] as const
// export type Patterns = typeof patterns[number]

export type ColorScheme = {
    color: string[],
    pattern: string[]
}

export type Animal = {
    name: string,
    animalGroup: Vertebrate,
    colorScheme: ColorScheme,
    location: string[],
    attribute: string[],
}

export type NewAnimal = {
    name: string,
    animalGroup: string,
    colorScheme: ColorScheme,
    location: string[],
    attribute: string[],
}

export type SelectProps = {
    selectName: string,
    animals: Animal[]
    onChange?: any
}

export type CreateAnimalProps = {
    selectedAnimal1: Animal,
    selectedAnimal2: Animal,
}

// export const colors: string[] = [];

// export const mapColors = mockAnimals.map((animal) => {
//     animal.colorScheme.color.map((c) => {
//         if (colors.indexOf(c) === -1) {
//             colors.push(c)
//         }
//     })
// })