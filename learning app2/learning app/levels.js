const levelsData = {
  level1: {
      questions: [
          "What is the English word for 'chien' in French?",
          "Choose the correct sentence:",
          "Which of the following is a color?",
          "What does 'hello' mean?",
          "Fill in the blank: I ___ a student.",
          "What is the plural of 'cat'?",
          "Which word means the opposite of 'big'?",
          "What is the English word for 'maison' in French?",
          "Choose the correct sentence:",
          "What is the correct order of words in a question?"
      ],
      answerChoices: [
          ["a) Cat", "b) Dog", "c) Fish", "d) Bird"],
          [
              "a) She is goes to school.",
              "b) He am play in the park.",
              "c) I am reading a book.",
              "d) They are do homework."
          ],
          ["a) Run", "b) Blue", "c) Jump", "d) Fast"],
          ["a) Goodbye", "b) Thank you", "c) Hello", "d) Yes"],
          ["a) am", "b) is", "c) are", "d) be"],
          ["a) Caties", "b) Cats", "c) Catz", "d) Catfish"],
          ["a) Small", "b) Tall", "c) Fast", "d) Bright"],
          ["a) House", "b) Car", "c) Tree", "d) School"],
          [
              "a) He can sings well.",
              "b) She can to dance.",
              "c) They can play soccer.",
              "d) I can goes home."
          ],
          [
              "a) Subject - Verb - Object",
              "b) Object - Verb - Subject",
              "c) Verb - Subject - Object",
              "d) Subject - Object - Verb"
          ]
      ],
      correctAnswers: [1, 2, 1, 2, 0, 1, 0, 0, 2, 2] // Index of correct options for each question
  }
};

let currentLevel = null;
let userAnswers = [];

function hideLevels() {
  document.getElementById("levelsContainer").classList.add("hidden");
}

function displayLevelQuestions(level) {
  hideLevels();
  const questionsContainer = document.getElementById("questionsContainer");
  questionsContainer.innerHTML = "";
  userAnswers = [];

  levelsData[level].questions.forEach((question, index) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");

      const questionDiv = document.createElement("div");
      questionDiv.textContent = question;
      cardDiv.appendChild(questionDiv);

      levelsData[level].answerChoices[index].forEach((choice, choiceIndex) => {
          const optionDiv = document.createElement("div");
          const radioBtn = document.createElement("input");
          radioBtn.type = "radio";
          radioBtn.name = `question${index}`;
          radioBtn.value = choiceIndex;
          optionDiv.appendChild(radioBtn);
          optionDiv.appendChild(document.createTextNode(choice));
          cardDiv.appendChild(optionDiv);
      });

      questionsContainer.appendChild(cardDiv);
  });

  document.getElementById("submitBtn").classList.remove("hidden");
}

// ... (previous code)

function validateAnswers() {
  const questions = document.querySelectorAll('input[type="radio"]:checked');

 

  userAnswers = Array.from(questions).map(question => parseInt(question.value));
  const correctAnswers = levelsData[currentLevel].correctAnswers;
  let correctCount = 0;

  userAnswers.forEach((userChoice, index) => {
      if (userChoice === correctAnswers[index]) {
          correctCount++;
      }
  });

  const score = Math.round((correctCount / correctAnswers.length) * 100);
  displayScorePopup(score);
}

function displayScorePopup(score) {
  console.log("Displaying score popup");

  const scoreMessageContainer = document.getElementById("scoreMessage");
  const popup = document.getElementById("scorePopup");

  if (score >= 70) {
      scoreMessageContainer.textContent = `Congratulations! Your score: ${score}%`;
  } else {
      scoreMessageContainer.textContent = `Try Again! Your score: ${score}%`;
  }

  popup.classList.remove("hidden");
}


document.querySelectorAll(".level-button").forEach(button => {
  button.addEventListener("click", () => {
      const level = button.textContent.toLowerCase().replace("level ", "level");
      displayLevelQuestions(level);
      document.getElementById("questionsContainer").classList.remove("hidden");
      document.getElementById("scorePopup").classList.add("hidden");
  });
});

document.getElementById("submitBtn").addEventListener("click", validateAnswers);
document.getElementById("closePopupBtn").addEventListener("click", () => {
  document.getElementById("scorePopup").classList.add("hidden");
});
