class Pokemon {
constructor() {

}

async getPokemon(input) {

const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

const dataJson = await response.json();

return {
dataJson
}
    
}

};
