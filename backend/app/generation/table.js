const pool = require('../../databasePool');

class GenerationTable {
    static storeGeneration(generation) {
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO generation (expiration) VALUES ($1) RETURNING id',
                [generation.expiration],
                (err, res) => {
                    if (err) {
                        console.error('Error storing generation:', err);
                        return reject(err);
                    }
                    const generationId = res.rows[0].id;
                    resolve({ generationId });
                }
            );
        });
    }
};

module.exports = GenerationTable;
