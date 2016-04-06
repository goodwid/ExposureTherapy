var progressForm = gebi('questionForm');
var formButton = gebi('submitForm');
if (formButton) {
    formButton.addEventListener('click', function () {
        var userName = form.elements.inputName.value;
        var panicImageIndex = parseInt(form.elements.panicimage.value);
        var phobia = form.elements.phobia.value;
        if (phobia === 'other') {
            alert('We regret that currently, Conquer It! only addresses arachnophobia.');
            gebi('arach').checked = true;
        } else {
            if (!userName) {
                alert('Username is required!  Please fill out your first name.');
            } else {
                userInfo.userName = userName;
                userInfo.panicImageIndex = panicImageIndex;

                if (form.elements.q5.value === 'true') { userInfo.recommendedStartLevel = 10;}
                if (form.elements.q4.value === 'true') { userInfo.recommendedStartLevel = 8;}
                if (form.elements.q3.value === 'true') { userInfo.recommendedStartLevel = 5;}
                if (form.elements.q2.value === 'true') { userInfo.recommendedStartLevel = 2;}
                if (form.elements.q1.value === 'true') { userInfo.recommendedStartLevel = 1;}

                console.log(userInfo.recommendedStartLevel);
                updateUserInfo();
            }
        }
    })
}
