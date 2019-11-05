INSERT INTO trucks (name, phone, img, food_type, description, hash, email, website)
VALUES (${name}, ${phone}, ${img}, ${food_type}, ${description}, ${hash}, ${email}, ${website} )
RETURNING truck_id;