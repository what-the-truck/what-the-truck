INSERT INTO users (hash, email)
VALUES ( ${hash}, ${email} )
RETURNING user_id;