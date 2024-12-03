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
const router = require("./post.js")
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"));
app.use("/", router)

// app.get("/", (req, res) => {
//     res.send("server del mio blog")
// })

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});