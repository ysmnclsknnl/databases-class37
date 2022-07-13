

####  QUESTIONS AND ANSWERS 

1. What columns violate 1NF?

There is no primary key in the table. 

member_id violates the rule: Prevent duplicate records (by applying primary keys)

dinner_date violates the rule : all values in a column must be of the same kind or type

food_code and food_description violate the rule: All data must be atomic.

2. What entities do you recognize that could be extracted?

dinner,venue,food.

3. Name all the tables and columns that would make a 3NF compliant solution.


|Table                |      Columns                                                                             |
|---------------------|------------------------------------------------------------------------------------------|
| Member              |  id (PK), name, adress                                                                   |
|                     |                                                                                          |
| Dinner              |  id(PK),date,venue_code (FK REFERENCES Venue(code))                                      |
|                     |                                                                                          |
| Member_dinner       |  member_id(FK REF Members(id)), dinner_id (FK REF Dinners(id)),PK(member_id,dinner_id)   |
|                     |                                                                                          |
| Venue               |  code(PK),description (Unique)                                                           |
|                     |                                                                                          |
| Food                |  code(PK),description (Unique)                                                           |
|                     |                                                                                          |
| Dinner_Food         | dinner_id (FK REF Dinners(id)), food_code (FK REF Foods(code)), PK(dinner_id,food_code)  |




