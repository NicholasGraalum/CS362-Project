-- chatgpt generated filler data
-- Insert Users
INSERT INTO User (email, password, username, zipcode, storeID) VALUES
('alice@example.com', 'hashedpassword1', 'alice123', '97333', 70100070),
('bob@example.com', 'hashedpassword2', 'bobcook', '97045', 70100242),
('charlie@example.com', 'hashedpassword3', 'charliechef', '97086', 70100694);

-- Insert Recipes
INSERT INTO Recipe (name, image_link, description, visibility, servings, creator_email) VALUES
('Spaghetti Bolognese', 'https://images.unsplash.com/photo-1622973536968-3ead9e780960', 'Classic Italian pasta dish with meat.', 'public', 4, 'alice@example.com'),
('Chicken Salad', 'https://images.unsplash.com/photo-1574926054530-540288c8e678', 'A simple chicken salad.', 'public', 2, 'alice@example.com'),
('Tomato Basil Pasta', 'https://images.unsplash.com/photo-1522666257812-173fdc2d11fe', 'Simple pasta with tomato and basil.', 'public', 4, 'alice@example.com'),
('Chicken Curry', 'https://images.unsplash.com/photo-1631292784640-2b24be784d5d', 'A chicken curry dish with vegetables.', 'public', 2, 'alice@example.com'),
('Beef Tacos', 'https://loveandgoodstuff.com/wp-content/uploads/2020/08/classic-ground-beef-tacos.jpg', 'Mexican-inspired ground beef tacos.', 'public', 2, 'alice@example.com'),
('Chicken Stir Fry', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/05/Chicken-Stir-Fry-6-1024x1536.jpg', 'Chicken stir fry with vegetables.', 'public', 2, 'alice@example.com'),
('Beef and Broccoli', 'https://www.savorytooth.com/wp-content/uploads/2017/02/crazy-good-beef-and-broccoli-3.jpg', 'Seasoned beef with broccoli. Goes well with rice or noodles.', 'public', 4, 'alice@example.com'),
('Chickpea Curry', 'https://images.unsplash.com/photo-1609595781576-1580ff3ee291', 'A hearty vegan curry with chickpeas and coconut milk.', 'public', 4, 'bob@example.com'),
('Black Bean Tacos', 'https://plus.unsplash.com/premium_photo-1664648234519-a4560f305479', 'Colorful vegetarian tacos filled with black beans, corn, and fresh veggies.', 'public', 3, 'charlie@example.com'),
('Salmon with Asparagus', 'https://images.squarespace-cdn.com/content/v1/62e85e45d108a436d91c2f9e/e1f8899f-7daa-405a-9e23-f0ebb4b8e1a3/Salmon+%2B+asparagus+1.JPG', 'Fresh salmon fillet served with asparagus and a zesty lemon garlic sauce.', 'public', 2, 'alice@example.com'),
('Lemon Chicken', 'https://images.unsplash.com/photo-1532550907401-a500c9a57435', 'Tender chicken breast with a tangy lemon and garlic sauce, finished with fresh basil.', 'public', 3, 'bob@example.com'),
('Veggie Pizza', 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796', 'Homemade pizza with a crispy dough topped with tomato, basil, bell peppers, and Parmesan cheese.', 'public', 4, 'charlie@example.com'),
('Bacon Cheeseburger', 'https://images.unsplash.com/photo-1724352476668-6cbd99da2d6b', 'Juicy beef burger layered with bacon, cheddar cheese, lettuce, tomato, pickles, and onion on a soft bun.', 'public', 2, 'alice@example.com'),
('Chicken Caesar Salad', 'https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051-760x1140.jpg', 'A classic Caesar salad topped with grilled chicken, Parmesan, croutons, and a drizzle of Caesar dressing, with a hint of bacon.', 'public', 2, 'bob@example.com'),
('Scrambled Eggs', 'https://cdn.loveandlemons.com/wp-content/uploads/2021/05/scrambled-eggs.jpg', 'A quick and easy breakfast filled with protein.', 'public', 2, 'alice@example.com'),
('Mediterranean Hummus', 'https://foolproofliving.com/wp-content/uploads/2023/08/hummus-recipe.jpg', 'A delicious snack that can be enjoyed with bread or crackers.', 'public', 2, 'alice@example.com');

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
('Parmesan Cheese', '0001111058033', 0000000),
('Croutons', '0001111081364', 0000000),
('Caesar Dressing', '0002066200037', 0000000),
('Tortillas', '0007373100415', 0000000),
('Bacon', '0001111097209', 0000000),
('Salsa', '0085114600264', 0000000),
('Black Olives', '0001111012596', 0000000),
('Eggs', '0001111090406', 0000000);



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
(50.0, 2, 'Avocado'),

-- Recipe 3: Pasta with Tomato and Basil
(200.0, 3, 'Pasta'),
(150.0, 3, 'Tomato'),
(10.0, 3, 'Basil Leaves'),
(15.0, 3, 'Olive Oil'),
(5.0, 3, 'Garlic'), 

-- Recipe 4: Chicken Curry
(200.0, 4, 'Chicken Breast'),
(5.0, 4, 'Curry Powder'),
(100.0, 4, 'Tomato'),
(50.0, 4, 'Onion'),
(5.0, 4, 'Garlic'),
(20.0, 4, 'Olive Oil'),
(100.0, 4, 'Coconut Milk'),

-- Recipe 5: Beef Tacos
(150.0, 5, 'Ground Beef'),
(10.0, 5, 'Taco Seasoning'),
(50.0, 5, 'Lettuce'),
(40.0, 5, 'Tomato'),
(30.0, 5, 'Onion'),
(50.0, 5, 'Avocado'),
(20.0, 5, 'Sour Cream'),
(100.0, 5, 'Tortillas'),

-- Recipe 6: Chicken Stir Fry
(150.0, 6, 'Chicken Breast'),
(50.0, 6, 'Bell Peppers'),
(100.0, 6, 'Broccoli'),
(30.0, 6, 'Onion'),
(5.0, 6, 'Garlic'),
(10.0, 6, 'Sesame Oil'),
(5.0, 6, 'Ginger'),

-- Recipe 8: Beef and Broccoli
(200.0, 7, 'Ground Beef'),
(150.0, 7, 'Broccoli'),
(50.0, 7, 'Onion'),
(5.0, 7, 'Garlic'),
(20.0, 7, 'Olive Oil'),

-- Recipe 8: Chickpea Curry
(150.0, 8, 'Chickpeas'),
(100.0, 8, 'Tomato'),
(50.0, 8, 'Onion'),
(5.0, 8, 'Garlic'),
(15.0, 8, 'Olive Oil'),
(5.0, 8, 'Curry Powder'),
(100.0, 8, 'Coconut Milk'),

-- Recipe 9: Black Bean Tacos
(100.0, 9, 'Black Beans'),
(80.0, 9, 'Corn'),
(50.0, 9, 'Lettuce'),
(50.0, 9, 'Tomato'),
(30.0, 9, 'Onion'),
(30.0, 9, 'Avocado'),
(100.0, 9, 'Tortillas'),
(5.0, 9, 'Taco Seasoning'),

-- Recipe 10: Salmon with Asparagus
(200.0, 10, 'Salmon Fillet'),
(100.0, 10, 'Asparagus'),
(30.0, 10, 'Lemon'),
(10.0, 10, 'Olive Oil'),
(5.0, 10, 'Garlic'),

-- Recipe 11: Lemon Chicken
(200.0, 11, 'Chicken Breast'),
(30.0, 11, 'Lemon'),
(5.0, 11, 'Garlic'),
(15.0, 11, 'Olive Oil'),
(10.0, 11, 'Basil Leaves'),

-- Recipe 12: Veggie Pizza
(200.0, 12, 'Pizza Dough'),
(100.0, 12, 'Tomato'),
(10.0, 12, 'Basil Leaves'),
(5.0, 12, 'Garlic'),
(50.0, 12, 'Bell Peppers'),
(50.0, 12, 'Onion'),
(15.0, 12, 'Olive Oil'),
(30.0, 12, 'Parmesan Cheese'),
(50.0, 12, 'Black Olives'),

-- Recipe 13: Bacon Cheeseburger
(100.0, 13, 'Hamburger Bun'),
(50.0, 13, 'Bacon'),
(30.0, 13, 'Cheddar Cheese'),
(150.0, 13, 'Ground Beef'),
(30.0, 13, 'Lettuce'),
(30.0, 13, 'Tomato'),
(20.0, 13, 'Pickles'),
(20.0, 13, 'Onion'),

-- Recipe 14: Chicken Caesar Salad
(150.0, 14, 'Chicken Breast'),
(100.0, 14, 'Lettuce'),
(20.0, 14, 'Parmesan Cheese'),
(30.0, 14, 'Croutons'),
(20.0, 14, 'Caesar Dressing'),
(30.0, 14, 'Bacon'),

-- Recipe 15: Scrambled Eggs
(200.0, 15, 'Eggs'),
(5.0, 15, 'Olive Oil'),

-- Recipe 16: Mediterranean Hummus
(200.0, 16, 'Chickpeas'),
(50.0, 16, 'Garlic'),
(20.0, 16, 'Olive Oil');

-- Insert Favorite Recipes
INSERT INTO Favorites (email, r_id) VALUES
('alice@example.com', 1);

-- Insert Meal Types
INSERT INTO Recipe_meal_type (meal_type, r_id) VALUES
('Lunch', 1),
('Dinner', 1),
('Lunch', 2),
('Dinner', 2),
('Lunch', 3),
('Dinner', 3),
('Lunch', 4),
('Dinner', 4),
('Lunch', 5),
('Dinner', 5),
('Lunch', 6),
('Dinner', 6),
('Lunch', 7),
('Dinner', 7),
('Lunch', 8),
('Dinner', 8),
('Lunch', 9),
('Dinner', 9),
('Lunch', 10),
('Dinner', 10),
('Lunch', 11),
('Dinner', 11),
('Lunch', 12),
('Dinner', 12),
('Lunch', 13),
('Dinner', 13),
('Lunch', 14),
('Dinner', 14),
('Breakfast', 15),
('Snack', 16);


-- Insert Recipe Tags (Multiple Tags per Recipe)
INSERT INTO Recipe_tags (tag, r_id) VALUES
-- Spaghetti Bolognese (Recipe 1)
('High Protein', 1),
('Comfort Food', 1),

-- Chicken Salad (Recipe 2)
('Healthy', 2),
('High Protein', 2),
('Low Calorie', 2),
('Gluten Free', 2),

-- Pasta with Tomato and Basil (Recipe 3)
('Healthy', 3),
('Vegetarian', 3),
('Vegan', 3),

-- Chicken Curry (Recipe 4)
('Healthy', 4),
('High Protein', 4),
('Gluten Free', 4),

-- Beef Tacos (Recipe 5)
('Comfort Food', 5),

-- Chicken Stir Fry (Recipe 6)
('High Protein', 6),
('Gluten Free', 6),

-- Beef and Broccoli (Recipe 7)
('High Protein', 7),
('Gluten Free', 7),

-- Recipe 8: Chickpea Curry
('Vegan', 8),
('Healthy', 8),
('Low Calorie', 8),
('Gluten Free', 8),

-- Recipe 9: Veggie Tacos
('Vegetarian', 9),
('Healthy', 9),

-- Recipe 10: Salmon with Asparagus
('High Protein', 10),
('Healthy', 10),
('Low Calorie', 10),
('Gluten Free', 10),

-- Recipe 11: Lemon Chicken
('High Protein', 11),
('Healthy', 11),
('Gluten Free', 11),

-- Recipe 12: Veggie Pizza
('Vegetarian', 12),
('Comfort Food', 12),

-- Recipe 13: Bacon Cheeseburger
('Comfort Food', 13),
('High Protein', 13),

-- Recipe 14: Chicken Caesar Salad
('High Protein', 14),
('Healthy', 14),

-- Recipe 15: Scrambled Eggs
('High Protein', 15),
('Gluten Free', 15),

-- Recipe 16: Mediterranean Hummus
('Healthy', 16),
('Vegetarian', 16),
('Vegan', 16);

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

-- Bob's loves eating chicken
INSERT INTO On_list (email, i_name, store_api_id, amount) VALUES
('bob@example.com', 'Chicken Breast', '0029082900000', 2);

-- Charlie loves eating ground beef
INSERT INTO On_list (email, i_name, store_api_id, amount) VALUES
('charlie@example.com', 'Ground Beef', '0085955700407', 2);