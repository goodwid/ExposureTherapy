var progressForm = gebi('progressForm');
var progressFormButton = gebi('submitProgressForm');
if (progressFormButton) {
    progressFormButton.addEventListener('click', processProgressForm);
}

function processProgressForm() {
    var anxietyIndex = 0;
    for (var cc=1; cc<=10; cc++) {
        var qName = 'q' + cc;
        var inputEls = document.getElementsByClassName(qName);
        for (var dd=0; dd<inputEls.length; dd++) {
            if (inputEls[dd].checked) {
                console.log(inputEls[dd].value);
                anxietyIndex += parseInt(inputEls[dd].value);
            }
        }
    }

    console.log(anxietyIndex);
    userInfo.previousVisitAnxiety.push(anxietyIndex);

    updateUserInfo();
}
