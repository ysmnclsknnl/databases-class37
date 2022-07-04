const createAuthorsTable = `CREATE TABLE IF NOT EXISTS authors (author_no INT PRIMARY KEY, author_name VARCHAR(50) NOT NULL, university VARCHAR(100) NOT NULL , date_of_birth DATETIME, h_index INT NOT NULL, gender ENUM('f','m') NOT NULL)`;
const addMentor = `ALTER TABLE authors ADD column mentor int , ADD CONSTRAINT FOREIGN KEY (mentor) REFERENCES authors(author_no)`;
const addAuthor = `INSERT INTO authors(author_no,author_name,university,date_of_birth,h_index,gender) VALUES (1,'Nesrin Ozdener','Marmara University','1966-06-08',10,'f'),(2,'Yasemin Caliskan','Marmara University','1985-08-09',1,'f'),(3,'Yavuz Akpinar','Bogazici University','1965-05-10',11,'m'),(4,'Huseyin Simsek','Bogazici University','1982-10-12',1,'m'),(5,'Ronald C Kessler','Harvard Medical School','1947-04-26',318,'m'),(6,'JoAnn E. Manson','Harvard Medical School','1953-08-17',302,'f'),(7,'Olga Demler','Harvard Medical School','1965-08-17',3,'f'),(8,'Robert Langer','MIT','1948-08-29',297,'m'),(9,'John Doe','MIT','1948-08-29',190,'m'),(10,'Alice Smith','MIT','1948-08-29',10,'f'),(11,'Ayten Akifova','Ruse University','1980-08-29',1,'f'),(12,'Dimitri Asenov','Ruse University','1960-08-21',10,'m'),(13,'Amitav Sanyal','Oxford University','1978-05-21',10,'m'),(14,'Lisa White','Oxford University','1998-01-21',1,'f'),(15,'Furkan Ozturk','Harvard Medical School','1998-04-05',1,'m')`;
const updateMentor = [
  "UPDATE authors SET mentor = 1 WHERE (author_no = 2)",
  "UPDATE authors SET mentor = 3 WHERE (author_no = 4)",
  "UPDATE authors SET mentor = 5 WHERE (author_no = 7)",
  "UPDATE authors SET mentor = 8 WHERE (author_no = 10)",
  "UPDATE authors SET mentor = 12 WHERE (author_no = 11)",
  "UPDATE authors SET mentor = 13 WHERE (author_no = 14)",
  "UPDATE authors SET mentor = 6 WHERE (author_no = 15)",
];
