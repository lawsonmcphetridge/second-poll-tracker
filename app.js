// import functions and grab DOM element
const newPollEl = document.getElementById('new-poll');
const startPollButton = document.getElementById('start-poll-button');
const currentPollContainer = document.getElementById('current-poll-container');
const optionAaddButton = document.getElementById('option-a-add-button');
const optionASubtractButton = document.getElementById('option-a-subtract-button');
const optionBAddButton = document.getElementById('option-b-add-button');
const optionBSubtractButton = document.getElementById('option-b-subtract-button');
const finishPollButton = document.getElementById('finish-poll-button');

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
  const userOptionA = data.get('optionA');
  const userOptionB = data.get('optionB');
  question = userQuestion;
  optionA = userOptionA;
  optionB = userOptionB;
  
  displayCurrentPoll();
});

optionAaddButton.addEventListener('click', () => {

})

optionASubtractButton.addEventListener('click', () => {
    
});

optionBAddButton.addEventListener('click', () => {
    
});

optionBSubtractButton.addEventListener('click', () => {
   
});

finishPollButton.addEventListener('click', () => {
  
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
  const currentPollData = renderPoll(question, optionA, optionB, votesA, votesB);
  currentPollContainer.append(currentPollData);
}


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


// what will we need for renderPoll? a button to submit and put the info on the screen, a div a current game div, 