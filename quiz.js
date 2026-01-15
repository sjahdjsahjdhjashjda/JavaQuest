let qIndex = 0;

const quiz = [
    {
        q: "What is Java?",
        o: ["Programming language", "Browser", "OS", "Database"],
        a: 0
    },
    {
        q: "What does OOP stand for?",
        o: ["Object Oriented Programming", "Online Program", "Open Output", "None"],
        a: 0
    },
    {
        q: "Which package is used for GUI?",
        o: ["java.util", "java.sql", "javax.swing", "java.io"],
        a: 2
    },
    {
        q: "What is JDBC used for?",
        o: ["GUI", "Database", "Games", "Files"],
        a: 1
    }
];

function loadQ() {
    let q = quiz[qIndex];
    document.getElementById("question").innerText = q.q;
    document.getElementById("a1").innerText = q.o[0];
    document.getElementById("a2").innerText = q.o[1];
    document.getElementById("a3").innerText = q.o[2];
    document.getElementById("a4").innerText = q.o[3];
}

function checkAnswer(choice) {
    if (choice === quiz[qIndex].a) {
        alert("✅ Correct!");
    } else {
        alert("❌ Wrong!");
    }

    qIndex++;
    if (qIndex < quiz.length) {
        loadQ();
    } else {
        alert("🎉 Quiz Finished!");
    }
}

loadQ();
