//imageArray
//userInfo.lastImageIndex;
//userInfo.lastLevelIndex;
var nextLevel = gebi("nextLevelButton");
var simImages = gebi("simImagesButton");
var lastLevel = gebi("lastLevelButton");
var popupBox  = gebi("popupBox");
var popupMsg  = gebi("popupMsg");
var welcome   = gebi("welcomeMsg");
var okButton  = gebi("okButton");
var mainImage = gebi("mainImage");
var levelIndicator = gebi("levelIndicator");
var imageIndicator = gebi("imageIndicator");
var help           = gebi("help");
var panic          = gebi("panic");


// userInfo.lastLevelIndex=1
// userInfo.lastImageIndex=0
displayImage(userInfo.lastLevelIndex,userInfo.lastImageIndex);
indicateLevel();


//########################## functions for useability of image control buttons on exercise page###########################################

//functionality of next level button--shows pop up if user aleady at last level.
function goNextLevel () {
    if (userInfo.lastLevelIndex >= imageArray.length-1){
            showPopup();
            popupMsg.innerHTML = "This is actually the last level. Congratulations, <span class='userName'></span>, you made it! Check out our Resources page if you're interested in further treatment options."
    } else {
        userInfo.lastLevelIndex= userInfo.lastLevelIndex + 1;
        displayImage(userInfo.lastLevelIndex,0);
        indicateLevel();
        //localStorageFunction(userInfo.lastLevelIndex)
    }
}
nextLevel.addEventListener("click", goNextLevel ,false);

//--------------------------------------------------------------------------------------------------------------------------

//functionality of last level button--shows pop up if user is at first level.
function goLastLevel () {
    if (userInfo.lastLevelIndex === 1 || userInfo.lastLevelIndex === 0){
            showPopup();
            popupMsg.textContent = "Sorry, you're at the first level. If these images are too unsettling, Conquer It! may not be for you. Check out our Resources page for links to sites that discuss other phobia treatment options, including support groups."
    } else {
        userInfo.lastLevelIndex= userInfo.lastLevelIndex - 1;
        displayImage(userInfo.lastLevelIndex,0);
        indicateLevel();
        //run image to local storage (currLevel)
        console.log(image.path);
    }
}
lastLevel.addEventListener("click", goLastLevel ,false);

//----------------------------------------------------------------------------------------------------------------------------

//similar images button functionality
function changeImage () {
    if (userInfo.lastImageIndex ===2){
        userInfo.lastImageIndex = 0;
        indicateLevel();
    }else {
        userInfo.lastImageIndex = userInfo.lastImageIndex +1;
        indicateLevel();
    }

    displayImage(userInfo.lastLevelIndex,userInfo.lastImageIndex)
}

simImages.addEventListener("click", changeImage ,false);


//----------------------------------------------------------------------------------------------------------------------------

//display help contents in popup box-sizing
function showHelp (){
    showPopup();
<<<<<<< HEAD
=======

    if (userInfo.exercisesBegun == false) {
        welcome.innerHTML = "Welcome, <span class='userName'></span>!";
    } else {
        welcome.innerHTML = "Here's a refresher, <span class='userName'></span>:";
    }

>>>>>>> master
    popupMsg.innerHTML = "There are eleven levels of exposure, each of which contains three images. \n\n Clicking the \"Similar Images\" button will allow you to move from one image to the next within the level you're currently in. We recommend you spend some time with all three images at each level.\n\nOnce you can view all three without feeling distressed, use the \"Next Level\" button to advance to the next set of three images.\n\n If your anxiety or fear reaches a level you are not comfortable with, use the \"Last Level\" button to return to the previous level or the panic button to instantly view the calming image you selected when you began the program.\n\n Spend as much time as you need to with each image. This will be a gradual process for most, so take however much time you need to progress from level to level."
}
help.addEventListener("click", showHelp, false);

//display panic image
function showPanicImage() {
    displayImage(0, userInfo.panicImageIndex);
}
panic.addEventListener("click", showPanicImage, false)


//##################### SHOW AND HIDE POPUPS ##################################################################################
//display popup
function showPopup (){
    popupBox.style.display = "block";
    mainImage.style.visibility="hidden";
}

//hide popup when user clicks ok
function hidePopup (){
    navPopup.style.display="none";
    mainImage.style.visibility = "visible";
}

okButton.addEventListener("click", hidePopup, false);  //OK BUTTON ON FORM TO TRIGGER HIDE POPUP FUNCTION

//##################################################################################################################


//set level and image indicators on exercise page
function indicateLevel (){
    levelIndicator.textContent = userInfo.lastLevelIndex;
    imageIndicator.textContent = userInfo.lastImageIndex+1;
}
