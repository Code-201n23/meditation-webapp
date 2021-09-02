'use strict'

let localStorage = [];
// This is where you set up your local storage 

// This takes in form info on form submit.
function handleSubmit(event){
  // event.preventDefault()
  // An ACTION can take you to a different page on submit. You may or may not need the prevent default for this. You could also wrap the submit button in an <anchor> tag to take you to your next page.
  let radio1 = event.target.answer1.value;
  let radio2 = event.target.answer2.value;
  // name.value even for radio buttons. Answer is what we get from the radio button clicks.

  const localStorageObject = {
    banana1: radio1,
    banana2: radio2
  }
  // This is setting things from local storage as objects.
  localStorage.push(localStorageObject)
  // After you set local storage with info you created ie. Aboce
}

switch(handleSubmit){
  // For a case with multiple conditions, Keep the order consistent
  case localStorageObject.banana1 === 'chillin':
    localStorageObject.banana2 === 'other thing to match':
    document.write(chillVid);
    break;
  default:
    // This is essentially an else to break the code. Put this at the end after all of your conditions.
    break;
}