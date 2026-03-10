🏀 She Hoops Africa - Basketball Scoreboard

An interactive basketball scoreboard celebrating African women in basketball and promoting youth sports development across the continent. Built to highlight NBA Africa's mission of empowering communities through basketball, innovation, and financial literacy.

<img width="1282" height="857" alt="She Hoops Africa" src="https://github.com/user-attachments/assets/c53b0eeb-6b69-4860-a2fa-585a3d14784d" />


🚀 Live Demo

View Live Demo <https://shehoopsafrica.netlify.app/>

🌟 Mission
She Hoops Africa is dedicated to:

🏀 Celebrating African women basketball players
👧 Promoting youth basketball programs across Africa
💡 Highlighting NBA Africa's Innovation Hub and partnerships
🌍 Supporting tech innovation and financial literacy initiatives

🎯 Why This Project Matters
This scoreboard celebrates NBA Africa's continent-wide impact:

Basketball Without Borders (BWB) camps
Jr. NBA programs in 16+ African countries
Financial literacy partnerships (including M-PESA in Kenya)
Innovation Hub: $70K tech startup accelerator program
Girls' basketball development programs

✨ Features

Live Score Tracking: Real-time HOME vs GUEST scoring
Winner Announcement: Automatic winner detection with alerts
Leading Team Highlight: Winning team's score turns gold
Featured Players: Showcase 6 African women basketball players
Game History: Track and save multiple rounds
New Game Reset: Quick game restart
Responsive Design: Works on desktop, tablet, and mobile

🛠️ Technologies Used

HTML5
CSS3 (Flexbox, Gradients, CSS Variables)
Vanilla JavaScript (ES6)
Google Fonts (Inter)

🎨 Design
Built with NBA Africa's official color palette:

Science Blue (#1D428A) - Innovation and trust
Red (#C8102E) - Energy and passion
Gold (#FDB927) - Excellence and achievement
Black (#000000) - Strength and power
White (#FFFFFF) - Clarity and openness

## 📝 How It Works

### Score Tracking
- Click **+1**, **+2**, or **+3** buttons to add points
- Leading team's score automatically highlights in **gold**
- Real-time updates with smooth visual feedback

### Featured Players System
```javascript
let players = [
    "Evelyn Akhator (Nigeria) - WNBA Player",
    "Zahra Baitie (Ghana) - Professional Player",
    // ... 6 total players
]

function showPlayer() {
    playerEl.textContent = "⭐ Featured: " + players[currentPlayer]
    currentPlayer += 1
    if (currentPlayer >= players.length) {
        currentPlayer = 0  // Cycle back to start
    }
}
```

### Winner Detection
```javascript
function checkWinner() {
    if (mypoints > mypoint) {
        alert("🏆 HOME TEAM WINS! 🏆")
    } else if (mypoint > mypoints) {
        alert("🏆 GUEST TEAM WINS! 🏆")
    } else {
        alert("🤝 IT'S A TIE! 🤝")
    }
}
```

### Dynamic Highlighting
```javascript
function updateLeadingTeam() {
    pointsEl.classList.remove("winning")
    pointEl.classList.remove("winning")
    
    if (mypoints > mypoint) {
        pointsEl.classList.add("winning")  // Gold color!
    } else if (mypoint > mypoints) {
        pointEl.classList.add("winning")
    }
}
```

## 🎓 What I Learned

This project helped me practice:
- **DOM Manipulation**: Using `getElementById()`, `classList.add()`, and `classList.remove()`
- **Arrays**: Storing and cycling through player names
- **Conditional Logic**: `if/else` statements for game rules
- **Event Handling**: `onclick` events for user interaction
- **Loops**: Using `for` loops to display game history
- **String Concatenation**: Building dynamic messages
- **CSS Variables**: Organizing color themes
- **Responsive Design**: Mobile-first approach with flexbox

## 🌟 Featured African Women Players

The scoreboard showcases these amazing athletes:
- **Evelyn Akhator** (Nigeria) - WNBA Player
- **Zahra Baitie** (Ghana) - Professional Player
- **Janeth Arcain** (Senegal) - Basketball Star
- **Aya Traoré** (Mali) - Rising Star
- **Ezinne Kalu** (Nigeria) - National Team Captain
- **Aïssata Maïga** (Mali) - Professional Player

## 🔮 Future Improvements

- [ ] Add shot clock timer (24 seconds)
- [ ] Team name customization
- [ ] Sound effects for scoring
- [ ] Fouls and timeouts tracking
- [ ] Player statistics database
- [ ] Multiple game modes (quarters, halves)
- [ ] Export game data to CSV
- [ ] More African women players profiles
- [ ] Multi-language support (French, Swahili, etc.)

## 🌍 NBA Africa Impact

NBA Africa operates across the continent with:
- **Basketball Without Borders (BWB)** - Elite camp program
- **Jr. NBA** - Youth league programs in 16+ countries
- **NBA Academy Africa** - Training elite prospects
- **Innovation Hub** - $70K tech startup accelerator
- **Partnerships** - M-PESA (Kenya), MTN, and more

### Innovation Hub Program
- **12-month Business Incubation Program**
- **Up to $70,000** in program value
- **Top 3 companies receive:** $10,000 in OpenAI API credits
- **Immersion experience** with OpenAI's engineering team
- Helps African tech startups scale from proof-of-concept to market-ready products

## 💪 Supporting Women in Basketball

African women's basketball is growing rapidly:
- Increased participation in youth programs
- More professional opportunities in international leagues
- Rising WNBA representation from Africa
- National team successes in continental competitions
- Grassroots programs making basketball accessible

## 👤 Author

**Olga**
- Role: Technical Product Marketing Manager
- GitHub: [@SheillaO](https://github.com/SheillaO)
- Mission: Promoting African women in basketball and technology

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- NBA Africa for inspiring innovation and sports development across the continent
- African women basketball players who are breaking barriers
- M-PESA and Safaricom for financial literacy initiatives in Kenya
- Youth basketball programs making the sport accessible
- The developer community supporting learning and growth

## 🔗 Resources

- [NBA Africa Official Website](https://www.nba.com/africa)
- [Basketball Without Borders](https://bwb.nba.com/)
- [Jr. NBA Programs](https://jr.nba.com/)
- [NBA Academy Africa](https://nbaacademy.nba.com/location/africa/)

---

⭐ **Star this project if you support women's basketball in Africa!**

💡 **Share it to inspire the next generation of African basketball stars!**

🏀 **#SheHoopsAfrica • #NBAfrica • #BasketballWithoutBorders**
