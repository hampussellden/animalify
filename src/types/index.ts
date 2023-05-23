// export enum Vertebrae {
//     Fish='Fish',
//     Reptile='Reptile',
//     Amphibian='Amphibian',
//     Bird='Bird',
//     Mammal='Mammal'
// }

const vertebrate = ['Fish', 'Reptile', 'Amphibian', 'Bird', 'Mammal'] as const
export type Vertebrate = typeof vertebrate[number]

const patterns = ['dotted', 'striped', 'solid', 'split', 'spotted', 'transparent', 'camouflage'] as const
export type Pattern = typeof patterns[number]

export type ColorScheme = {
    color: string[],
    pattern: Pattern[]
}

export type Animal = {
    name: string,
    animalGroup: Vertebrate,
    colorScheme: ColorScheme,
    location: string[],
    attribute: string[],
}

export type SelectProps = {
    selectName: string,
    animals: Animal[]
    onChange?: any
}