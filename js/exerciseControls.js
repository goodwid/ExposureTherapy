//imageArray
//lastImageIndex;
//LastLevelIndex;
var nextLevel = gebi("nextLevelButton");
var simImages = gebi("simImagesButton");
var lastLevel = gebi("lastLevelButton");
var popup     = gebi("popup");



//functionality of next level button--shows pop up if user aleady at last level.
function goNextLevel (currLevel) {
    if (currLevel === imageArray.length -1){
            popup.style.display = "block";
    } else { lastLevelIndex= lastLevelInex + 1;
            //currLevel = currLevel + 1;
            //run display image function(currLevel);
            //run image to local storage (currLevel)
    }
}

//goNextLevel(lastLevelIndex);

nextLevel.addEventListener("click", goNextLevel ,false);


//functionality of previous level button--shows pop up if user at first level
function goLastLevel (currLevel) {
    if (currLevel === 1){
            popup.style.display = "block";
    } else { lastLevelIndex= lastLevelInex + 1;
            //currLevel = currLevel + 1;
            //run display image function(currLevel);
            //run image to local storage (currLevel)
    }
}

//goNextLevel(lastLevelIndex);

nextLevel.addEventListener("click", goNextLevel ,false);
