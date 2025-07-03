const TRAITS = require('../../data/traits.json');

const DEFAULT_PROPERTIES = {
    get birthdate() {
        return new Date();
    },
    nickname: 'unnamed',
    get randomTraits() {
        const traits = [];

        TRAITS.forEach(trait => {
            const traitType = trait.type;
            const traitValues = trait.values;

            const traitObject = {
                traitType: traitType,
                traitValue: traitValues[Math.floor(Math.random() * traitValues.length)]
            };

            traits.push(traitObject);
        });

        return traits;
    },
    generationId: undefined
};

class Dragon {
    constructor({ birthdate, nickname, traits, generationId } = {}) {
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
        this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
    };
};

module.exports = Dragon;
