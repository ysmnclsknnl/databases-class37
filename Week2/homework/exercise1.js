const exercise1_queries = {
  createUniversityTable: `CREATE TABLE university(id int PRIMARY KEY Auto_Increment,university_name VARCHAR(100) UNIQUE)`,
  addUniversity: `INSERT INTO university (university_name) VALUES("Marmara University"),("Bogazici University"),
  ("Harvard Medical School"),("MIT"),("Ruse University"),("Oxford University")`,
  createAuthorsTable: `CREATE TABLE IF NOT EXISTS authors (author_no INT PRIMARY KEY AUTO_INCREMENT, author_name VARCHAR(50) NOT NULL, university_id int NOT NULL , date_of_birth DATETIME, h_index INT NOT NULL, gender ENUM('f','m') NOT NULL, FOREIGN KEY(university_id) REFERENCES university(id))`,
  addMentor: `ALTER TABLE authors ADD column mentor int , ADD CONSTRAINT FOREIGN KEY (mentor) REFERENCES authors(author_no)`,
  addAuthor: `INSERT INTO authors(author_name,university_id,date_of_birth,h_index,gender) VALUES 
  ('Nesrin Ozdener',1,'1966-06-08',10,'f'),
  ('Yasemin Caliskan',1,'1985-08-09',1,'f'),
  ('Yavuz Akpinar',2,'1965-05-10',11,'m'),
  ('Huseyin Simsek',2,'1982-10-12',1,'m'),
  ('Ronald C Kessler',3,'1947-04-26',318,'m'),
  ('JoAnn E. Manson',3,'1953-08-17',302,'f'),
  ('Olga Demler',3,'1965-08-17',3,'f'),
  ('Robert Langer',4,'1948-08-29',297,'m'),
  ('John Doe',4,'1948-08-29',190,'m'),
  ('Alice Smith',4,'1948-08-29',10,'f'),
  ('Ayten Akifova',5,'1980-08-29',1,'f'),
  ('Dimitri Asenov',5,'1960-08-21',4,'m'),
  ('Amitav Sanyal',6,'1978-05-21',40,'m'),
  ('Lisa White',6,'1998-01-21',3,'f'),
  ('Furkan Ozturk',3,'1998-04-05',1,'m')`,
  updateMentor: [
    "UPDATE authors SET mentor = 1 WHERE (author_no = 2)",
    "UPDATE authors SET mentor = 3 WHERE (author_no = 4)",
    "UPDATE authors SET mentor = 5 WHERE (author_no = 7)",
    "UPDATE authors SET mentor = 8 WHERE (author_no = 10)",
    "UPDATE authors SET mentor = 12 WHERE (author_no = 11)",
    "UPDATE authors SET mentor = 13 WHERE (author_no = 14)",
    "UPDATE authors SET mentor = 6 WHERE (author_no = 15)",
  ],
};

export default exercise1_queries;
