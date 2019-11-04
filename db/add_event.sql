INSERT into events (name,address,latitude,longitude,date)
VALUES($1,$2,$3,$4,$5)
returning *;
