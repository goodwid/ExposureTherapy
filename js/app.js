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
  panicImage: '',
  recommendedStartLevel: 1,
  exercisesBegun: false,
  lastLevelIndex: 1,
  lastImageIndex: 0,
  previousVisitData: []
}

var form = gebi('questionForm');
var formButton = gebi('submitForm');
if (formButton) {
    formButton.addEventListener('click', function () {
        var userName = form.elements.inputName.value;
        if (!userName) {alert('Username is required!  Please fill out your first name.');}
        var phobia = form.elements.phobia.value;
        var q1Answer = form.elements.q1.value;
        var q2Answer = form.elements.q2.value;
        var q3Answer = form.elements.q3.value;
        var q4Answer = form.elements.q4.value;
        var q5Answer = form.elements.q5.value;
        var q6Answer = form.elements.q6.value;

        console.log(userName, phobia, q1Answer, q2Answer, q3Answer, q4Answer, q5Answer, q6Answer);

    })

}
