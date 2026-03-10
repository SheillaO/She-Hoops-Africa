//HOME POINTS//
let mypoints = 0
let pointsEl = document.getElementById("points-el")

function add1point() {
    mypoints += 1
    pointsEl.textContent = mypoints
    updateLeadingTeam()
}

function add2point() {
    mypoints += 2
    pointsEl.textContent = mypoints
    updateLeadingTeam()
}

function add3point() {
    mypoints += 3
    pointsEl.textContent = mypoints
    updateLeadingTeam()
}

//GUEST POINTS//
let mypoint = 0
let pointEl = document.getElementById("point-el")

function add1points() {
    mypoint += 1
    pointEl.textContent = mypoint
    updateLeadingTeam()
}

function add2points() {
    mypoint += 2
    pointEl.textContent = mypoint
    updateLeadingTeam()
}

function add3points() {
    mypoint += 3
    pointEl.textContent = mypoint
    updateLeadingTeam()
}

// NEW FEATURE: Highlight leading team in gold
function updateLeadingTeam() {
    // Remove winning class from both
    pointsEl.classList.remove("winning")
    pointEl.classList.remove("winning")
    
    // Add winning class to leader
    if (mypoints > mypoint) {
        pointsEl.classList.add("winning")
    } else if (mypoint > mypoints) {
        pointEl.classList.add("winning")
    }
    // If tied, no one gets highlighted
}

// NEW FEATURE: Check winner and announce
function checkWinner() {
    if (mypoints > mypoint) {
        alert("🏆 HOME TEAM WINS! 🏆\n\nFinal Score:\nHOME: " + mypoints + " | GUEST: " + mypoint + "\n\nCongratulations!")
    } else if (mypoint > mypoints) {
        alert("🏆 GUEST TEAM WINS! 🏆\n\nFinal Score:\nHOME: " + mypoints + " | GUEST: " + mypoint + "\n\nCongratulations!")
    } else {
        alert("🤝 IT'S A TIE! 🤝\n\nFinal Score:\nHOME: " + mypoints + " | GUEST: " + mypoint + "\n\nWhat a close game!")
    }
}

// Save function: track each round separately
let homeRounds = []
let guestRounds = []
let saveEl = document.getElementById("save-el")

function save() {
    // Push current scores into arrays
    homeRounds.push(mypoints)
    guestRounds.push(mypoint)

    // Build a string to display each round
    saveEl.textContent = ""
    for (let i = 0; i < homeRounds.length; i++) {
        saveEl.textContent += `Round ${i+1} - HOME: ${homeRounds[i]}, GUEST: ${guestRounds[i]} | `
    }
}

function newGame() {
    // Reset HOME and GUEST points
    mypoints = 0
    mypoint = 0
    
    // Update UI
    pointsEl.textContent = mypoints
    pointEl.textContent = mypoint
    
    // Remove winning highlights
    pointsEl.classList.remove("winning")
    pointEl.classList.remove("winning")
}
