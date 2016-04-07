var chartSection = gebi('chartSection');
var formPopup = gebi('formPopup');
var submitButton = gebi('submitProgressForm');
var chartIntro = gebi('chartIntro');

submitButton.addEventListener('click', processQuestionnaire, false);

function showQuestionnaire() {
    chartSection.style.display = 'none';
    formPopup.style.display = 'block';
}

function showCharts() {
    if (!userInfo.evalComplete) {
        chartIntro.textContent = 'The chart below shows the highest level reached for each of your past visits to Conquer It! If you see ups and downs, don\'t get discouraged. Remember that each visit to the Exercises page means progress, whether you advanced a level, stayed put, or returned to a previous level. You\'re working to conquer your fear, and you should be proud of that!';
    }
    formPopup.style.display = 'none';
    chartSection.style.display = 'flex';
}

function processQuestionnaire() {
    var anxietyIndex = 0;
    for (var cc=1; cc<=5; cc++) {
        var qName = 'q' + cc;
        var inputEls = document.getElementsByClassName(qName);
        for (var dd=0; dd<inputEls.length; dd++) {
            if (inputEls[dd].checked) {
                anxietyIndex += parseInt(inputEls[dd].value);
            }
        }
    }
    userInfo.previousVisitAnxiety.push(anxietyIndex);
    storeUserInfo();
    showCharts();
}

window.onload = showQuestionnaire();
