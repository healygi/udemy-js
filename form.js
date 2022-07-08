const form = document.querySelector('.sign-up');
const username = document.querySelector('#username');

form.addEventListener('submit', e => { // adds a submit event listener to form
    e.preventDefault();
    
    const username = form.username.value;
    const usernamePattern = /^[a-zA-Z]{6,12}$/;
    
    if (usernamePattern.test(username)){
        //feedback good info
        feedback.textContent = 'that username is valid!';  //feedback is the class of a div in html file form section fyi
    } else {
        //feedback help info
        feedback.textContent = "username must contain letters only and be between 6 and 13 characters"
    }
    //console.log(username.value); // logs value of username value on input
    //console.log(form.username.value); //easier way to get value of form using . notation
});

// testing RegEx
const username = 'shaun';
const pattern = /^[a-z]{6,}$/; //a-z allowed, has to be 6 length or more, ^letter have to be at start, $ has to end letters

let result = pattern.test(username); //test of it works true if password is correct

// OR

let result = username.search(pattern);
console.log(result);
//returns an integer - finds position of the match of the test regex - it is -1 if you dont get a match

if(result) {
    console.log("the regex test passed :)")
} else {
    console.log("the regex test failed :( ")
}

// LIVE FEEDBACK
form.username.addEventListener('keyup', e => { //logs when person is typing
    //console.log(e.target.value, form.username.value);
    if(username.Pattern.test(e.target.value)){
        form.username.setAttriubte('class', 'success') // success a class in CSS
        //console.log('passed')
    } else {
        form.username.setAttriubte('class', 'error') // error a class in CSS
        //console.log('failed')
    }
});