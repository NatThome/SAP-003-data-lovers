const pokemons = POKEMON.pokemon;
const filtro = document.getElementById("optionFilter");
const show = document.getElementById("show");
const order = document.getElementById("optionOrder");
const search = document.getElementById("search");
const ovo = document.getElementById("optionOvo");
const statistic = document.getElementById("calculo");

window.onload = () => {
  listPoke (pokemons);
  lTypes (pokemons);
};

function listPoke (data) {
  show.innerHTML="";
  data.map(pokemon => show.innerHTML += `
    <div id="card" class="card">
    <span class="id">N° ${pokemon.num}</span>
    <h2 class="name">${pokemon.name}</h2><br>
    <img src="${pokemon.img}"/><br>
    <span class="type">${pokemon.type}</span>
    </div>
`);
}

function lTypes (pokemons) {
  const pTypes = [];
  pokemons.map(pokemons => pokemons.type.map(type => {
    if (!pTypes.includes(type)) {
      pTypes.push(type);
    } else {
      return false;
    }
  }));
  filtro.innerHTML += "";
  filtro.innerHTML += "<option value=\"none\">-- Filtro -- </option>";
  filtro.innerHTML += pTypes.map(type => `<option value="${type}">${type}</option>`).join("");
}

filtro.addEventListener("change", (event) => {
  const filter = app.listTypes(pokemons, event.target.value);
  statistic.innerHTML = `Existem ${app.fstatic(app.listTypes(pokemons, filtro.value))} % Pokémons do tipo ${filtro.value}`;
  listPoke(filter);
});

search.addEventListener("keyup", (search) => {
  const text = app.listText(pokemons, search.target.value);
  listPoke(text);
});

order.addEventListener("change", (oOrder) => {
  const poke = pokemons.slice(0, 151);
  const ord = app.listOrder(poke, oOrder.target.value);
  ord.innerHTML = `Pokémons de ${order.value}`;
  listPoke(ord);
});

ovo.addEventListener("change", (e) => {
  const poke = pokemons.slice(0, 151);
  const filterEgg = app.listOvo(poke, e.target.value);
  statistic.innerHTML = `${app.fstatic(app.listOvo(poke, ovo.value))} % de Pokémons nascem no ovo de ${ovo.value}`;
  listPoke(filterEgg);
});
