-- chatgpt generated filler data
-- Insert Users
INSERT INTO User (email, password, username, zipcode, storeID) VALUES
('alice@example.com', 'hashedpassword1', 'alice123', '97333', 70100070),
('bob@example.com', 'hashedpassword2', 'bobcook', '97045', 70100242),
('charlie@example.com', 'hashedpassword3', 'charliechef', '97086', 70100694);

-- Insert Recipes
INSERT INTO Recipe (name, image_link, description, visibility, servings, creator_email) VALUES
('Spaghetti Bolognese', 'https://images.unsplash.com/photo-1622973536968-3ead9e780960', 'Classic Italian pasta dish.', 'public', 4, 'alice@example.com'),
('Chicken Salad', 'https://images.unsplash.com/photo-1574926054530-540288c8e678?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'A simple chicken salad.', 'public', 2, 'alice@example.com');

-- Insert Ingredients (Assuming 'name' should be VARCHAR)
INSERT INTO Ingredient (name, store_api_id, nutrition_api_id) VALUES
('Tomato', '0000000004799', 1999634), --2.29
('Lettuce', '0000000004640', 2346391), --2.29
('Garlic', '0000000004608', 1104647),
('Pasta', '0001111085004', 169736),
('Curry Powder', '0001111002398', 170924),
('Olive Oil', '0007321000011', 748608),
('Carrot', '0000000004562', 2258586),
('Chickpeas', '0001111084769', 2644288),
('Ground Beef', '0085955700407', 0000000),
('Spaghetti', '0007680828008', 0000000),
('Onion', '0000000004093', 0000000),
('Chicken Breast', '0029082900000', 0000000),
('Bell Peppers', '0000000003121', 0000000),
('Broccoli', '0000000003082', 0000000),
('Ginger', '0000000094612', 0000000),
('Sesame Oil', '0001111014132', 0000000),
('Ground Chicken', '0008463244196', 0000000),
('Taco Seasoning', '0005210003491', 0000000),
('Black Beans', '0001111012114', 0000000),
('Corn', '0001111018183', 0000000),
('Avocado', '0000000004046', 0000000),
('Sour Cream', '0001111046070', 0000000),
('Tortilla Chips', '0004886722617', 0000000),
('Potatoes', '0001111091760', 0000000),
('Coconut Milk', '0001111085735', 0000000),
('Salmon Fillet', '0021544150000', 0000000),
('Lemon', '0000000004053', 0000000),
('Asparagus', '0000000004080', 0000000),
('Butter', '0001111078773', 0000000),
('Hamburger Bun', '0005040074014', 0000000),
('Cheddar Cheese', '0007283000201', 0000000),
('Pickles', '0001111089339', 0000000),
('Pizza Dough', '0084013430888', 0000000),
('Basil Leaves', '0001111001812', 0000000),
('Fettuccine', '0000000', 0000000),
('Shrimp', '0000000', 0000000),
('Heavy Cream', '0000000', 0000000),
('Parmesan Cheese', '0001111058033', 0000000),
('Croutons', '0001111081364', 0000000),
('Caesar Dressing', '0002066200037', 0000000),
('Tortillas', '0007373100415', 0000000),
('Bacon', '0001111097209', 0000000),
('Salsa', '0085114600264', 0000000);


-- Insert Recipe-Ingredient Relationships (Multiple Ingredients per Recipe, Amount in Grams)
INSERT INTO Includes (amount, r_id, i_name) VALUES
-- Spaghetti Bolognese (Recipe 1)
(300.0, 1, 'Tomato'),    -- 300g tomatoes
(10.0, 1, 'Garlic'),     -- 10g garlic (about 2 cloves)
(200.0, 1, 'Spaghetti'),     -- 200g pasta
(30.0, 1, 'Olive Oil'),  -- 30g olive oil
(500.0, 1, 'Ground Beef'),
(100.0, 1, 'Onion'), 
(50.0, 1, 'Carrot'),

-- Chicken Salad (Recipe 2)
(150.0, 2, 'Chicken Breast'),
(100.0, 2, 'Lettuce'),
(80.0, 2, 'Tomato'),
(50.0, 2, 'Onion'),
(20.0, 2, 'Olive Oil'),
(10.0, 2, 'Garlic'),
(50.0, 2, 'Avocado');



-- Insert Favorite Recipes
INSERT INTO Favorites (email, r_id) VALUES
('alice@example.com', 1);

-- Insert Meal Types
INSERT INTO Recipe_meal_type (meal_type, r_id) VALUES
('Dinner', 1),
('Lunch', 1),
('Dinner', 2),
('Lunch', 2);

-- Insert Recipe Tags (Multiple Tags per Recipe)
INSERT INTO Recipe_tags (tag, r_id) VALUES
-- Spaghetti Bolognese (Recipe 1)
('High Protein', 1),
('Comfort Food', 1),
('Healthy', 2),
('High Protein', 2),
('Low Calorie', 2);

-- Insert list items (amount in grams)
-- Alice's favorite meal is Spaghetti Bolagnese (Recipe 1)
INSERT INTO On_list (email, i_name, store_api_id, amount) VALUES
('alice@example.com', 'Tomato', '0000000004799', 300.0),
('alice@example.com', 'Garlic', '0000000004608', 10.0),
('alice@example.com', 'Spaghetti', '0007680828008', 200.0),
('alice@example.com', 'Olive Oil', '0007321000011', 30.0),
('alice@example.com', 'Ground Beef', '0085955700407', 500.0),
('alice@example.com', 'Onion', '0000000004093', 100.0),
('alice@example.com', 'Carrot', '0000000004562', 50.0);

