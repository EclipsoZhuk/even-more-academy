function pokemonsService() {
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

    async function getPokemonsFull() {
        let pokemonsFull = [];
        for (let i = 1; i <= 10; i++) {
            let res = await fetch(`${BASE_URL}/${i}`);
            if (res.status === 200) {
                let pokemon = await res.json();
                pokemonsFull.push({
                    id: pokemon.id,
                    name: pokemon.name,
                    height: pokemon.height,
                    weight: pokemon.weight,
                });
            } else {
                throw new Error(res.status);
            }
        }

        setLocalStorage(pokemonsFull);
        return pokemonsFull;
    }

    function setLocalStorage(pokemons) {
        localStorage.setItem('pokemons', JSON.stringify(pokemons));
    }

    function getLocalStorage() {
        return JSON.parse(localStorage.getItem('pokemons'));
    }

    function sortPokemonsByHeight() {
        const pokemons = getLocalStorage();
        if (pokemons) {
            pokemons.sort((a, b) => a.height - b.height);
            sessionStorage.setItem(
                'pokemonSortedByHeight',
                JSON.stringify(pokemons),
            );
        }
        return pokemons;
    }

    function sortPokemonsByWeight() {
        const pokemons = getLocalStorage();
        if (pokemons) {
            pokemons.sort((a, b) => a.weight - b.weight);
            sessionStorage.setItem(
                'pokemonSortedByWeight',
                JSON.stringify(pokemons),
            );
        }
        return pokemons;
    }

    async function responsePokemon() {
        await getPokemonsFull().then(res => console.log('Pokemons: ', res));
        console.log('Запустите Live Server index.html папка hw-04');
        console.log('Pokemons sorted by height: ', sortPokemonsByHeight());
        console.log('Pokemons sorted by weight: ', sortPokemonsByWeight());
    }

    responsePokemon();
}

pokemonsService();
