const BASE_PATH = "https://disney_api.nomadcoders.workers.dev/characters";

export interface ICharacters {
    id: number;
    name: string;
    imageUrl: string;
}

export async function fetchCharacters(){
    const response = await fetch(`${BASE_PATH}`);
    return await response.json();
}

export async function fetchCharactersDetail(id : string){
    const response = await fetch(`${BASE_PATH}/${id}`);
    return await response.json();
}