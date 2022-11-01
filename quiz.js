const root = document.querySelector("#root");

//
function shuffle(arr, numberOfShuffles) {
  for (i = 0; i < numberOfShuffles; i++) {
    const shufle = Math.floor(Math.random() * arr.length);
    const anotherRandomNum = Math.floor(Math.random() * arr.length);
    let c = arr[anotherRandomNum];
    arr[anotherRandomNum] = arr[shufle];
    arr[shufle] = c;
  }
}

shuffle(questions, 10000);

function displayQuestion(question) {
  const containerDiv = document.createElement("div");
  //
  const questionsText = document.createElement("p");
  questionsText.classList.add("questionsText");
  questionsText.innerText = question.question;
  //
  containerDiv.appendChild(questionsText);
  //
  for (i = 0; i < question.answers.length; i++) {
    const answer = document.createElement("button");
    answer.classList.add("btn");
    answer.innerText = question.answers[i];
    answer.addEventListener("click", (e) =>
      modal(e, question.answers[question.correctIndex])
    );
    //
    containerDiv.appendChild(answer);
  }

  //
  root.appendChild(containerDiv);
}

displayQuestion(questions[0]);

function modal(event, correctAnswer) {
  //
  const modalBox = document.createElement("dialog");
  modalBox.classList.add("modalBox");
  //
  const textModal = document.createElement("h3");
  textModal.classList.add("textModal");
  textModal.innerText = "Is that your final answer ?";
  modalBox.appendChild(textModal);
  //
  const yesIamSure = document.createElement("button");
  yesIamSure.classList.add("yesBtn");
  yesIamSure.innerText = "Yes";
  yesIamSure.addEventListener("click", () =>
    checkAnswer(event.target, correctAnswer)
  );
  //
  const noIamNotSure = document.createElement("button");
  noIamNotSure.classList.add("noBtn");
  noIamNotSure.innerText = "No";
  noIamNotSure.addEventListener("click", () => modalBox.close());
  //
  modalBox.appendChild(yesIamSure);
  modalBox.appendChild(noIamNotSure);
  root.appendChild(modalBox);
  modalBox.showModal();
}

function checkAnswer(element, answer2) {
  const answer1 = element.innerText;
  if (answer1 === answer2) {
    answer2 = document.answer2.style.backgroundColor = "green";
    yesIamSure.addEventListener("click", modalBox.close());
  } else {
    answer1 = document.body.style.backgroundColor = "red";
  }
}
//dodaje se klasa  crveno/zeleno
// var timeLeft = 30; //TAJMER !!! (Zavrsiti f-ju kad istekne vreme !!!)
// var elem = document.getElementById("taimer-div");

// var timerId = setInterval(countdown, 1000);

// function countdown() {
//   if (timeLeft == -1) {
//     clearTimeout(timerId);
//     doSomething();
//   } else {
//     elem.innerHTML = timeLeft + " seconds remaining";
//     timeLeft--;
//   }
// }
