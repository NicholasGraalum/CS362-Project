-- schema 
CREATE TABLE User
(
  email VARCHAR(320) NOT NULL,
  password VARCHAR(100) NOT NULL,
  username VARCHAR(20) NOT NULL,
  zipcode VARCHAR(6) NOT NULL,
  storeID INT NOT NULL,
  PRIMARY KEY (email)
);

CREATE TABLE Recipe
(
  name VARCHAR(80) NOT NULL,
  id INTEGER,
  image_link VARCHAR(300),
  description VARCHAR(200),
  visibility VARCHAR(20) NOT NULL,
  servings INT NOT NULL,
  creator_email VARCHAR(320),
  PRIMARY KEY (id),
  FOREIGN KEY (creator_email) REFERENCES User(email) ON DELETE SET NULL
);

CREATE TABLE Ingredient
(
  name VARCHAR(200) NOT NULL,
  store_api_id VARCHAR(20) NOT NULL,
  PRIMARY KEY (name)
);

CREATE TABLE Includes
(
  amount FLOAT NOT NULL,
  r_id INT NOT NULL,
  i_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (r_id, i_name),
  FOREIGN KEY (r_id) REFERENCES Recipe(id) ON DELETE CASCADE,
  FOREIGN KEY (i_name) REFERENCES Ingredient(name) ON DELETE RESTRICT
);

CREATE TABLE Favorites
(
  email VARCHAR(320) NOT NULL,
  r_id INT NOT NULL,
  PRIMARY KEY (email, r_id),
  FOREIGN KEY (email) REFERENCES User(email) ON DELETE CASCADE,
  FOREIGN KEY (r_id) REFERENCES Recipe(id) ON DELETE CASCADE
);

CREATE TABLE Recipe_meal_type
(
  meal_type VARCHAR(20) NOT NULL,
  r_id INT NOT NULL,
  PRIMARY KEY (meal_type, r_id),
  FOREIGN KEY (r_id) REFERENCES Recipe(id) ON DELETE CASCADE
);

CREATE TABLE Recipe_tags
(
  tag VARCHAR(20) NOT NULL,
  r_id INT NOT NULL,
  PRIMARY KEY (tag, r_id),
  FOREIGN KEY (r_id) REFERENCES Recipe(id) ON DELETE CASCADE
);

CREATE TABLE On_list
(
  amount FLOAT NOT NULL,
  email VARCHAR(320) NOT NULL,
  i_name VARCHAR(200) NOT NULL,
  store_api_id VARCHAR(20) NOT NULL,
  PRIMARY KEY (email, i_name),
  FOREIGN KEY (email) REFERENCES User(email) ON DELETE CASCADE,
  FOREIGN KEY (i_name) REFERENCES Ingredient(name) ON DELETE CASCADE
);