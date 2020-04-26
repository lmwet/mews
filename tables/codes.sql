
DROP TABLE IF EXISTS auth_codes;

CREATE TABLE auth_codes (
    id SERIAL PRIMARY KEY,
    auth_code VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT * FROM auth_codes;