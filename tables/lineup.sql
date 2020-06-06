DROP TABLE IF EXISTS lineup;

CREATE TABLE lineup (
    id SERIAL PRIMARY KEY,
    href VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO lineup (href) VALUES ('https://open.spotify.com/track/462NxL8bZEDNKQV8fCQ1Ks?si=QxAbCYpEQzq8iX2S9EkdBA'), 
('https://open.spotify.com/track/5tl1kHLoMidOU4UDeCiMLd?si=KMv6I58aSfa9MGFNy2BpTA'), 
('https://open.spotify.com/track/7zslfrv0i0cjcADb95JFXr?si=uUcv8a23TCGA6hpjojaKRg'), 
('https://open.spotify.com/track/3JkE89k0NkfZqxWKsEvFB0?si=E-GQKjfRQPKwhMqfWQsSeg'), 
('https://open.spotify.com/track/26RzWUWqjWxks1PXzIzHhl?si=DM71kpMMSkac08A0oHMkNw'),
('https://open.spotify.com/track/6Ja4SMyjPU8FjG3aS3EEuy'),
('https://open.spotify.com/track/52YKAnWqkyNTuNyWSAZ2I0'),
('https://open.spotify.com/track/6mhg2Is5xEdtp4NO9UUDck'),
('https://open.spotify.com/track/1o6skOPEQmkHaX1DI9c6xr'),
('https://open.spotify.com/track/1mMqYpuFrAWAVB62L9Fnmr'),
('https://open.spotify.com/track/59997R2RsMZBXJmXh9d13n'),
('https://open.spotify.com/track/4JzITZvQgaJjq4EfVadOsz'),
('https://open.spotify.com/track/1S1JbuzIGYUjRumzudRtDW'),
('https://open.spotify.com/track/7bvPBwnLQQqusHhu6xvAhI'),
('https://open.spotify.com/track/2fv47VVvysXZPpT7xsdg7b?si=zgZzNZF5QU2sn8Fc4GwdSA'),
('https://open.spotify.com/track/4sEtZBwQCJXEt1GhJ2TEUF?si=lxN4H_TNQ6q5ix3Rw_WkvA'),
('https://open.spotify.com/track/1Iod4fjYd6TTXw9DI6nHpB?si=8R5zBr0BSYKbwpmb-bSo1w'),
('https://open.spotify.com/track/6Y9ajxGefBUK9pMbT0C8gv?si=Wfk9t0g3TkWMLli1g4OZqA'),
('https://open.spotify.com/track/4c3XTsQasVeiXj31Xerb2Q?si=_hbmjqQeRS2yYwBYX7toSQ'),
('https://open.spotify.com/track/79KRAR2VNL8T4YAuavSBb6'),
('https://open.spotify.com/track/0WTxHl7j5PmP4LbKxXBIiP'),
('https://open.spotify.com/track/6bCdDE85y0J4VpN4RMb4zF');
SELECT * FROM lineup;

















