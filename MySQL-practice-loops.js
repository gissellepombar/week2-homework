// Write a function that prints (console.log) the numbers from 1 to 100. But log “Fizz” instead of the number if it is divisible by 3, “Buzz” if the number is divisible by 5, and “FizzBuzz” if the number is divisible by both 3 and 5.

//1 Loops + if else statments
function compCases (x) {
    let counter = 0;
    for (let i = 0; i < x; i++) {
        counter++;
        if (counter % 3 == 0 && counter % 5 == 0) {
            console.log('FizzBuzz')
        } else if (counter % 3 == 0) {
            console.log('Fizz')
        } else if (counter % 5 == 0 ) {
            console.log('Buzz')
        } else {
            console.log(counter);
        }
    }
    return counter;
}

compCases(100);

//1 redoing previous problem using arrow functions + switch
const divisible = num => {
    let n = 0;
    for (let i = 0; i < num; i++) {
        n++;
        switch(true) {
            case (n % 3 == 0) && (n % 5 == 0):
                console.log('FizzBuzz');
                break;

            case (n % 3 == 0):
                console.log('Fizz');
                break;   
            
            case (n % 5 == 0):
                console.log('Buzz');
                break;

            default:
                console.log(n);
        }
    }
}

divisible(100)

//2 2. Create a table of 3 of your favorite television shows, including the name of the show, favorite actor/actress, where it plays (netflix, cable, etc.), and the genre.
// - Run a query to print all of the show names.

CREATE TABLE shows (
    ID INT Primary Key auto_increment not null,

    show_name VARCHAR(50),
    show_actors VARCHAR(100),
    platform VARCHAR(20),
    genre VARCHAR(20)
);


INSERT INTO shows VALUES (null, 'Avatar: The Last Airbender', 'Mako Iwamatsu', 'Nickelodeon', 'cartoon');

INSERT INTO shows VALUES (null, 'Naruto', 'Yōichi Masukawa', 'Crunchyroll', 'Anime');

INSERT INTO shows VALUES (null, 'Start-Up', 'Kim Seon-ho', 'Netflix', 'k-drama');

SELECT * FROM shows;


// 3. Create a table of your favorite actor/actress from each tv show chosen. Include his or her first name, last name, tv show, and name of character played.
// -Run a query to print the character names.

CREATE TABLE actors (
    ID INT Primary Key auto_increment not null,

    first_name VARCHAR(50),
    last_actors VARCHAR(50),
    show_name VARCHAR(20),
    character_played VARCHAR(20)
);

INSERT INTO actors VALUES (null, 'Mako', 'Iwamatsu', 'Avatar: TLA', 'Iroh');

INSERT INTO actors VALUES (null, 'Yoichi', 'Masukawa', 'Naruto', 'Rock Lee');

INSERT INTO actors VALUES (null, 'Kim', 'Seon-ho', 'Start-Up', 'Han Ji-pyeong');

SELECT * FROM actors;



