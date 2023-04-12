const detailsIdPage = document.getElementById('idDetailsPokemon');
const limit = 8;
let offset = 0;

function viewDetailsIdPokemon(pokemon) {
    console.log(pokemon);
    return `
    <li class="pokemon ${pokemon.type}">
        <h4>#${pokemon.number}</h4>
        <h4>${pokemon.name}</h4>

        <img src="${pokemon.photo}" alt="${pokemon.name}">
      
        <h4>Pokemon do Tipo:</h4>
        <h4>${pokemon.types}</h4>
   </li>
  `;
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newDetail = pokemons.map(viewDetailsIdPokemon).join(" ");
        detailsIdPage.innerHTML += newDetail;
    });
}

loadPokemonItens(offset, limit);
