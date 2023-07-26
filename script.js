const quizData = [
    {
      question: "Q1: What is the capital of India?",
      options: ["Delhi", "London", "Paris", "Rome"],
      correct: "Delhi"
    },
    {
        question: "Q2: What is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Saturn", "Venus"],
        correct: "Jupiter"
    },
    {
        question: "Q3: India is a federal union comprising twenty-eight states and how many union territories?",
        options: ["6", "7", "8", "9"],
        correct: "8"a
    },
    {
        question: "Q4: Which of the following is the capital of Arunachal Pradesh?",
        options: ["Itanagar", "Dispur", "Imphal", "Panaji"],
        correct: "Itanagar"
    },
    {
        question: "Q5: In which of the following state, the main language is Khasi?",
        options: ["Mizoram", "Nagaland", "Megahalaya", "Tripura"],
        correct: "Megahalaya"
    },
    // Add more quiz questions in a similar format
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const tryAgainButton = document.getElementById("try-again");
  const resultElement = document.getElementById("result");
  const submitContainer = document.querySelector(".submit-container");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
      const currentQuestion = quizData[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      optionsElement.innerHTML = "";
      currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
      });
  
      // Show the "Submit" button for the current question
      submitButton.style.display = "none";
      resultElement.textContent = ""; // Clear the result message
  } else {
    // Hide the questions and options after all questions are answered
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    // Show the "Submit" button after all questions are answered
    submitButton.style.display = "block";
    // Show the "Try Again" button after all questions are answered
    tryAgainButton.style.display = "block";
    showResult();
    }
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
      score++;
    }
    currentQuestionIndex++;
    loadQuestion();
  }
  
  function showResult() {
    optionsElement.innerHTML = "";
    resultElement.textContent = `Your score: ${score}/${quizData.length}`;
    const winningThreshold = 5; // Set your desired threshold value here
    if (score >= winningThreshold) {
      // Show winning GIF
      if (!document.getElementById("winning-gif")) {
        resultElement.textContent += " - You are a winner!";
        // Replace with the URL of your winning GIF
        const winningGifUrl = "755t.gif";
        const gifImage = document.createElement("img");
        gifImage.id = "winning-gif";
        gifImage.src = winningGifUrl;
        document.body.appendChild(gifImage);
      }
    } else {
      // Show losing GIF only if not already displayed
      if (!document.getElementById("losing-gif")) {
        resultElement.textContent += " - You lost!";
        // Replace with the URL of your losing GIF
        const losingGifUrl = "nice-try-colorful.gif";
        const gifImage = document.createElement("img");
        gifImage.id = "losing-gif";
        gifImage.src = losingGifUrl;
        document.body.appendChild(gifImage);
      }
    }
  }

  function handleQuizSubmit() {
    submitContainer.style.display = "none";
    loadQuestion();
  }
  
  function handleTryAgain() {
    // Reset quiz state for a new attempt
    currentQuestionIndex = 0;
    score = 0;
    resultElement.textContent = "";
    tryAgainButton.style.display = "none"; // Hide the "Try Again" button
    questionElement.style.display = "block";
    optionsElement.style.display = "block";
    submitContainer.style.display = "block"; // Show the submit button container
    loadQuestion(); // Load the first question
  }

  submitButton.addEventListener("click", handleQuizSubmit);
  tryAgainButton.addEventListener("click", handleTryAgain);
  loadQuestion();
