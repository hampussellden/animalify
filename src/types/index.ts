const vertebrate = ['Fish', 'Reptile', 'Amphibian', 'Bird', 'Mammal'] as const
export type Vertebrate = typeof vertebrate[number]

const pattern = ['dotted', 'striped', 'solid', 'split', 'spotted', 'transparent', 'camouflage'] as const
export type Pattern = (typeof pattern)[number]

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

export type NewAnimal = Animal & {
    parents: Animal[],
}
