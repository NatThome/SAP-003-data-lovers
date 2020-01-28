function listTypes (pokemons, typeParametro) {
  return pokemons.filter(poke => poke.type.includes(typeParametro));
}

function listText(pokemons, text) {
  return pokemons.filter(poke => poke.name.includes(text));
}

function listOrder(pokemons, Orde) {
  if (Orde === "A-Z") {
    return pokemons.sort((a, b) => (a.name > b.name?1:-1));
  }
  if (Orde === "Z-A") {
    return pokemons.sort((a, b) => (a.name > b.name?-1:1));
  }
  else {
    document.location.reload(true);
  }
}

function listOvo (pokemons, egg) {
  if (egg === "ovo") {
    return pokemons.filter(poke => !poke.egg.includes("Not in Eggs"));
  }
  if (egg === "2km") {
    return pokemons.filter(poke => poke.egg.includes("2 km"));
  }
  if (egg === "5km") {
    return pokemons.filter(poke => poke.egg.includes("5 km"));
  }
  if (egg === "10km") {
    return pokemons.filter(poke => poke.egg.includes("10 km"));
  }
  else {
    document.location.reload(true);
  }
}

function fstatic (data) {
  return ((data.length*100)/151).toFixed(2);
}

app = {
  listTypes,
  listText,
  listOrder,
  listOvo,
  fstatic
};