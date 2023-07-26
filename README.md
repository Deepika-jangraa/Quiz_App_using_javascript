# Quiz_App_using_javascript
Quiz Application
This is a simple quiz application built with HTML, CSS, and JavaScript. The application presents a series of questions to the user, allows them to select answers, and displays their score at the end. Optionally, it provides feedback in the form of GIFs for winning and losing the game.

Quiz Application Screenshot

Features
Presents a set of quiz questions with multiple-choice options.
Calculates and displays the user's score at the end of the quiz.
Optional feedback with GIFs for winning and losing the game.
Allows the user to attempt the quiz again with the "Try Again" button.
Getting Started
To run the quiz application locally, follow these steps:

Clone the repository or download the ZIP file.

Open the index.html file in your web browser.

The quiz will start with the first question. Select your answer by clicking on the option buttons.

After completing all the questions, the "Submit" button will display the result, including the score and optional GIF feedback.

To attempt the quiz again, click the "Try Again" button, and the quiz will restart from the first question.

Customize the Quiz
To customize the quiz questions and options, you can modify the quizData array in the script.js file. Each question object in the array must have the following format:

javascript
Copy code
{
  question: 'Your question here',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  correct: 'Correct Option' // Replace with the correct option from the options array
}
You can also replace the winning and losing GIFs with your own by updating the URLs in the showResult() function.

Dependencies
The quiz application has no external dependencies and can run on any modern web browser.

License
This project is licensed under the deepika jangra License.

Author
Deepika jangra - github.com/Deepika-jangraa
