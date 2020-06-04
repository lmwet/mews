DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO artists (path) VALUES ('black-pride#simbo'), ('black-pride#muthoni'), ('black-pride#hawa'), ('black-pride#akua'), ('black-pride#kanyi'), ('black-pride#bia'), ('black-pride#angelique'), ('black-pride#jamila'), ('black-pride#sampa'), ('black-pride#lous'), ('black-pride#lizzo'),('devil-dykes#trumpet'),('devil-dykes#koffee'), ('devil-dykes#ipek'), ('devil-dykes#bia'), ('devil-dykes#internet'), ('devil-dykes#beatrice'), ('devil-dykes#chika'), ('devil-dykes#trumpet'), ('devil-dykes#dory'), ('devil-dykes#kumbia'), ('devil-dykes#mansfield'), ('devil-dykes#muthoni'), ('devil-dykes#chocolate'), ('kahrabiat#aya'),('kahrabiat#mariam'), ('kahrabiat#emel'), ('kahrabiat#maii'), ('kahrabiat#yasmine'), ('kahrabiat#nawel'), ('kahrabiat#badiaa'), ('kahrabiat#dina'), ('femi-hip-hop#soulatana'), ('femi-hip-hop#sara'), ('femi-hip-hop#ebow'), ('femi-hip-hop#yugen'), ('femi-hip-hop#kanyi'), ('femi-hip-hop#rap'), ('femi-hip-hop#shadia'), ('femi-hip-hop#tic'), ('femi-hip-hop#malikah'), ('femi-hip-hop#mare'), ('femi-hip-hop#ntsiki'), ('femi-hip-hop#casey'), ('femi-hip-hop#felukah'), ('femi-hip-hop#quay'), ('femi-hip-hop#keny'),( 'femi-hip-hop#kween'), ('femi-hip-hop#shay'), ('legends#chavela'), ('legends#umkalthoum'), ('legends#zemfira'), ('legends#colette'), ('legends#joan'), ('legends#cassia'), ('queer#linn'), ('queer#planning'),( 'queer#mykki'), ('queer#saye'), ('queer#rae'), ('wilad#nakhane'), ('wilad#leila'), ('wilad#mujuice'), ('wilad#kiddy'), ('xodade#rose'), ('xodade#lena'), ('xodade#phew'), ('xodade#gaelynn'), ('xodade#yugen'), ('xodade#emel'), ('xodade#emel'), ('xodade#tierra'), ('xodade#jun'), ('xodade#teyana'),('xodade#ikue'),('xodade#choral'),('xodade#dina'), ('xodade#takako'),('xodade#lido'),('xodade#zakiya'),('xodade#luzmila'),('xodade#masu');
SELECT * FROM artists;
