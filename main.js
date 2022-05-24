    // https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png
   function fetchPokemon(){

   const urlPokemon = id => `https://pokeapi.co/api/v2/pokemon/${id}`;
   const arrayPokemons = [];

   for( let idPokemons = 1; idPokemons<=150;idPokemons++){
     arrayPokemons.push(fetch(urlPokemon(idPokemons))
      .then(response => response.json()))
   }
  
   Promise.all(arrayPokemons)
   .then(pokemons =>{

   
       const liPokemons = pokemons.reduce((acumulator,pokemon)=>{
       const typesInfo = pokemon.types.map(tiposinfo => tiposinfo.type.name ).join(' | ');

           acumulator += `<li class="pokemon">
                             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="imagem pokemon" class="pokemonImg">
                             <div class="bgPokemon ${typesInfo}"></div>
                             <div class="pokemonName">${pokemon.id}. ${pokemon.name}</div>
                             <div class="pokemonType ${typesInfo}">${typesInfo}</div>
                                 <div class="img-content"><img src="img/pokeball-png.png" alt"imagem pokedex" class="img-click"></div>
                           </li>`;
   
                     
                           return acumulator
       },'')//reduce
       const ulPokemons = document.querySelector('.pokemonsList');
       ulPokemons.innerHTML = liPokemons;
       
     })//then
   };
 
   fetchPokemon()








