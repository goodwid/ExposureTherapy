var spanEls = document.getElementsByClassName('userName');
var userInfoDestringified = JSON.parse(localStorage.userInfo);
var userFirstName = capitalizeName(userInfoDestringified.userName);

//capitalize userName in case user didn't
function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

//populate all spans with class 'userName' with (capitalized) user name
for (var bb=0; bb<spanEls.length; bb++) {
    spanEls[bb].textContent = userFirstName;
}
