// create dictionary of items 
// (I really should be using a separate file for this but it's probably beyond our comprehension in the course right now)
const listOfQuestions={ 
// capital cities
1:["What is the capital city of Canada?","ottawa","Six letters"], 
2:["What is the capital city of England?","london","One exists in Halifax too!"], 
3:["What is the capital city of Brazil?", "brasilia","-ia"],
4:["What is the capital city of Germany?", "berlin","wall"],
5:["What is the capital city of Norway?", "oslo","slow"],
6:["What is the capital city of Portugal?", "lisbon","l is good"],
7:["What is the capital city of Poland?", "warsaw","I just saw a war"],
8:["What is the capital city of Qatar?", "doha","verb? HA!"],
9:["What is the capital city of Ukraine?", "kiev", "Key"],
10:["What is the capital city of New Zealand?", "wellington","Gordon Ramsay's Beef ____"],
11:["What is the capital city of Australia?", "canberra","starts with 'can'"],
12:["What is the capital city of Belgium?", "brussels","sprout?"],
13:["What is the capital city of Bulgaria?", "sofia","Sophia!"],
14:["What is the capital city of South Korea?", "seoul","Kia Soul"],
15:["What is the capital city of India?", "new delhi","It's pretty new"],
16:["What is the capital city of Chile?", "santiago","Thiago Silva"],
17:["What is the capital city of Argentina?", "buenos aires","Good Aires"],
18:["What is the capital city of Denmark?", "copenhagen","Cop and Hag and"],
19:["What is the capital city of Egypt?", "cairo","C___o"],
20:["What is the capital city of Finland?", "helsinki","HEL is their airport marker"],
// tech companies' CEOs
21:["Who is the current CEO of Apple? (first and last name)", "tim cook","Probably wants to become a cook"],
22:["Who is the current CEO of Microsoft? (first and last name)", "satya nadella","Sounds like Nutella"],
23:["Who is the current CEO of Facebook? (first and last name)", "mark zuckerberg","The ZUCC"],
24:["Who is the current CEO of SpaceX? (first and last name)", "elon musk","Elongated Muskrat"],
25:["Who is the current CEO of Amazon? (first and last name)", "jeff bezos","My name is Jeff"],
26:["Who is the current CEO of Twitter? (first and last name)", "jack dorsey","I endorse this"],
27:["Who is the current CEO of YouTube? (first and last name)", "susan wojcicki","Wojcicki"],
28:["Who is the current CEO of Spotify? (first and last name)", "daniel ek","EEK!"],
29:["Who is the current CEO of IBM? (first and last name)", "arvind krishna","Chris... nah"],
30:["Who is the current CEO of Google? (first and last name)", "sundar pichai","3.14159 Chai"],
// webdev
31:["What does HTML stand for?", "hyper text markup language","Super Words Markup Language"],
32:["What does CSS stand for?", "cascading style sheets","Cascade"],
33:["What does JS stand for?", "javascript","__script"],
34:["What HTML tag is used for a line break?", "<br>","brrrrr im cold"],
35:["What HTML tag is used to make a list?", "<li>","no 'st'"],
36:["Which CSS property changes the background image?", "background-image","Dashing through the..."],
37:["Which CSS selector is used to select elements when the cursor is on top? ", ":hover", "I'm hovering!"],
38:["&lt;img&gt; is a(n) _____ element", "inline","__ Skating"],
39:["&lt;div&gt; is a(n) _____ element", "block", "Lego"],
40:["&lt;p&gt; is a(n) _____ element", "block", "Lego"],
// course info
41:["What four number digit identify this course?", "1170","double one - seven"],
42:["What is the last name of the professor teaching this course?", "sampangi","if you don't know, then we're disappointed"],
43:["Who is the best super hero in Marvel Universe?", "black panther","R.I.P."],
// canada
44:["Who is current the Prime Minister of Canada? (first and last name)", "justin trudeau","Real Water"],
45:["Who was the first Prime Minister of Canada? (first and last name)", "john macdonald","Old macdonald had a farm"],
46:["What is the capital of Nova Scotia?", "halifax","if you don't know, then we're disappointed"],
47:["What is the territory located right above British Columbia?", "yukon","Are you conning me?"],
48:["What province is between Manitoba and Alberta?", "saskatchewan","Catch"],
49:["What province is Dalhousie University in?", "nova scotia","if you don't know, then we're disappointed"],
50:["Canada is _____ years old as of 2020", "153","1867"],
};
// Variables
var random;
var gotRight = 0;
var played = 0;
var name = "";
var percentage;
// Randoms
let danielRandom = `Daniel Kang: ${Math.floor(Math.random() * 11) * 10}%`;
let basmalaRandom = `Basmala Kamal: ${Math.floor(Math.random() * 11) * 10}%`;
let nifemiRandom = `Nifemi Akomolafe: ${Math.floor(Math.random() * 11) * 10}%`;
let katelynRandom = `Katelyn Hoeg: ${Math.floor(Math.random() * 11) * 10}%`;
let saifRandom = `Saif Al Azri: ${Math.floor(Math.random() * 11) * 10}%`;

// Take a random question and show it. Update the played counter.
function displayRandomQ() {
    random = Math.floor(Math.random() * Object.keys(listOfQuestions).length) + 1;
    document.getElementById("Q").innerHTML = (listOfQuestions[random])[0];
    document.getElementById("the-Game").style.backgroundColor = "cyan";
    played++;
    document.getElementById("N").innerHTML = `${played}/10`
    document.getElementById("H").style.display = "none";
}

// Show the hints of the question
function showHint() {
    document.getElementById("H").style.display = "inline-block";
    document.getElementById("H").innerHTML = (listOfQuestions[random])[2];
}

// If user gets the answer right, display green background
// Otherwise, display red background
function userAnswer() {
    if (document.getElementById("Q1-Answer").value.toLowerCase() == (listOfQuestions[random])[1]) {
        document.getElementById("the-Game").style.backgroundColor = "green";
        document.getElementById("Q1-Answer").value = "";
        document.getElementById("H").style.display = "block";
        document.getElementById("H").innerHTML = (listOfQuestions[random])[1];
        gotRight++;
    }
    else {
        document.getElementById("the-Game").style.backgroundColor = "red";
        document.getElementById("Q1-Answer").value = "";
        document.getElementById("H").style.display = "block";
        document.getElementById("H").innerHTML = (listOfQuestions[random])[1];
    }

    // If there are no more questions, call the end game function
    if (played == 10) {
        displayEndGame()
        setTimeout(gameEnd, 60000);
    }
    else {
        setTimeout(displayRandomQ, 2000);
    }
}

// If the game is over, display score and change background colour to yellow
function displayEndGame() {
    document.getElementById("the-Game").style.backgroundColor = "yellow"; 
    percentage = gotRight * 10;
    document.getElementById("Q").innerHTML = `You got ${percentage}%!`;
    document.getElementById("H").innerHTML = "To save your score, please input your name!"
    document.getElementById("Q1-name-btn").style.display = "block";

    // if perfect score, display confetti
    if (percentage == 100) {
        document.getElementById("the-Game").style.backgroundImage = "url(img/confetti.gif)"; // Image taken from IN MOTIONS (2)
    }
}

// When game is over, display a Thank You message
function gameEnd() {
    document.getElementById("Q1-name-btn").style.display = "none";
    document.getElementById("Q1-Answer").style.display = "none";
    document.getElementById("Q1-hint-btn").style.display = "none";
    document.getElementById("Q1-submit-btn").style.display = "none";
    document.getElementById("Q").innerHTML = `Thanks for playing!`;
    document.getElementById("Q").style.gridRow = "3/4";
    document.getElementById("H").style.display = "none";

    if (document.getElementById("Q1-Answer").value != "") {
        updateName(document.getElementById("Q1-Answer").value);
    }
}

// Update leaderboards at the start of the HTML Load
function updateLeaderboards() {
    document.getElementById("daniel-score").innerHTML = danielRandom;
    document.getElementById("basmala-score").innerHTML = basmalaRandom;
    document.getElementById("nifemi-score").innerHTML = nifemiRandom;
    document.getElementById("katelyn-score").innerHTML = katelynRandom;
    document.getElementById("saif-score").innerHTML = saifRandom;
    document.getElementById("user-score").innerHTML = "<i>This could be you soon...</i>";
}

// Updates the leaderboard with the custom username of the visitor
function updateName(nameOfUser) {
    document.getElementById("user-score").innerHTML = `${nameOfUser}: ${percentage}%`;
}