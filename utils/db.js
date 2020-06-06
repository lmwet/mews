const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres:@localhost@localhost:5432/mews"
);

exports.addPlaylist = (userId, url, playlistTitle, userName) => {
    const q = `INSERT 
    into playlists (user_id, href, name, username)
    VALUES ($1, $2, $3, $4)
    RETURNING *`;
    console.log(q);
    const params = [userId, url, playlistTitle, userName];
    return db.query(q, params);
};

exports.getPlaylists = () => {
    const q = `SELECT * 
    FROM playlists 
    ORDER BY created_at DESC`;
    console.log(q);
    return db.query(q);
};

exports.getArtists = () => {
    const q = `SELECT * 
    FROM artists 
    ORDER BY created_at DESC`;
    console.log(q);
    return db.query(q);
};

exports.getLineup = () => {
    const q = `SELECT href 
    FROM lineup 
    ORDER BY created_at DESC
    LIMIT 20`;
    console.log(q);
    return db.query(q);
};
