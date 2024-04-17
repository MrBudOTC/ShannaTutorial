let response = axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
response.then((response) =>{
    console.log(response);
    displayPokemon(response);
})
.catch((error)=>{
    console.log(error);
})


function displayPokemon(response){
    let parentdiv = document.getElementById('mainDiv');
    parentdiv.innerHTML = "";

    let pokemon = document.createElement('h1');
    pokemon.innerHTML = response.data.name;
    parentdiv.appendChild(pokemon);
}