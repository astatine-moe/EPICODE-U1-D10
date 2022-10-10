const movies = require("./movies"); //to clean the code, import it from another file

let exercise = 0;
const log = (...logs) => {
    console.log(`------------------ Exercise ${++exercise} ------------------`);
    console.log(...logs, "\n");
};
const logAlphabet = (letter, ...logs) => {
    console.log(
        `------------------ Exercise ${letter.toUpperCase()} ------------------`
    );
    console.log(...logs, "\n");
};

//!Exercise A
let test = "Hello World";
logAlphabet("a", "test variable:", test);

//!Exercise B
let sum = 10 + 20;
logAlphabet("b", "sum:", sum);

//!Exercise C
let random = Math.random() * 20; //random number between 0 and 20
logAlphabet("c", "random:", random);

//!Exercise D
let me = {
    name: "Morgan",
    surname: "Evans",
    age: 23,
};
logAlphabet("d", me);

//!Exercise E
delete me.age;
logAlphabet("e", me);

//!Exercise F
me.skills = ["javascript", "php", "python", "c#", "lua"];
logAlphabet("f", me.skills);

//!Exercise G
let lastSkill = me.skills.pop(); //remove last item and return it
logAlphabet("g", "removed", lastSkill, "from the skills array");

//!Exercise 1
const dice = () => {
    return Math.floor(Math.random() * 6 + 1);
};
log("you rolled:", dice());

//!Exercise 2
const whoIsBigger = (num1, num2) => {
    return Math.max(num1, num2);
};
log("who is bigger 1052 or 5261?", whoIsBigger(1052, 5261));

//!Exercise 3
const splitMe = (str) => {
    return str.split(" ");
};
let textToSplit = "This will be split";
log(textToSplit, "-", splitMe(textToSplit));

//!Exercise 4
const deleteOne = (str, removeFirstLetter = false) => {
    if (removeFirstLetter) {
        return `${str.slice(1)}`;
    } else {
        return str.slice(0, -1);
    }
};

log(deleteOne("Hello World", true), "\n", deleteOne("Hello World", false));

//!Exercise 5
const onlyLetters = (str) => {
    return str.replace(/[0-9]/g, "");
};
let strToRemoveNumbers = "It's currently 11:00am";
log(strToRemoveNumbers, "->", onlyLetters(strToRemoveNumbers));

//!Exercise 6
const isThisAnEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
let emailToCheck = "hello@hello.com";
log(
    emailToCheck,
    "->",
    isThisAnEmail(emailToCheck) ? "Valid email" : "Invalid email"
);

//!Exercise 7
const whatDayIsIt = () => {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    return days[new Date().getDay()];
};
log("Today is a", whatDayIsIt());

//!Exercise 8
const rollTheDices = (times) => {
    let rolls = [];
    let sum = 0;
    for (let i = 0; i < times; i++) {
        let roll = dice();
        sum += roll;
        rolls.push(roll);
    }

    return { rolls, sum };
};

log("Rolling the dice 4 times", "->", rollTheDices(4));

//!Exercise 9
const howManyDays = (date) => {
    let today = new Date();
    let difference = today.getTime() - date.getTime();
    return Math.floor(difference / (1000 * 3600 * 24));
};
log(
    "How many days since 1st January 2005?",
    "->",
    howManyDays(new Date(2005, 0, 1))
);

//!Exercise 10
const isTodayMyBirthday = (birthday) => {
    let today = new Date();

    if (
        today.getDate() === birthday.getDate() &&
        today.getMonth() === birthday.getMonth()
    ) {
        return true;
    } else {
        return false;
    }
};
let myBirthday = new Date(1999, 8, 9);
log(
    "Is it my birthday today?",
    "-",
    myBirthday.toDateString(),
    "->",
    isTodayMyBirthday(myBirthday) ? "Yes! Happy Birthday!" : "No"
);

//!Exercise 11
const deleteProp = (obj, prop) => {
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
    }

    return obj;
};
let objToDelete = {
    title: "Forget",
    artist: "Pogo",
    tags: ["Test1", "test2", "test3"],
};

log("Deleting prop tags", deleteProp(objToDelete, "tags"));

//!Exercise 12
const oldestMovie = (arr) => {
    let oldest = arr[0].Year;
    let movie = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].Year < oldest) {
            oldest = arr[i].Year;
            movie = arr[i];
        }
    }

    return movie;
};
let theOldestMovie = oldestMovie(movies);
log(
    "Oldest movie is",
    theOldestMovie.Title,
    "was made in",
    theOldestMovie.Year
);

//!Exercise 13
const countMovies = (arr) => {
    return arr.length;
};
log("There are", countMovies(movies), "movies");

//!Exercise 14
const onlyTheTitles = (arr) => {
    let titles = [];
    for (let i = 0; i < arr.length; i++) {
        titles.push(arr[i].Title);
    }

    return titles;
};
log("Only titles:", onlyTheTitles(movies));

//!Exercise 15
const onlyInThisMillennium = (arr) => {
    let movies = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].Year >= 2000) {
            movies.push(arr[i]);
        }
    }
    return movies;
};
log(
    "Movies only in this millennium:",
    onlyTheTitles(onlyInThisMillennium(movies))
);

//!Exercise 16
const getMovieById = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].imdbID == id) {
            return arr[i];
        }
    }
};
let idToSearch = "tt2395427";
log(
    "Searching",
    idToSearch,
    "in movies ->",
    getMovieById(movies, idToSearch).Title
);

//!Exercise 17
const sumAllTheYears = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i].Year);
    }
    return sum;
};

log("Sum of all the years:", sumAllTheYears(movies));

//!Exercise 18
const searchByTitle = (arr, str) => {
    let movies = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].Title.toLowerCase().includes(str.toLowerCase())) {
            movies.push(arr[i]);
        }
    }
    return movies;
};

log(
    "Searching by title 'avengers':",
    onlyTheTitles(searchByTitle(movies, "avengers"))
);

//!Exercise 19
const searchAndDivide = (arr, str) => {
    let match = [];
    let unmatch = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].Title.toLowerCase().includes(str.toLowerCase())) {
            match.push(arr[i]);
        } else {
            unmatch.push(arr[i]);
        }
    }

    return {
        match,
        unmatch,
    };
};
let searchAndDivideObj = searchAndDivide(movies, "avengers");
log(
    `Match: ${searchAndDivideObj.match.length} movies. Unmatch: ${searchAndDivideObj.unmatch.length} movies.`
);

//!Exercise 20
const removeIndex = (arr, index) => {
    arr = arr.slice(0, index).concat(arr.slice(index + 1));
    return arr;
};
log("Removing index 2", onlyTheTitles(removeIndex(movies, 2)));
//!Exercise 21
const halfTree = (rows) => {
    let str = ``;
    let horizontal = 1;
    for (let i = 0; i < rows; i++) {
        str += `*`.padEnd(horizontal++, "*") + "\n";
    }

    return str;
};

log(halfTree(5));

//!Exercise 22
const tree = (rows) => {
    let str = ``;

    for (let i = 0; i < rows; i++) {
        str += ` `.repeat(rows - i) + `*`.repeat(i * 2 + 1) + `\n`;
    }

    //let's see if we can add a trunk
    let trunk = Math.floor(rows / 3);
    for (let i = 0; i < trunk; i++) {
        str += ` `.repeat(rows - trunk) + `*`.repeat(trunk * 2 + 1) + `\n`;
    }

    return str;
};

log(tree(10));

//!Exercise 23
const isItPrime = (num) => {
    // a prime number is only divisible by itself, e.g % 1 and % itself
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

log("Is 7 prime?", "->", isItPrime(3) ? "Yes" : "No");
