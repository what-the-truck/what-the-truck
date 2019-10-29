INSERT INTO trucks (name, phone, img, food_type, description, hash, email)
VALUES (${name}, ${phone}, ${img}, ${food_type}, ${description}, ${hash}, ${email} )
RETURNING truck_id;