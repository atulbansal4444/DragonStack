const pool = require('../../databasePool');

class DragonTable {
    static storeDragon(dragon) {
        const { generationId, nickname, birthdate } = dragon;

        console.log('Storing dragon:', {
            generationId,
            nickname,
            birthdate
        });

        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO dragon (birthdate, nickname, "generationId") VALUES ($1, $2, $3) RETURNING id',
                [birthdate, nickname, generationId],
                (err, res) => {
                    if (err) {
                        console.error('Error storing dragon:', err);
                        return reject(err);
                    }
                    const dragonId = res.rows[0].id;
                    resolve({ dragonId });
                }
            );
        });
    }
};

module.exports = DragonTable;
