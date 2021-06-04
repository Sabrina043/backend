-- crée une table Student
CREATE TABLE Student (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (30),
    ville VARCHAR (30)
);

-- EXO1 
insert into Student (name, ville)
VALUES ("Veronique", "Paris"),
    ("Steeven", "Lyon"),
    ("Marc", "Marseille"),
    ("Nour", "Lyon"),
    ("Romain", "Paris"),
    ("Sophie", "Paris");



-- Language
CREATE TABLE languages (
    id int UNSIGNED PRIMARY AUTO_INCREMENT,
    name VARCHAR (30)
);

-- EXO
insert into languages (name)
VALUES ("French"),
    ("English"),
    ("German"),
    ("Spanish"),
    ("Mandarin");



-- Favorites
CREATE TABLE favorites (
    id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    class VARCHAR (30),
    sport varchar(30),
    student_id INT UNSIGNED
);
insert into favorites (class, sport, student_id)
VALUES ("Maths", "Cricket", 2),
    ("Music", "Hip-hop", 6),
    ("Arts", "Boxing", 1),
    ("Literature", "Tennis", 3),
    ("Computer science", "Tennis", 5),
    ("Arts", "Baseball", 4);


