// ### Esercizio
// Usando l'array dei post con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessarie per l'entità post.
//     All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
// Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
// Ad esempio:
// Se viene chiamata / posts col verbo GET ci aspettiamo “Lista dei post”;
// Se viene chiamato / posts / 1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”
// e via dicendo…
// Registrare il router dentro app.js con il prefisso / posts.
// ### Bonus
//     - Provare a restituire la lista dei post dalla rotta index, in formato json
//         - Provare a restituire un singolo post dalla rotta show, sempre in formato json
const express = require("express")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("server del mio blog")
})

app.use(express.static("public"));


const lista = [
    {
        id: 1,
        img: "ciambellone.jpeg",
        titolo: "ciambellone",
        contenuto: "ciambella",
        tags: ["ciambellone", "ciambella"]
    },
    {
        id: 2,
        img: "cracker_barbabietola.jpeg",
        titolo: "cracker barbabietola",
        contenuto: "crecs",
        tags: ["cracker", "crecs"]
    },
    {
        id: 3,
        img: "pane_fritto.jpeg",
        titolo: "pane fritto dolce",
        contenuto: "pane ",
        tags: ["pane", "fritto"]
    },
    {
        id: 4,
        img: "pasta_barbabietola.jpeg",
        titolo: "pasta barbabietola",
        contenuto: "barbabietola",
        tags: ["pasta", "barbabietola"]
    },
    {
        id: 5,
        img: "torta_paesana.jpeg",
        titolo: "torta paesana",
        contenuto: "torta",
        tags: ["torta", "paesana"]
    }
];
app.get("/bacheca", (req, res) => {
    res.json({
        conteggio: lista.length,
        post: lista
    });
});


app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});