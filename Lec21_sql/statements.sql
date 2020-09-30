/**
 * possible solutions for section 15 sql exercises
 */

--  query 1
SELECT name, price
FROM menu;

-- query 2
SELECT name, price, category
FROM menu
WHERE price < 2
ORDER BY price DESC, name;

-- query 3
SELECT name, cost, price
FROM menu
WHERE name LIKE "%Coffee%"
ORDER BY price;

-- query 4
SELECT name
FROM menu
WHERE price < cost;

-- query 5
SELECT name, price, cost
FROM menu
ORDER BY price DESC
LIMIT 1;

-- query 6
SELECT DISTINCT name
FROM Games
WHERE developer = 'Nintendo';

-- query 7
SELECT name, release_year
FROM Games
ORDER BY release_year
LIMIT 20;

-- query 8
SELECT name, platform, release_year
FROM Games
WHERE name LIKE '%Spyro%'
AND NOT (name LIKE '%Skylanders%');

-- challenge 1
SELECT ROUND(AVG(release_year)) AS avg_release_year
FROM Games;

-- challenge 2
SELECT g1.name, g1.release_year
FROM Games g1
WHERE g1.genre = 'puzzle'
AND g1.release_year = (SELECT MIN(g2.release_year)
                       FROM Games g2
                       WHERE g2.genre = 'puzzle');