const exercise3_queries = {
  listAuthorsAndMentors: `SELECT A1.author_name AS AUTHOR ,A2.author_name AS Mentor from authors AS A1 INNER JOIN authors AS A2 ON A1.mentor=A2.author_no`,
  listAuthorsAndTheirPapers: `SELECT A1.author_no,A1.author_name,A1.university,A1.date_of_birth,A1.h_index,A1.gender,A2.author_name AS mentor,RP.paper_title FROM authors AS A1 LEFT JOIN authors  AS A2 ON A1.mentor=A2.author_no LEFT JOIN author_research_papers AS ARP ON A1.author_no=ARP.author_no LEFT JOIN research_papers AS RP ON ARP.paper_id=RP.paper_id
`,
};

export default exercise3_queries;
