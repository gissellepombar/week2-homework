//3.Create a SQL Table with your favorite dishes and cuisines.

CREATE TABLE cuisine (
    ID INT Primary Key auto_increment not null,

    dish VARCHAR(100),
    place_of_origin VARCHAR(25),
    food_type VARCHAR(30)
); 

INSERT INTO cuisine VALUES (null, "Ceviche", "Peru", "Savory");

INSERT INTO cuisine VALUES (null, "Paella", "Spain", "Savory");

INSERT INTO cuisine VALUES (null, "Korean corn dogs", "Korea", "Sweet/Savory");
