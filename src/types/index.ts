// export enum Vertebrae {
//     Fish='Fish',
//     Reptile='Reptile',
//     Amphibian='Amphibian',
//     Bird='Bird',
//     Mammal='Mammal'
// }
const vertebrae = ['Fish','Reptile','Amphibian','Bird','Mammal'] as const
export type Vertebrae = typeof vertebrae[number]

const patterns = ['dotted','striped','solid','split','spotted','transparent','camouflage'] as const 
export type Pattern = typeof patterns[number]

export type ColorScheme = {
    color: string[],
    pattern: Pattern[]
}

export type Animal = {
    name: string,
    group: Vertebrae,
    colorScheme: ColorScheme,
    location: string[],
    attribute: String[],
}

export type AnimalSelector = {
    selectName: string,
    selectId: string,
    animals: Animal[]
    onChange?: any
}