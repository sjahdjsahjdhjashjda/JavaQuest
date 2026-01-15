let xp = 0;
let level = 1;
const maxXP = 100;

function gainXP() {
    xp += 25;

    if (xp >= maxXP) {
        xp = 0;
        level++;
        alert("🎉 Level Up! Level " + level);
    }

    document.getElementById("xp-bar").style.width = (xp / maxXP * 100) + "%";
    document.getElementById("xp-text").innerText =
        `XP: ${xp} / ${maxXP} (Level ${level})`;
        
        function startLearning() {
    window.location.href = "quiz.html";
}

}
