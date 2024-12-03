const express = require("express");
const router = express.Router();
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


router.get("/bacheca", (req, res) => {
    res.json({
        conteggio: lista.length,
        post: lista
    });
});

//show
router.get("/bacheca/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = lista.find((post) => id === post.id);
    res.json(post)
});

//create

router.post("/bacheca", (req, res) => {
    const nuovoPost = req.body;
    nuovoPost.id = lista.length + 1;
    lista.push(nuovoPost);
    res.json(lista);
})

//update per modificare un elemento

router.put("/bacheca/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const modificaPost = req.body;
    let indice = lista.indexOf(lista.find((post) => id === post.id));
    lista.splice(indice, 1, modificaPost);
    res.json(lista);
})

//delete

router.delete("/bacheca/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let indice = lista.indexOf(lista.find((post) => id === post.id));
    lista.splice(indice, 1);
    res.json(lista);
})

module.exports = router;