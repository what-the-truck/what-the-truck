INSERT into events (name,address,latitude,longitude,date,time)
VALUES($1,$2,$3,$4,$5,$6)
returning *;
