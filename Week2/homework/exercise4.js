const exercise4_queries = {
  papersAndNumberOfTheirAuthors: `SELECT RP.paper_id, RP.paper_title, COUNT(ARP.author_no) AS 'number of authors' FROM research_papers AS RP INNER JOIN author_research_papers AS ARP ON RP.paper_id=ARP.paper_id GROUP BY RP.paper_id `,
  AmOfPubOfFemaleAuthors: `SELECT COUNT(ARP.paper_id) AS 'Amount Of Research Papers Published By Female Authors' FROM author_research_papers  AS ARP INNER JOIN authors ON ARP.author_no=authors.author_no GROUP BY authors.gender HAVING authors.gender='f' `,
  avgOfHIndexPerUniversity: `SELECT AVG(Au.h_index),U.university_name FROM authors AS Au INNER JOIN university AS U ON Au.university_id=U.id  GROUP BY U.university_name ORDER BY AVG(Au.h_index) DESC`,
  sumOfPubsofAusPerUni: `SELECT COUNT(ARP.paper_id) AS 'Number Of Papers Published', Au.author_name,U.university_name FROM  authors AS Au INNER JOIN author_research_Papers AS ARP ON ARP.author_no=Au.author_no INNER JOIN university AS U ON Au.university_id=U.id GROUP BY Au.author_name,U.university_name ORDER BY U.university_name`,
  minMaxHIndexPerUni: `SELECT MIN(Au.h_index), MAX(Au.h_index), U.university_name FROM authors AS Au INNER JOIN university AS U ON Au.university_id=U.id GROUP BY U.id ORDER BY U.university_name`,
};

export default exercise4_queries;
