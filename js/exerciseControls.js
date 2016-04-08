


//########################## functions for useability of image control buttons on exercise page###########################################

//functionality of next level button--shows pop up if user aleady at last level.
function goNextLevel () {
    if (userInfo.lastLevelIndex >= imageArray.length-1){
            showPopup();
            popupMsg.innerHTML = "</br></br></br></br></br>This is actually the last level. Congratulations, <span class='userName'></span>, you made it! Check out our Resources page if you're interested in further treatment options."
    } else {
        userInfo.lastLevelIndex= userInfo.lastLevelIndex + 1;
        userInfo.lastImageIndex=0;
        if (userInfo.lastLevelIndex > todaysHighestLevel) {
            todaysHighestLevel = userInfo.lastLevelIndex;
        }
        displayImage(userInfo.lastLevelIndex,0);
        storeUserInfo();
        indicateLevel();
    }
}


//--------------------------------------------------------------------------------------------------------------------------

//functionality of last level button--shows pop up if user is at first level.
function goLastLevel () {
    if (userInfo.lastLevelIndex === 1 || userInfo.lastLevelIndex === 0){
            showPopup();
            popupMsg.innerHTML = "</br></br></br></br>Sorry, you're at the first level. If these images are too unsettling, Conquer It! may not be for you. Check out our Resources page for links to sites that discuss other phobia treatment options, including support groups."
    } else {
        userInfo.lastLevelIndex= userInfo.lastLevelIndex - 1;
        userInfo.lastImageIndex=0;
        displayImage(userInfo.lastLevelIndex,0);
        indicateLevel();
        storeUserInfo();
    }
}

//----------------------------------------------------------------------------------------------------------------------------

//similar images/resume button functionality
function changeImage () {
    if (simImagesButton.value=="Resume") {
        userInfo.lastImageIndex = userInfo.lastImageIndex;
        indicateLevel();
        resumeFromPanicPage();
    } else if (userInfo.lastImageIndex ===2){
          userInfo.lastImageIndex = 0;
          indicateLevel();
          resumeFromPanicPage();
      } else {
            userInfo.lastImageIndex = userInfo.lastImageIndex +1;
            indicateLevel();
            resumeFromPanicPage();
        }

    displayImage(userInfo.lastLevelIndex,userInfo.lastImageIndex);
    storeUserInfo();
}



//----------------------------------------------------------------------------------------------------------------------------

//display help contents in popup box-sizing
function showHelp (){
    showPopup();

    if (userInfo.exercisesBegun == false) {
        welcome.innerHTML = "Welcome, " + userInfo.userName + "!";
    } else {
        welcome.innerHTML = "  Here's how it works, " + userInfo.userName + ":";
    }

    popupMsg.innerHTML = "There are eleven levels of exposure.</br></br>Clicking the \"Similar Images\" button will allow you to move between three images within the current level. We recommend you spend some time with all three images at each level. Once you can view all three without feeling distressed, use the \"Next Level\" button to advance to the next set of three images.</br></br>If your anxiety reaches an uncomfortable level, use the \"Last Level\" button to return to the previous level or the panic button to instantly view the calming image you selected when you began the program.</br></br>Spend as much time as you need to with each image. This will be a gradual process for most."
}


//display panic image
function showPanicImage() {
    displayImage(0, userInfo.panicImageIndex);
    layoutPanicPage();
}

function layoutPanicPage () {
    lastLevelButton.style.visibility="hidden";
    nextLevelButton.style.visibility="hidden";
    simImagesButton.value="Resume";
    locationDiv.style.visibility="hidden";
}

function resumeFromPanicPage() {
    lastLevelButton.style.visibility="visible";
    nextLevelButton.style.visibility="visible";
    simImagesButton.value="Similar Images";
    simImagesButton.blur();
    locationDiv.style.visibility="visible";
}


//##################### SHOW AND HIDE POPUPS ##################################################################################
//display popup
function showPopup (){
    popupBox.style.display = 'block';
    mainImage.style.visibility = 'hidden';
}

function showForm() {
    questionForm.style.display = 'block';
    hideExercise();
}

function hideForm() {
    questionForm.style.display = 'none';
    showExercise();
}

function showExercise() {
    exercisePage.style.display = 'block';
}

function hideExercise() {
    exercisePage.style.display = 'none';
}
//hide popup when user clicks ok
function hidePopup (){
    popupBox.style.display = 'none';
    mainImage.style.visibility = "visible";
}

//set level and image indicators on exercise page
function indicateLevel (){
    levelIndicator.textContent = userInfo.lastLevelIndex;
    imageIndicator.textContent = userInfo.lastImageIndex+1;
}

function panicShortcut(e) {   // handles space bar event handler.
  if (e.keyCode == '32') {
    showPanicImage();
  }
}


var todaysHighestLevel = 1;
var nextLevel =      gebi("nextLevelButton");
var simImages =      gebi("simImagesButton");
var lastLevel =      gebi("lastLevelButton");
var popupBox  =      gebi("popupBox");
var popupMsg  =      gebi("popupMsg");
var welcome   =      gebi("welcomeMsg");
var okButton  =      gebi("okButton");
var mainImage =      gebi("mainImage");
var levelIndicator = gebi("levelIndicator");
var imageIndicator = gebi("imageIndicator");
var help           = gebi("help");
var panic          = gebi("panic");
var questionForm   = gebi('questionForm');
var exercisePage   = gebi('exercisePage');
var locationDiv    = gebi('location');

if (!localStorage.userInfo) {
    showForm();
} else {
    displayImage(userInfo.lastLevelIndex,userInfo.lastImageIndex);
    indicateLevel();
    window.addEventListener('keydown', panicShortcut);    //spacebar event listener to show panic image
}

window.onbeforeunload = function () {
    if (userInfo.evalComplete === true) {
        userInfo.previousVisitLevels.push(todaysHighestLevel);
        storeUserInfo();
    }
}

panic.addEventListener("click", showPanicImage, false);
nextLevel.addEventListener("click", goNextLevel ,false);
help.addEventListener("click", showHelp, false);
simImages.addEventListener("click", changeImage ,false);
lastLevel.addEventListener("click", goLastLevel ,false);

//OK BUTTON ON FORM TO TRIGGER HIDE POPUP FUNCTION
okButton.addEventListener("click", hidePopup, false);
