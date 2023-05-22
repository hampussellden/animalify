export enum Vertebrae {
    Fish='Fish',
    Reptile='Reptile',
    Amphibian='Amphibian',
    Bird='Bird',
    Mammal='Mammal'
}
const patterns = ['dottet','striped','solid','split','spotted','transparent'] as const 
export type Pattern = typeof patterns[number]

export type ColorScheme = {
    color: string[],
    pattern: Pattern[]
}

export type Animal = {
    name: string,
    vertebrae: Vertebrae,
    colorScheme: ColorScheme,
    locations: string[],
    attributes: String[],
}