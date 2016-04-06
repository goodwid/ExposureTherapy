/*
localStorage should store:
1. whether user has submitted evaluation (get started) form
2. user's name and panic image choice
3. results of eval form (recommended starting point)
4. whether user has begun exercises
5. image viewed when user last left page
6. previous visit dates and respective "level reached" numbers (for chart)

*/

//OBJECT THAT WILL BE STORED IN LOCALSTORAGE AND WILL TRACK USER DETAILS/PROGRESS
var userInfo = {
  evalComplete: false,
  userName: '',
  recommendedStartLevel: 1,
  exercisesBegun: false,
  lastLevelIndex: 1,
  lastImageIndex: 0,
  panicImageIndex: 0,
  previousVisitData: []
}

var form = gebi('questionForm');
var formButton = gebi('submitForm');
if (formButton) {
    formButton.addEventListener('click', function () {
        var answers=[];
        if (!userName) {
            alert('Username is required!  Please fill out your first name.');
        } else {
            answers.push(form.elements.inputName.value);
            answers.push(form.elements.phobia.value);
            answers.push(form.elements.panicimage.value);
            answers.push(form.elements.q1.value);
            answers.push(form.elements.q2.value);
            answers.push(form.elements.q3.value);
            answers.push(form.elements.q4.value);
            answers.push(form.elements.q5.value);
            answers.push(form.elements.q6.value);
        }
        console.log(answers);
    })

}

function displayImage(level,index) {
    var imageEl = gebi('mainImage');
    var imagePath = imageArray[level][index].path;
    imageEl.setAttribute('src',imagePath);
}
