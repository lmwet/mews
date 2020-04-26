const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres:@localhost@localhost:5432/forum"
);

exports.addCode = (code) => {
    const q = `INSERT 
    into auth_codes (auth_codes.auth_code)
    VALUES ($1)
    RETURNING *`;
    console.log(q);
    return db.query(q);
};

exports.getCode = () => {
    const q = `SELECT code
    FROM codes
    LIMIT 1
    ORDER BY DESC`;
    console.log(q);
    return db.query(q);
};
