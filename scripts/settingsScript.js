import { participants, chosenWinner } from './dataParticipants.js';

const saveButton = document.querySelector('.save-button-js');
let settingsCheckboxEl = document.querySelector('.settings-checkbox-js');
const savedNotif = document.querySelector('.saved_notification');
const listContainerEl = document.querySelector('.js-list-container');
//===Winner variable when  when choosing radio button===
let winnerNameChanged;


export let savedDemoIsOn = JSON.parse(localStorage.getItem('setting'));
let timerId;

let checkboxStatement = settingsCheckboxEl.checked = savedDemoIsOn;

export { checkboxStatement };

let saveButtonListener = saveButton.addEventListener('click', () => {
  localStorage.setItem('setting', settingsCheckboxEl.checked);

  localStorage.setItem('chosenWinner', chosenWinner[0].personName);

  savedNotif.style.visibility = 'visible';
  savedNotif.innerHTML = 'Сохранено ✅';

  timerId = setTimeout(() => {
    clearTimeout(timerId);

    savedNotif.innerHTML = '';
    savedNotif.style.visibility = 'hidden';
  }, 1200);

  console.log(savedDemoIsOn);
})


function generatingCards() {

  participants.forEach(participant => {
    const name = participant.personName;

    const isChecked = name === chosenWinner[0].personName;
    

    listContainerEl.innerHTML += `
      <div class="card">
        <div class="participant-name">
          ${name}
        </div>
        <input class="js-radio" data-person-name="${participant.personName}" type="radio" name="radio1" ${isChecked ? 'checked' : ''}>
      </div>
   `;


  })

  const radioEl = document.querySelectorAll('.js-radio');



  radioEl.forEach(radioBtn => {
    radioBtn.addEventListener('click', () => {
      // console.log(radioBtn.dataset.personName);

      if (radioBtn.checked) {
        chosenWinner[0].personName = radioBtn.dataset.personName;

      }

      console.log(chosenWinner[0].personName);
    })
  })
}

// console.log(isChecked);

generatingCards();











