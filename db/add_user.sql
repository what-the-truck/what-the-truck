INSERT INTO users (hash, email, phone)
VALUES ( ${hash}, ${email}, ${phone} )
RETURNING user_id;