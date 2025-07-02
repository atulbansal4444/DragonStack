const Generation = require('./index.js');

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
        this.generation = new Generation();
        console.log("New dragon generation started. It will expire at " + this.generation.expiration);

        this.timer = setTimeout(
            () => this.buildNewGeneration(),
            this.generation.expiration.getTime() - Date.now()
        );
    }
}

module.exports = GenerationEngine;
