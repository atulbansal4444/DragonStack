const Dragon = require('../dragon/index.js');
const { REFRESH_RATE, SECONDS} = require('../config.js');

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
    constructor() {
        this.expiration = this.calculateExpiration();
        this.generationId = undefined;
    };

    calculateExpiration() {
        const expirationPeriod = Math.floor(Math.random() * (refreshRate/2));

        const msUntilExpiration = Math.random() < 0.5 ? refreshRate - expirationPeriod : refreshRate + expirationPeriod;

        return new Date(Date.now() + msUntilExpiration);
    }

    newDragon() {
        if (Date.now() > this.expiration) {
            throw new Error("Dragon generation expired on" + this.expiration);
        }
        return new Dragon({ generationId: this.generationId});
    }
};

module.exports = Generation;
