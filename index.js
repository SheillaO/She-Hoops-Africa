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
  if (mypoints > mypoint) {
    alert(
      "🏆 HOME TEAM WINS! 🏆\n\nHOME: " + mypoints + " | GUEST: " + mypoint,
    );
  } else if (mypoint > mypoints) {
    alert(
      "🏆 GUEST TEAM WINS! 🏆\n\nHOME: " + mypoints + " | GUEST: " + mypoint,
    );
  } else {
    alert("🤝 IT'S A TIE! 🤝\n\nHOME: " + mypoints + " | GUEST: " + mypoint);
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
