//HOME POINTS//
let mypoints = 0;
let pointsEl = document.getElementById("points-el");

function add1point() {
  mypoints += 1;
  pointsEl.textContent = mypoints;
  updateLeadingTeam();
}

function add2point() {
  mypoints += 2;
  pointsEl.textContent = mypoints;
  updateLeadingTeam();
}

function add3point() {
  mypoints += 3;
  pointsEl.textContent = mypoints;
  updateLeadingTeam();
}

//GUEST POINTS//
let mypoint = 0;
let pointEl = document.getElementById("point-el");

function add1points() {
  mypoint += 1;
  pointEl.textContent = mypoint;
  updateLeadingTeam();
}

function add2points() {
  mypoint += 2;
  pointEl.textContent = mypoint;
  updateLeadingTeam();
}

function add3points() {
  mypoint += 3;
  pointEl.textContent = mypoint;
  updateLeadingTeam();
}

// Highlight leading team in gold
function updateLeadingTeam() {
  // Remove winning class from both
  pointsEl.classList.remove("winning");
  pointEl.classList.remove("winning");

  // Add winning class to leader
  if (mypoints > mypoint) {
    pointsEl.classList.add("winning");
  } else if (mypoint > mypoints) {
    pointEl.classList.add("winning");
  }
}

// Check winner
function checkWinner() {
    let homeName = document.getElementById("home-name").textContent
    let guestName = document.getElementById("guest-name").textContent
    
    if (mypoints > mypoint) {
        alert("🏆 " + homeName + " WINS! 🏆\n\n" + homeName + ": " + mypoints + " | " + guestName + ": " + mypoint)
    } else if (mypoint > mypoints) {
        alert("🏆 " + guestName + " WINS! 🏆\n\n" + homeName + ": " + mypoints + " | " + guestName + ": " + mypoint)
    } else {
        alert("🤝 IT'S A TIE! 🤝\n\n" + homeName + ": " + mypoints + " | " + guestName + ": " + mypoint)
    }
}

// Save function: track each round
let homeRounds = [];
let guestRounds = [];
let saveEl = document.getElementById("save-el");

function save() {
  homeRounds.push(mypoints);
  guestRounds.push(mypoint);

  saveEl.textContent = "";
  for (let i = 0; i < homeRounds.length; i++) {
    saveEl.textContent += `Round ${i + 1} - HOME: ${homeRounds[i]}, GUEST: ${guestRounds[i]} | `;
  }
}

function newGame() {
  mypoints = 0;
  mypoint = 0;

  pointsEl.textContent = mypoints;
  pointEl.textContent = mypoint;

  pointsEl.classList.remove("winning");
  pointEl.classList.remove("winning");
}

// Featured African Women Players
let players = [
  "Olivia Nelson-Ododa (Kenya) - WNBA LA Sparks",
  "Evelyn Akhator (Nigeria) - WNBA Player",
  "Zahra Baitie (Ghana) - Professional Player",
  "Janeth Arcain (Senegal) - Basketball Star",
  "Aya Traoré (Mali) - Rising Star",
  "Ezinne Kalu (Nigeria) - National Team Captain",
  "Aïssata Maïga (Mali) - Professional Player",
];

let playerEl = document.getElementById("featured-player");
let currentPlayer = 0;

function showPlayer() {
  playerEl.textContent = "⭐ Featured: " + players[currentPlayer];
  currentPlayer += 1;

  // Reset to start when we reach the end
  if (currentPlayer >= players.length) {
    currentPlayer = 0;
  }
}

// Set team names
function setTeamNames() {
    let homeName = prompt("Enter HOME team name:")
    let guestName = prompt("Enter GUEST team name:")
    
    document.getElementById("home-name").textContent = homeName
    document.getElementById("guest-name").textContent = guestName
}
