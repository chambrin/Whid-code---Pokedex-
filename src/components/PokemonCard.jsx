function PokemonCard() {
    return (
        <figure style={styles.card}>
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                alt="Bulbasaur"
                style={styles.image}
            />
            <figcaption style={styles.caption}>
                <h1 style={styles.title}>Bulbasaur</h1>
                <p style={styles.type}>Grass, Poison</p>
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
