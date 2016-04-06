//imageArray
//lastImageIndex;
//LastLevelIndex;
var nextLevel = gebi("nextLevelButton");
var simImages = gebi("simImagesButton");
var lastLevel = gebi("lastLevelButton");
var navPopup  = gebi("navPopup");
var popupMsg  = gebi("popupMsg");
var okButton  = gebi("okButton");
var mainImage = gebi("mainImage");


displayImage(2,0);
lastLevelIndex=1;

//functionality of next level button--shows pop up if user aleady at last level.
function goNextLevel () {
    if (lastLevelIndex >= imageArray.length-1){
            navPopup.style.display = "block";
            popupMsg.textContent = "You made it to the last level yadda yadda."
            mainImage.style.visibility="hidden";
    } else {
        lastLevelIndex= lastLevelIndex + 1;
        displayImage(lastLevelIndex,0);
        //localStorageFunction(lastLevelIndex)
    }
}
nextLevel.addEventListener("click", goNextLevel ,false);


//functionality of last level button--shows pop up if user is at first level.
function goLastLevel () {
    if (lastLevelIndex === 1 || lastLevelIndex === 0){
            navPopup.style.display = "block";
            popupMsg.textContent = "Sorry, you're at the first level.  Might want to consider professional help."
    } else {
        lastLevelIndex= lastLevelIndex - 1;
        displayImage(lastLevelIndex,0);
        //run image to local storage (currLevel)
        console.log(image.path);
    }
}
lastLevel.addEventListener("click", goLastLevel ,false);


//hide popup when user clicks ok
function hidePopup (){
    navPopup.style.display="none";
    mainImage.style.visibility = "visible";
}

okButton.addEventListener("click", hidePopup, false);
