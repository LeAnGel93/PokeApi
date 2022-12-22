let pokemons = [];
let divPokedex$$ = document.querySelector('#pokedex')
let divSearch$$ = document.querySelector(".search");
const getPokemons = async (name) => {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const responseJson = await response.json();
    console.log(responseJson);
    pokemons = [...pokemons, responseJson];
 } 
 catch (err) { 
    console.log(err)
 } 
}

const mapPokemons = (pokemons) => {
    return pokemons.map((pokemon) => ({
      id: pokemon._id,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      type: pokemon.types[0].type.name,
    }));
  };

const drawPokemons = (pokemons) =>{ 
    divPokedex$$.innerHTML = "";
    for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i]; 

    let pokemonCard$$ = document.createElement('div');
    pokemonCard$$.setAttribute('class', 'pokemonCard');
    
    let pokemonName = document.createElement("h4");
    pokemonName.textContent= `#${[i+1]} ${pokemon.name}`

    let pokemonImage = document.createElement("img");
    pokemonImage.setAttribute("src", pokemon.image);

    let pokemonType = document.createElement('p');
    pokemonType.textContent = `${pokemon.type}`

    divPokedex$$.appendChild(pokemonCard$$);
    pokemonCard$$.appendChild(pokemonName);
    pokemonCard$$.appendChild(pokemonImage);
    pokemonCard$$.appendChild(pokemonType);

     }
    }

    const drawInputSearch = () => {
        let input$$ = document.createElement("input");
        divSearch$$.appendChild(input$$);
        input$$.addEventListener("input", () =>
          searchPokemons(input$$.value, pokemons)
        );
      };
      
      const searchPokemons = (filtro, pokemons) => {
        let filteredPokemons = pokemons.filter(
          (pokemon) =>
            pokemon.name.toLowerCase().includes(filtro.toLowerCase()) 
           // ||  pokemon.origin.toLowerCase().includes(filtro.toLowerCase()) ||
           // pokemon.role.toLowerCase().includes(filtro.toLowerCase())
        );
        drawPokemons(filteredPokemons);
      };

    const init = async () => {
        for (let i = 1; i < 152; i++) {
            await getPokemons([i]);
        }
         pokemons = [...mapPokemons(pokemons)];

         drawPokemons(pokemons);

         drawInputSearch();

    };

  init();






    //         for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon0 = pokemons[i]; 
    //     const myDiv$$ = document.querySelector('#pokedex');
    //     let divCard$$ = document.createElement('div');
    //     divCard$$.setAttribute('class', 'pokemonCard');
    //     //formattedNumber++
    //     divCard$$.innerHTML = 
    //     `<h4>#${[i+1]} ${pokemon0.name}</h4>
    //     <img src="${pokemon0.sprites.front_default}"/>`;
    //     myDiv$$.appendChild(divCard$$);
        
    //   }

    // var myNumber = 0;
    // var formattedNumber = ("0" + myNumber).slice(-3);