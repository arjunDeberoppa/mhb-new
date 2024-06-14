var quiz = {
  custom: [
    {
      id: 1,
      question: "Select your gender",
      options: ["Male", "Female", "Others"],
    },
    {
      id: 2,
      question: "Do you hold a certification already?",
      options: ["Yes", "No"],
    },
    {
      id: 3,
      question: "What do you intend to do with this certification?",
      options: ["Become a fitness coach", "Want to upskill", "Others"],
    },
    {
      id: 4,
      question: "Working experience (Health and Fitness)",
      options: ["0-1 Years", "2-4 Years", "5-10 Years", "10+ Years"],
    },
  ],
};

var quizApp = function () {
  this.currentQuestion = 0;
  var totalQuestions = quiz.custom.length;

  this.displayQuiz = function (currentQuestion) {
    this.currentQuestion = currentQuestion;
    if (this.currentQuestion < totalQuestions) {
      $("#tque").html(totalQuestions);
      $("#previous").attr("disabled", currentQuestion <= 0);
      $("#next").attr("disabled", currentQuestion >= totalQuestions - 1);
      $("#qid").html(quiz.custom[this.currentQuestion].id + ".");

      $("#question").html(quiz.custom[this.currentQuestion].question);
      $("#question-options").html("");
      for (
        var i = 0;
        i < quiz.custom[this.currentQuestion].options.length;
        i++
      ) {
        $("#question-options").append(
          "<div class='form-check option-block'>" +
            "<label class='form-check-label'>" +
            "<input type='radio' class='form-check-input' name='option' id='q" +
            i +
            "' value='" +
            quiz.custom[this.currentQuestion].options[i] +
            "'><span id='optionval'>" +
            quiz.custom[this.currentQuestion].options[i] +
            "</span></label>"
        );
      }
    }
  };

  this.changeQuestion = function (change) {
    this.displayQuiz(this.currentQuestion + change);
  };
};

var customQuiz = new quizApp();

$(document).ready(function () {
  customQuiz.displayQuiz(0);

  $("#question-options").on(
    "change",
    "input[type=radio][name=option]",
    function (e) {
      $(this).prop("checked", true);
    }
  );
});

$("#next").click(function (e) {
  e.preventDefault();
  customQuiz.changeQuestion(1);
});

$("#previous").click(function (e) {
  e.preventDefault();
  customQuiz.changeQuestion(-1);
});
