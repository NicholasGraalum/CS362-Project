CREATE TABLE User
(
  email VARCHAR(320) NOT NULL,
  password VARCHAR(100) NOT NULL,
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY (email)
);

CREATE TABLE Recipe
(
  name VARCHAR(80) NOT NULL,
  id INT NOT NULL,
  image_link VARCHAR(300),
  description VARCHAR(200),
  visibility VARCHAR(20) NOT NULL,
  servings INT NOT NULL,
  creator_email VARCHAR(320) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (creator_email) REFERENCES User(email)
);

CREATE TABLE Ingredient
(
  name VARCHAR(100) NOT NULL,
  store_api_id INT NOT NULL,
  nutrition_api_id INT NOT NULL,
  PRIMARY KEY (name)
);

CREATE TABLE includes
(
  amount INT NOT NULL,
  r_id INT NOT NULL,
  i_name INT NOT NULL,
  PRIMARY KEY (r_id, i_name),
  FOREIGN KEY (r_id) REFERENCES Recipe(id),
  FOREIGN KEY (i_name) REFERENCES Ingredient(name)
);

CREATE TABLE favorites
(
  email VARCHAR(320) NOT NULL,
  r_id INT NOT NULL,
  PRIMARY KEY (email, r_id),
  FOREIGN KEY (email) REFERENCES User(email),
  FOREIGN KEY (r_id) REFERENCES Recipe(id)
);

CREATE TABLE Recipe_meal_type
(
  meal_type VARCHAR(20) NOT NULL,
  r_id INT NOT NULL,
  PRIMARY KEY (meal_type, r_id),
  FOREIGN KEY (r_id) REFERENCES Recipe(id)
);

CREATE TABLE Recipe_tags
(
  tags VARCHAR(20) NOT NULL,
  r_id INT NOT NULL,
  PRIMARY KEY (tags, r_id),
  FOREIGN KEY (r_id) REFERENCES Recipe(id)
);
