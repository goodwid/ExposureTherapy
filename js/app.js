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
  recommendedStartLevel: 10,
  exercisesBegun: false,
  lastLevelIndex: 1,
  lastImageIndex: 0,
  panicImageIndex: 0,
  previousVisitLevels: [],
  previousVisitAnxiety: []
}

var evalform = gebi('questionForm');
var evalformButton = gebi('submitForm');
if (evalformButton) {
    evalformButton.addEventListener('click', function () {
        var userName = evalform.elements.inputName.value;
        var panicImageIndex = parseInt(evalform.elements.panicimage.value);
        var phobia = evalform.elements.phobia.value;
        if (phobia === 'other') {
            alert('We regret that currently, Conquer It! only addresses arachnophobia.');
            gebi('arach').checked = true;
        } else {
            if (!userName) {
                alert('Username is required!  Please fill out your first name.');
            } else {
                userInfo.userName = userName;
                userInfo.panicImageIndex = panicImageIndex;

                if (evalform.elements.q5.value === 'true') { userInfo.recommendedStartLevel = 10;}
                if (evalform.elements.q4.value === 'true') { userInfo.recommendedStartLevel = 8;}
                if (evalform.elements.q3.value === 'true') { userInfo.recommendedStartLevel = 5;}
                if (evalform.elements.q2.value === 'true') { userInfo.recommendedStartLevel = 2;}
                if (evalform.elements.q1.value === 'true') { userInfo.recommendedStartLevel = 1;}

                console.log(userInfo.recommendedStartLevel);
                updateUserInfo();
            }
        }
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
