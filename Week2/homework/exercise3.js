const listAuthorsAndMentors = `SELECT A1.author_name AS AUTHOR ,A2.author_name AS Mentor from authors AS A1 INNER JOIN authors AS A2 ON A1.mentor=A2.author_no`;
