const sql_queries = [
  "DROP DATABASE IF EXISTS food_recipies",
  "CREATE DATABASE food_recipies",
  "USE food_recipies",
  "CREATE TABLE recipe(id int PRIMARY KEY NOT NULL AUTO_INCREMENT,title VARCHAR(50) NOT NULL UNIQUE)",
  "CREATE TABLE category(id int PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR(50) NOT NULL UNIQUE)",
  "CREATE TABLE recipe_category( recipe_id int NOT NULL, category_id int NOT NULL , FOREIGN KEY (category_id) REFERENCES category(id), FOREIGN KEY (recipe_id) REFERENCES recipe(id),PRIMARY KEY(category_id,recipe_id))",
  "CREATE TABLE ingredient(id int PRIMARY KEY NOT NULL AUTO_INCREMENT,name VARCHAR(50) NOT NULL UNIQUE)",
  "CREATE TABLE recipe_ingredient(recipe_id int NOT NULL, ingredient_id int NOT NULL, FOREIGN KEY (recipe_id) REFERENCES recipe(id),FOREIGN KEY (ingredient_id) REFERENCES ingredient(id),PRIMARY KEY (recipe_id,ingredient_id))",
  "CREATE TABLE step(id int PRIMARY KEY NOT NULL AUTO_INCREMENT, name VARCHAR (150) NOT NULL UNIQUE)",
  "CREATE TABLE recipe_step(recipe_id int NOT NULL, step_id int NOT NULL, FOREIGN KEY (recipe_id) REFERENCES recipe(id),FOREIGN KEY (step_id) REFERENCES step(id),PRIMARY KEY (recipe_id,step_id))",
  'INSERT INTO recipe(title) VALUES("tofi sushi rolls"),("browni"),("vegan pizza"),("salad with mexican beans"),("lemon cheesecake"),("spinach salad"),("framboise cheesecake")',
  'INSERT INTO category(name) VALUES ("Japanese"),("vegan"),("cake"),("salad"),("baked"),("not baked")',
  "INSERT INTO recipe_category(recipe_id,category_id) VALUES (1,1),(1,2),(2,3),(2,5),(3,2),(3,4),(4,2),(4,4),(5,3),(5,6),(6,1),(6,2),(6,4),(7,3),(7,6)",
  "INSERT INTO ingredient(name) VALUES ('olive oil'),('rice'),('salt'),('vinegar'),('potato'),('spinach'),('milk'),('flour'),('sugar'),('cacao'),('mexican beans'),('egg'),('cheese'),('lemon'),('framboise')",
  "INSERT INTO recipe_ingredient(recipe_id,ingredient_id) VALUES (1,1),(1,2),(1,3),(2,7),(2,8),(2,9),(2,10),(3,1),(3,2),(3,5),(3,7),(3,11),(4,1),(4,3),(4,10),(5,13),(5,14),(6,1),(6,3),(6,4),(6,5),(6,6),(7,13),(7,15)",
  "SELECT re.id, re.title from recipe re JOIN recipe_category re_cat ON re_cat.recipe_id=re.id JOIN recipe_ingredient re_ing ON re_ing.recipe_id=re.id WHERE re_cat.category_id=(SELECT id from category WHERE name='vegan') AND re_ing.ingredient_id=(SELECT id FROM ingredient WHERE name='potato')",
  "SELECT re.id,re.title FROM recipe re JOIN recipe_category re_cat ON re.id=re_cat.recipe_id JOIN recipe_ingredient re_ing ON re.id=re_ing.recipe_id WHERE re_cat.category_id=3 AND re_cat.recipe_id IN(SELECT re_cat.recipe_id FROM recipe_category re_cat WHERE re_cat.category_id=6) GROUP BY re.id",
  "SELECT id, title FROM recipe WHERE id IN (SELECT T1.recipe_id FROM recipe_category T1, recipe_category T2 WHERE T1.recipe_id= T2.recipe_id AND T1.category_id=1 AND T2.category_id=2 GROUP BY T1.recipe_id)",
];

module.exports = sql_queries;
