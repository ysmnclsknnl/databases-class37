

####  QUESTIONS AND ANSWERS 

1. What columns violate 1NF?

 food_code and food_description violate 1NF the rule "All data must be atomic".

2. What entities do you recognize that could be extracted?

dinner_id,dinner_date,venue_code,venue_description,food_code, food_description.

3. Name all the tables and columns that would make a 3NF compliant solution.


|Table                |      Columns                                                                      |
|---------------------|-----------------------------------------------------------------------------------|
| Members             |  id, name, adress                                                                 |
|                     |                                                                                   |
| Dinners             |  id,date,venue_code (FK REFERENCES Venue(code))                                   |
|                     |                                                                                   |
| Members_dinners     |  member_id(FK REFERENCES Members(id)), dinner_id (FK REFERENCES Dinners(id)),     |
|                     |                                                                                   |
| Venues              |  code,description                                                                 |
|                     |                                                                                   |
| Foods               |  code,description                                                                 |
|                     |                                                                                   |
| Dinners_Foods       | dinner_id, food_code, FK (dinner_id) REF Dinners(id),FK (food_code REF Foods(code)|




