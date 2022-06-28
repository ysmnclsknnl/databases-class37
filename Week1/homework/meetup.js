const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "meetup",
});

const execute_queries = (arrayOfQueries) => {
  for (let i in arrayOfQueries) {
    connection.query(arrayOfQueries[i], (error, result) => {
      if (error) throw error;
      console.log("the result is ", result);
    });
  }
};

connection.connect();
const create_queries = [
  "create table Invitee (invitee_no int primary key auto_increment, invitee_name VARCHAR(100) unique, invited_by VARCHAR(100))",
  "create table Room (room_no int primary key auto_increment not null, room_name VARCHAR(100) unique not null, floor_number int not null)",
  "create table Meeting (meeting_no int primary key auto_increment not null, meeting_title VARCHAR(100) unique not null, starting_time DATETIME not null,ending_time DATETIME not null, room_no int, foreign key(room_no) references Room(room_no))",
];
const insert_queries = [
  "insert into Invitee(invitee_name,invited_by)values('Yasemin Caliskan','Gunay Caliskan'),('Harun Caliskan','Cristiano Ronaldo'),('John Doe','Fede Fusco'),('Natalie Ducas','Melih Kibar'),('Roberto Carlos','Lionel Messi')",
  "insert into Room(room_name,floor_number) values ('Orange',0),('Blue',0),('Green',1),('Black',1),('Moonlit',2),('Space',2)",
  "insert into Meeting(meeting_title,starting_time,ending_time,room_no) values ('Meet Up','2022-06-28 14:00:00','2022-06-28 15:00:00',1),('Briefing','2022-06-29 14:00:00','2022-06-29 15:00:00',2),('Evaluation','2022-06-29 16:00:00','2022-06-29 17:00:00',3),('Project','2022-06-29 16:00:00','2022-06-29 17:00:00',4),('Orientation','2022-06-30 16:00:00','2022-06-30 17:00:00',5)",
];

execute_queries(create_queries);
execute_queries(insert_queries);

connection.end();
