SELECT truck_id, name, email, hash from trucks
WHERE email = $1;