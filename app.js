const correctAnswers = ['B','B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    const updateScore = document.querySelector('.result');

    // check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });

    // show result on page
    scrollTo(0,0); //takes user directly to top
    updateScore.querySelector('span').textContent = `${score}%`;
    updateScore.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        updateScore.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else{
            output++;
        }
    }, 10);
});

// window object (global object)

// console.log(document.querySelector('form'));

// setTimeout(() => {
//     alert('hello ninja')
// }, 3000);

