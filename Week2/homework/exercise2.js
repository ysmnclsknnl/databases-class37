const createTableResearchPapers = `CREATE TABLE IF NOT EXISTS research_Papers (paper_id INT PRIMARY KEY, paper_title VARCHAR(200) NOT NULL UNIQUE, conference VARCHAR(150), publish_date DATETIME)`;
const createTableAuthorResearchPapers = `CREATE TABLE IF NOT EXISTS author_research_Papers (author_no int , paper_id int , FOREIGN KEY (author_no) REFERENCES authors(author_no),FOREIGN KEY(paper_id) REFERENCES research_Papers(paper_id),PRIMARY KEY(author_no,paper_id))`;
const insertResearchPaper = `INSERT INTO research_papers (paper_id,paper_title,conference,publish_date) VALUES (1,"Effects of video podcast technology on peer learning andproject quality ",'international symposium on educational sciences ','2010-11-20'),
(2,"Gamification in learning ",'international Symposium On Educational Sciences ','2011-11-20'),
(3,"Human Computer Interaction",'international Symposium On Educational Technology ','2012-11-24'),
(4,"Lifetime prevalence and age-of-onset distributions of DSM-IV disorders in the National Comorbidity Survey Replication",'International Symposium On Medicine ','2005-10-15'),
(5,"Prevalence, severity, and comorbidity of 12-month DSM-IV disorders in the National Comorbidity Survey Replication",'International Symposium On Medicine ','2005-01-10'),
(6,"C-reactive protein, interleukin 6, and risk of developing type 2 diabetes mellitus",'National Symposium On Medicine','2012-11-24'),
(7,"Diet, lifestyle, and the risk of type 2 diabetes mellitus in women",'National Symposium On Medicine','2017-11-24'),
(8,"Body weight and mortality among men",'National Symposium On Medicine','2004-05-18'),
(9,"The prevalence and correlates of eating disorders in the National Comorbidity Survey Replication",'National Symposium On Medicine','2007-07-12'),
(10,"Screening for serious mental illness in the general population",'National Symposium On Medicine','2003-02-05'),
(11,"Nanocarriers",'National Symposium On Medicine','2020-11-23'),
(12,"Nanocarriers as an emerging platform for cancer therapy",'National Symposium On Medicine','2004-02-05'),
(13,"Knocking down barriers: advances in siRNA delivery",'International Symposium On Biomedical','2004-02-05'),
(14,"Math Assesment Applications In Primary Schools ",'bulgarian National Symposium On Education','2004-02-05'),
(15,"Diels–Alder cycloaddition‐Cycloreversion: a powerful combo in materials design ",'British Symposium On Chemistry','2010-02-08'),
(16,"Discrete macromolecular constructs via the Diels–Alder “Click” reaction ",'British Symposium On Chemistry','2012-01-09'),
(17,"Synthesis and functionalization of thiol-reactive biodegradable polymers",' 12th International Symposium On Chemistry','2012-01-09'),
(18,"Photothermally triggered on-demand insulin release from reduced graphene oxide modified hydrogels",' 12th International Symposium On Chemistry','2017-11-09'),
(19,"Misconceptions about Fractions in Elementary School",'International Symposium On Math Education ','2020-07-24'),
(20,"Usability in Coursewares",'International Symposium On Educational Technology ','2009-07-12'),
(21,"Examining Using Google Drive in Secondary School ICT lessons: A case study in K-12 setting",'International Symposium On Educational Technology ','2010-07-24'),
(22,"Heart Diseases in Old Women",'International Symposium On Medicine ','2010-07-24'),
(23,"Annual deaths attributable to obesity in the United States",'National Symposium On Medicine ','1998-07-24'),
(24,"Obesity and Diet",'National Symposium On Medicine ','2018-02-12'),
(25,"Examining the Effect of Covid on Heart Disease",'International Symposium On Medicine ','2020-12-24'),
(26,"Stereoselective Diels− Alder reactions of chiral anthracenes",'International Symposium On Chemistry','2000-12-18'),
(27,"Segment Block Dendrimers via Diels− Alder Cycloaddition",'British Symposium On Chemistry ','2008-03-03'),
(28,"Body weight and mortality among women",'National Symposium on Obesity','1995-08-03'),
(29,"Obesity",'National Symposium On Medicine','2010-03-03'),
(30,"Using Agents in Courseware",'international Symposium On Educational Technology ','2015-11-24')
`;

const insertAuthorPaperTable = `INSERT INTO author_research_Papers(author_no,paper_id) VALUES(1,1),(1,2),(1,21),(2,1),(3,3),(3,19),(3,20),(4,3),(4,19),(5,5),(5,6),(5,7),(5,10),(5,23),(6,8),(6,9),(6,22),(6,29),(7,5),(7,6),(8,11),(8,12),(8,13),(8,28),(9,15),(9,16),(9,26),(10,11),(10,28),(11,14),(12,14),(13,17),(13,18),(13,27),(14,17),(14,18),(15,8),(15,29)`;
