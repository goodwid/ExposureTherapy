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
  previousVisitLevels: [],
  previousVisitAnxiety: []
}

var form = gebi('questionForm');
var formButton = gebi('submitForm');
if (formButton) {
    formButton.addEventListener('click', function () {
        var answers=[];
        var userName = form.elements.inputName.value;
        var panicImageIndex = parseInt(form.elements.panicimage.value);
        if (!userName) {
            alert('Username is required!  Please fill out your first name.');
        } else {
            answers.push(userName)
            answers.push(form.elements.phobia.value);
            answers.push(panicImageIndex);
            answers.push(form.elements.q1.value);
            answers.push(form.elements.q2.value);
            answers.push(form.elements.q3.value);
            answers.push(form.elements.q4.value);
            answers.push(form.elements.q5.value);
            answers.push(form.elements.q6.value);
        }
        var visits = userInfo.previousVisitLevels.length;
    })
}

function displayImage(level,index) {
    var imageEl = gebi('mainImage');
    var imagePath = imageArray[level][index].path;
    imageEl.setAttribute('src',imagePath);
}

function updateUserInfo() {
    localStorage.userInfo = JSON.stringify(userInfo);
}

function getUserInfo() {
    return JSON.parse(localStorage.userInfo);
}
