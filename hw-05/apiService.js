class ApiService {
    static BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

    static getAllPokemons = async (start = 1, end = 10) => {
        const res = await fetch(
            `${this.BASE_URL}?offset=${start - 1}&limit=${end - start + 1}`,
        );
        const { results } = await res.json();
        return results;
    };

    static getPokemonByUrl = async url => {
        const res = await fetch(url);
        return await res.json();
    };
}

export default ApiService;
