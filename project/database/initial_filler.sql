-- chatgpt generated filler data
-- Insert Users
INSERT INTO User (email, password, username, zipcode) VALUES
('alice@example.com', 'hashedpassword1', 'alice123', 97333),
('bob@example.com', 'hashedpassword2', 'bobcook', 97045),
('charlie@example.com', 'hashedpassword3', 'charliechef', 97330);

-- Insert Recipes
INSERT INTO Recipe (name, id, image_link, description, visibility, servings, creator_email) VALUES
('Spaghetti Bolognese', 1, 'https://images.unsplash.com/photo-1622973536968-3ead9e780960', 'Classic Italian pasta dish.', 'public', 4, 'alice@example.com'),
('Chicken Curry', 2, 'https://images.unsplash.com/photo-1594610352113-ad218529cfb7', 'Spicy and creamy chicken curry.', 'public', 3, 'bob@example.com'),
('Vegan Salad', 3, 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082', 'Healthy and fresh mixed greens.', 'private', 2, 'charlie@example.com');

-- Insert Ingredients (Assuming 'name' should be VARCHAR)
INSERT INTO Ingredient (name, store_api_id, nutrition_api_id) VALUES
('Tomato', 0000000004799, 1999634),
('Chicken', 0029082900000, 2646170),
('Lettuce', 0000000004640, 2346391),
('Garlic',  0000000004608, 1104647),
('Pasta', 0001111085004, 169736),
('Curry Powder', 106, 170924),
('Olive Oil', 0007321000011, 748608),
('Carrot', 0000000004562, 2258586),
('Chickpeas', 109, 2644288);

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

-- Insert list items (amount in grams)
-- Alice's favorite meal is Chicken Curry (Recipe 2)
INSERT INTO On_list (email, i_name, amount) VALUES
('alice@example.com', 'Chicken', 500.0),
('alice@example.com', 'Curry Powder', 15.0),
('alice@example.com', 'Olive Oil', 30.0),
('alice@example.com', 'Carrot', 100.0);

-- Bob's favorite meal is Spaghetti Bolognese (Recipe 1)
INSERT INTO On_list (email, i_name, amount) VALUES
('bob@example.com', 'Tomato', 300.0),
('bob@example.com', 'Garlic', 10.0),
('bob@example.com', 'Pasta', 200.0),
('bob@example.com', 'Olive Oil', 30.0);

-- Charlie's favorite meal is Vegan Salad (Recipe 3)
INSERT INTO On_list (email, i_name, amount) VALUES
('charlie@example.com', 'Lettuce', 100.0),
('charlie@example.com', 'Carrot', 50.0),
('charlie@example.com', 'Chickpeas', 150.0),
('charlie@example.com', 'Olive Oil', 20.0);
