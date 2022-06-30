const sql_queries = [
  "DROP DATABASE IF EXISTS meetup",
  "CREATE DATABASE meetup",
  "USE meetup",
  "CREATE TABLE Invitee (invitee_no INT PRIMARY KEY AUTO_INCREMENT, invitee_name VARCHAR(100) UNIQUE NOT NULL, invited_by VARCHAR(100))",
  "CREATE TABLE Room (room_no INT PRIMARY KEY AUTO_INCREMENT NOT NULL, room_name VARCHAR(100) UNIQUE NOT NULL, floor_number INT NOT NULL)",
  "CREATE TABLE Meeting (meeting_no INT PRIMARY KEY AUTO_INCREMENT NOT NULL, meeting_title VARCHAR(100) UNIQUE NOT NULL, starting_time DATETIME NOT NULL,ending_time DATETIME NOT NULL, room_no INT, FOREIGN KEY(room_no) REFERENCES Room(room_no))",
  "INSERT INTO Invitee(invitee_name,invited_by)VALUES('Yasemin Caliskan','Gunay Caliskan'),('Harun Caliskan','Cristiano Ronaldo'),('John Doe','Fede Fusco'),('Natalie Ducas','Melih Kibar'),('Roberto Carlos','Lionel Messi')",
  "INSERT INTO Room(room_name,floor_number) VALUES ('Orange',0),('Blue',0),('Green',1),('Black',1),('Moonlit',2),('Space',2)",
  "INSERT INTO Meeting(meeting_title,starting_time,ending_time,room_no) VALUES ('Meet Up','2022-06-28 14:00:00','2022-06-28 15:00:00',1),('Briefing','2022-06-29 14:00:00','2022-06-29 15:00:00',2),('Evaluation','2022-06-29 16:00:00','2022-06-29 17:00:00',3),('Project','2022-06-29 16:00:00','2022-06-29 17:00:00',4),('Orientation','2022-06-30 16:00:00','2022-06-30 17:00:00',5)",
];
module.exports = sql_queries;
