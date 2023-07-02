const choiceInputs = document.querySelectorAll('.difficulty__box_input')
const choiceButton = document.querySelector(".difficulty__box_button")

let difficulty = ''

for (let choiceInput of choiceInputs ) {
    choiceInput.addEventListener('click', function (e) {
        difficulty = e.target.id,
        buttonDisabled(difficulty)
    });
    
}

function buttonDisabled(difficulty) {
    console.log(difficulty)
    if (difficulty) {
        choiceButton.removeAttribute('disabled')
    }
}



choiceButton.addEventListener('click', function name() {
    console.log(difficulty)
    location.href = 'game.html';
})