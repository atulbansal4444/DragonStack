const Generation = require('./index.js');
const GenerationTable = require('./table.js');

class GenerationEngine {
    constructor() {
        this.generation = null;
        this.timer = null;
    }

    start() {
        this.buildNewGeneration();
    }

    stop() {
        clearTimeout(this.timer);
    }

    buildNewGeneration() {
        const generation = new Generation();

        GenerationTable.storeGeneration(generation)
        .then((result) => {
            this.generation = generation;
            this.generation.generationId = result.generationId;

            console.log("New dragon generation started. It will expire at " + this.generation.expiration);
        }).catch((error) => {
            console.error("Error storing generation:", error);
        });

        this.timer = setTimeout(
            () => this.buildNewGeneration(),
            generation.expiration.getTime() - Date.now()
        );
    }
}

module.exports = GenerationEngine;
