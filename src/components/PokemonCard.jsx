const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

function PokemonCard() {
    const pokemon = pokemonList[0]; // selecteur pokrmon

    return (
        <figure style={styles.card}>
            <img
                src={pokemon.imgSrc ? pokemon.imgSrc : ''}
                alt={pokemon.name}
                style={styles.image}
            />
            {pokemon.imgSrc ? null : <p>???</p>}
            <figcaption style={styles.caption}>
                <h2 style={styles.title}>{pokemon.name}</h2>
                <p style={styles.type}>Type: plante</p>
            </figcaption>
        </figure>
    )
}


const styles = {
    card: {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
        borderRadius: "5px",
        width: "200px",
        padding: "10px",
        textAlign: "center",
        backgroundColor: "#ffffff",
    },
    image: {
        width: "100%",
        height: "auto",
    },
    caption: {
        padding: "10px",
        paddingTop: "5px",
    },
    title: {
        fontSize: "20px",
        margin: "10px 0",
    },
    type: {
        color: "#666",
        fontSize: "16px",
    }
};

export default PokemonCard;
