//FUNÇOES AQUIIIIII
function listPokemon (pokemons) { 
  return pokemons.filter(poke => pokemons.includes());
  }

function listTypes (pokemons, type) {
 return pokemons.filter(poke => poke.type.includes(type));
}

const app = {
  listTypes
};