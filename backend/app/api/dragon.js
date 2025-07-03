const { Router } = require('express');
const DragonTable = require('../dragon/table.js');

const router = Router();

router.get('/new', (req, res) => {
    const dragon = req.app.locals.generationEngine.generation.newDragon();
    DragonTable.storeDragon(dragon)
    .then((result) => {
        dragon.dragonId = result.dragonId;
        res.json({ dragon });
    })
    .catch((error) => {
        console.error("Error storing dragon:", error);
        res.status(500).json({ error: "Failed to store dragon" });
    });
});

module.exports = router;
