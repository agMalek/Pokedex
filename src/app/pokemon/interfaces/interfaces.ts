export interface Pokemon{
    id: number,
    name: string,
    lvl: number,
    evolutionId?: number | null,
    abilities: Pokemon_abilities[],
    type: string[],
    image: string
}


export interface Pokemon_abilities{
    name: string,
    description: string
}