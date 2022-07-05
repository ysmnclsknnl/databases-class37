const exercise4_queries = {
  papersAndNumberOfTheirAuthors: `SELECT RP.paper_id, RP.paper_title, COUNT(ARP.author_no) AS 'number of authors' FROM research_papers AS RP INNER JOIN author_research_papers AS ARP ON RP.paper_id=ARP.paper_id GROUP BY RP.paper_id `,
  AmOfPubOfFemaleAuthors: `SELECT COUNT(ARP.paper_id) AS 'Amount Of Research Papers Published By Female Authors' FROM author_research_papers  AS ARP INNER JOIN authors ON ARP.author_no=authors.author_no WHERE authors.gender='f' GROUP BY authors.gender`,
  avgOfHIndexPerUniversity: `SELECT AVG(h_index),university FROM authors GROUP BY university ORDER BY AVG(h_index) DESC`,
  sumOfPubsofAusPerUni: `SELECT COUNT(ARP.paper_id) AS 'Number Of Papers Published', Au.author_name,Au.university FROM author_research_Papers AS ARP INNER JOIN authors AS Au ON ARP.author_no=Au.author_no GROUP BY Au.author_name,Au.university ORDER BY COUNT(ARP.paper_id) DESC`,
  minMaxHIndexPerUni: `SELECT MIN(h_index), MAX(h_index), university FROM authors GROUP BY university`,
};

module.exports = exercise4_queries;
