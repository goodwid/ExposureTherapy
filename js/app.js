var userInfo = {};

////////////////////////////////  BUFFER  ////////////////////////////////

var bufferDiv = gebi('buffer');
var continueButton = gebi('continueButton');
//CONTINUE BUTTON ON BUFFER TO HIDE BUFFER
if (bufferDiv) {
    continueButton.addEventListener("click", removeBuffer, false);
}

function showBuffer() {
    bufferDiv.style.display = 'block';
}

function removeBuffer() {
    bufferDiv.className = 'reveal';
    setTimeout(function() {
        bufferDiv.style.display = 'none';
    }, 2000);
}

////////////////////////////////  BUFFER  ////////////////////////////////

function initUserInfo() {
    if (localStorage.userInfo) {
        userInfo = JSON.parse(localStorage.userInfo);
    } else {
        userInfo = {
          evalComplete: false,
          userName: '',
          lastLevelIndex: 10,
          lastImageIndex: 0,
          panicImageIndex: 0,
          previousVisitLevels: [],
          previousVisitAnxiety: []
        }
    }
}

function processProgressForm() {
    var anxietyIndex = 0;
    for (var cc=1; cc<=5; cc++) {
        var qName = 'nq' + cc;
        var inputEls = document.getElementsByClassName(qName);
        for (var dd=0; dd<inputEls.length; dd++) {
            if (inputEls[dd].checked) {
                anxietyIndex += parseInt(inputEls[dd].value);
            }
        }
    }
    userInfo.previousVisitAnxiety.push(anxietyIndex);
    updateUserInfo();
}

function displayImage(level,index) {
    var imageEl = gebi('mainImage');
    var videoEl = gebi('video');
    var imgWrap = gebi('imgWrap');
    var imagePath = imageArray[level][index].path;
    if (level < 10){
    imageEl.setAttribute('src',imagePath);
    imageEl.style.display="block";
    videoEl.style.display='none';
    imgWrap.style.backgroundColor="white";
}  else {
    videoEl.setAttribute('src',imagePath);
    imageEl.style.display='none';
    videoEl.style.display='block';
    imgWrap.style.backgroundColor="black";
    }
}

function storeUserInfo() {
    localStorage.userInfo = JSON.stringify(userInfo);
}

//capitalize userName in case user didn't
function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

initUserInfo();

var progressForm = gebi('progressForm');
var progressFormButton = gebi('submitProgressForm');
// if (progressFormButton) {
//     progressFormButton.addEventListener('click', processProgressForm);
// }
var spanEls = document.getElementsByClassName('userName');

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
                userInfo.userName = capitalizeName(userName);
                userInfo.panicImageIndex = panicImageIndex;
                userInfo.evalComplete = true;

                if (evalform.elements.q5.value === 'true') { userInfo.lastLevelIndex = 10;}
                if (evalform.elements.q4.value === 'true') { userInfo.lastLevelIndex = 8;}
                if (evalform.elements.q3.value === 'true') { userInfo.lastLevelIndex = 5;}
                if (evalform.elements.q2.value === 'true') { userInfo.lastLevelIndex = 2;}
                if (evalform.elements.q1.value === 'true') { userInfo.lastLevelIndex = 1;}

                userInfo.previousVisitLevels.push (userInfo.lastLevelIndex);
                var anxietyIndex = 0;
                for (var cc=1; cc<=5; cc++) {
                    var qName = 'nq' + cc;
                    var inputEls = document.getElementsByClassName(qName);
                    for (var dd=0; dd<inputEls.length; dd++) {
                        if (inputEls[dd].checked) {
                            anxietyIndex += parseInt(inputEls[dd].value);
                        }
                    }
                }
                userInfo.previousVisitAnxiety.push(anxietyIndex);
                storeUserInfo();
                hideForm();
                showBuffer();
                showExercise();
                displayImage(userInfo.lastLevelIndex,userInfo.lastImageIndex);
                indicateLevel();
            }
        }

    })
}


//populate all spans with class 'userName' with (capitalized) user name
for (var bb=0; bb<spanEls.length; bb++) {
    spanEls[bb].textContent = userInfo.userName;
}
