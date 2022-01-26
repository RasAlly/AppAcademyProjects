PRAGMA foreign_keys = ON;

CREATE TABLE users(
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions(
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  associated_author INTEGER NOT NULL,
  
  FOREIGN KEY(associated_author) REFERENCES users(id)
);

CREATE TABLE question_follows(
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_reply INTEGER NOT NULL,
  user_reply INTEGER NOT NULL,
  reply_body TEXT NOT NULL,
  parent_id INTEGER,
  
  FOREIGN KEY (user_reply) REFERENCES users(id),
  FOREIGN KEY (question_reply) REFERENCES questions(id),
  FOREIGN KEY (parent_id) REFERENCES replies(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  user_question INTEGER NOT NULL,
  user_like BOOLEAN,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (user_question) REFERENCES questions(id)
);


INSERT INTO
  users (fname, lname)
VALUES
  ('John', 'Doe'),
  ('Sammy', 'Johnson');

INSERT INTO
  questions (title, body, associated_author)
VALUES
  ('Help for problem', 'I''m having trouble with Javascript :(', (SELECT id FROM users WHERE fname = 'John') )
  ('Need help signing up', 'Application page not running', (SELECT id FROM users WHERE fname = 'Sammy') );

INSERT INTO
  question_follows (user_id, question_id)
VALUES
  ( (SELECT id FROM users WHERE fname = 'John'), (SELECT id FROM questions WHERE title = 'Help for problem' ) )
  ( (SELECT id FROM users WHERE fname = 'Sammy'), (SELECT id FROM questions WHERE title = 'Need help signing up' ) );

INSERT INTO
  replies (question_reply, user_reply, reply_body, parent_id)
VALUES
  ( (SELECT id FROM questions WHERE title = 'Help for problem' ), (SELECT id FROM users WHERE fname = 'Sammy'), 'Make sure to use semicolon' ),
  ( (SELECT id FROM questions WHERE title = 'Need help signing up' ), (SELECT id FROM users WHERE fname = 'John'), 'Please use the link provided in your email' ),
  ( (SELECT id FROM questions WHERE title = 'Need help signing up' ), (SELECT id FROM users WHERE fname = 'Sammy'), 'There''s no link', (SELECT id FROM replies WHERE reply_body = 'Please use the link provided in your email' ) );
