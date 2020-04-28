DROP TABLE IF EXISTS playlists;

CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255),
    username VARCHAR(255),
    href VARCHAR(255),
    name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
