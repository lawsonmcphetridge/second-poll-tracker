// import functions and grab DOM element
const newPollEl = document.getElementById('new-poll');
const startPollButton = document.getElementById('start-poll-button');
const currentPollContainer = document.getElementById('current-poll-container');
const optionAaddButton = document.getElementById('option-a-add-button');
const optionASubtractButton = document.getElementById('option-a-subtract-button');
const optionBAddButton = document.getElementById('option-b-add-button');
const optionBSubtractButton = document.getElementById('option-b-subtract-button');
const finishPollButton = document.getElementById('finish-poll-button');
const pastPollContainer = document.getElementById('past-poll-container');

// let state
let pastPolls = [];
let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;
// set event listeners 
newPollEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(newPollEl);
  const userQuestion = data.get('question');
  const userOptionA = data.get('option-A');
  const userOptionB = data.get('option-B');
  question = userQuestion;
  optionA = userOptionA;
  optionB = userOptionB;
  displayCurrentPoll();
});

optionAaddButton.addEventListener('click', () => {
  displayCurrentPoll();
  votesA++;
})

optionASubtractButton.addEventListener('click', () => {
  displayCurrentPoll();
  votesA--;
});

optionBAddButton.addEventListener('click', () => {
  displayCurrentPoll();
  votesB++;
});

optionBSubtractButton.addEventListener('click', () => {
  displayCurrentPoll();
  votesB--;
});

finishPollButton.addEventListener('click', () => {
  currentPollContainer.textContent = '';
  displayPastPolls();
})




function renderPoll(question, optionA, optionB, votesA, votesB) {
  const currentPollEl = document.createElement('div');
  const questionEl = document.createElement('p');
  const userOptionA = document.createElement('p');
  const userOptionB = document.createElement('p');
  const votesAEl = document.createElement('p');
  const votesBEl = document.createElement('p');
  questionEl.textContent = question;
  userOptionA.textContent = optionA;
  userOptionB.textContent = optionB;
  votesAEl.textContent = votesA;
  votesBEl.textContent = votesB;

  currentPollEl.append(questionEl, userOptionA, userOptionB, votesAEl, votesBEl);

  return currentPollEl;
}


function displayCurrentPoll() {
  newPollEl.reset();
  currentPollContainer.textContent = '';
  const currentPollData = renderPoll(question, optionA, optionB, votesA, votesB);
  currentPollContainer.append(currentPollData);

}


function displayPastPolls() {
  const pastPoll = {
    question: question,
    optionA: optionA,
    optionB: optionB,
    votesA: votesA,
    votesB: votesB,
  };

  pastPolls.push(pastPoll);
  for (let poll of pastPolls) {
    const currentPastPoll = renderPoll(poll.question, poll.optionA, poll.optionB, poll.votesA, poll.votesB);
    pastPollContainer.append(currentPastPoll);
  }
}





  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


// what will we need for renderPoll? a button to submit and put the info on the screen, a div a current game div, 