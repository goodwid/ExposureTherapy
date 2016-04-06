var progressForm = gebi('progressForm');
var progressFormButton = gebi('submitProgressForm');
if (progressFormButton) {
    progressFormButton.addEventListener('click', processProgressForm);
}

function processProgressForm() {
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
    updateUserInfo();
}
