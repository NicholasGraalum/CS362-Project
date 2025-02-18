-- chatgpt generated filler data
-- Insert Users
INSERT INTO User (email, password, username) VALUES
('alice@example.com', 'hashedpassword1', 'alice123'),
('bob@example.com', 'hashedpassword2', 'bobcook'),
('charlie@example.com', 'hashedpassword3', 'charliechef');

-- Insert Recipes
INSERT INTO Recipe (name, id, image_link, description, visibility, servings, creator_email) VALUES
('Spaghetti Bolognese', 1, 'https://picsum.photos/200', 'Classic Italian pasta dish.', 'public', 4, 'alice@example.com'),
('Chicken Curry', 2, 'https://picsum.photos/200', 'Spicy and creamy chicken curry.', 'public', 3, 'bob@example.com'),
('Vegan Salad', 3, 'https://picsum.photos/200', 'Healthy and fresh mixed greens.', 'private', 2, 'charlie@example.com');

-- Insert Ingredients (Assuming 'name' should be VARCHAR)
INSERT INTO Ingredient (name, store_api_id, nutrition_api_id) VALUES
('Tomato', 101, 201),
('Chicken', 102, 202),
('Lettuce', 103, 203),
('Garlic', 104, 204),
('Pasta', 105, 205),
('Curry Powder', 106, 206),
('Olive Oil', 107, 207),
('Carrot', 108, 208),
('Chickpeas', 109, 209);

-- Insert Recipe-Ingredient Relationships (Multiple Ingredients per Recipe, Amount in Grams)
INSERT INTO Includes (amount, r_id, i_name) VALUES
-- Spaghetti Bolognese (Recipe 1)
(300.0, 1, 'Tomato'),    -- 300g tomatoes
(10.0, 1, 'Garlic'),     -- 10g garlic (about 2 cloves)
(200.0, 1, 'Pasta'),     -- 200g pasta
(30.0, 1, 'Olive Oil'),  -- 30g olive oil

-- Chicken Curry (Recipe 2)
(500.0, 2, 'Chicken'),    -- 500g chicken breast
(15.0, 2, 'Curry Powder'),-- 15g curry powder
(30.0, 2, 'Olive Oil'),  -- 30g olive oil
(100.0, 2, 'Carrot'),    -- 100g carrots (about 1 medium carrot)

-- Vegan Salad (Recipe 3)
(100.0, 3, 'Lettuce'),    -- 100g lettuce
(50.0, 3, 'Carrot'),     -- 50g carrots (about 1 small carrot)
(150.0, 3, 'Chickpeas'), -- 150g canned chickpeas
(20.0, 3, 'Olive Oil');  -- 20g olive oil

-- Insert Favorite Recipes
INSERT INTO Favorites (email, r_id) VALUES
('alice@example.com', 2),
('bob@example.com', 1),
('charlie@example.com', 3);

-- Insert Meal Types
INSERT INTO Recipe_meal_type (meal_type, r_id) VALUES
('Dinner', 1),
('Lunch', 2),
('Breakfast', 3);

-- Insert Recipe Tags (Multiple Tags per Recipe)
INSERT INTO Recipe_tags (tag, r_id) VALUES
-- Spaghetti Bolognese (Recipe 1)
('Italian', 1),
('Pasta', 1),
('Comfort Food', 1),

-- Chicken Curry (Recipe 2)
('Spicy', 2),
('Curry', 2),
('Chicken', 2),

-- Vegan Salad (Recipe 3)
('Healthy', 3),
('Vegan', 3),
('Salad', 3);
