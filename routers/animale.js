const express = require("express");
const router = express.Router();
const ar = ["animale", "michele"];

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = ar[id];
    res.json(post)
});

module.exports = router;