//imageArray
//lastImageIndex;
//LastLevelIndex;
var nextLevel = gebi("nextLevelButton");
var simImages = gebi("simImagesButton");
var lastLevel = gebi("lastLevelButton");
var popupBox  = gebi("popupBox");
var popupMsg  = gebi("popupMsg");
var okButton  = gebi("okButton");
var mainImage = gebi("mainImage");
var levelIndicator = gebi("levelIndicator");
var imageIndicator = gebi("imageIndicator");
var help           = gebi("help");



lastLevelIndex=1;
lastImageIndex=0
displayImage(lastLevelIndex,lastImageIndex);
indicateLevel();


//########################## functions for useability of image control buttons on exercise page###########################################

//functionality of next level button--shows pop up if user aleady at last level.
function goNextLevel () {
    if (lastLevelIndex >= imageArray.length-1){
            showPopup();
            popupMsg.textContent = "You made it to the last level yadda yadda."
    } else {
        lastLevelIndex= lastLevelIndex + 1;
        displayImage(lastLevelIndex,0);
        indicateLevel();
        //localStorageFunction(lastLevelIndex)
    }
}
nextLevel.addEventListener("click", goNextLevel ,false);

//--------------------------------------------------------------------------------------------------------------------------

//functionality of last level button--shows pop up if user is at first level.
function goLastLevel () {
    if (lastLevelIndex === 1 || lastLevelIndex === 0){
            showPopup();
            popupMsg.textContent = "Sorry, you're at the first level.  Might want to consider professional help."
    } else {
        lastLevelIndex= lastLevelIndex - 1;
        displayImage(lastLevelIndex,0);
        indicateLevel();
        //run image to local storage (currLevel)
        console.log(image.path);
    }
}
lastLevel.addEventListener("click", goLastLevel ,false);

//----------------------------------------------------------------------------------------------------------------------------

//similar images button functionality
function changeImage () {
    if (lastImageIndex ===2){
        lastImageIndex = 0;
        indicateLevel();
    }else {
        lastImageIndex = lastImageIndex +1;
        indicateLevel();
    }

    displayImage(lastLevelIndex,lastImageIndex)
}

simImages.addEventListener("click", changeImage ,false);


//----------------------------------------------------------------------------------------------------------------------------

//display help contents in popup box-sizing
function showHelp (){
    showPopup();
    popupMsg.innerText = "There are eleven levels of exposure, each of which contains three images. \n\n Clicking the \"Similar Images\" button will allow you to move from one image to the next within the level you're currently in. We recommend you spend some time with all three images at each level.\n\nOnce you can view all three without feeling distressed, use the \"Next Level\" button to advance to the next set of three images.\n\n If your anxiety or fear reaches a level you are not comfortable with, use the \"Last Level\" button to return to the previous level or the panic button to instantly view the calming image you selected when you began the program.\n\n Spend as much time as you need to with each image. This will be a gradual process for most, so take however much time you need to progress from level to level."
}
help.addEventListener("click", showHelp, false);



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
    levelIndicator.textContent = lastLevelIndex;
    imageIndicator.textContent = lastImageIndex+1;
}
