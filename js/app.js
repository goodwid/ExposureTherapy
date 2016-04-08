function initUserInfo() {
    if (localStorage.userInfo) {
        userInfo = JSON.parse(localStorage.userInfo);
    } else {
        userInfo = {
          evalComplete: false,
          userName: '',
          lastLevelIndex: 10,
          lastImageIndex: 0,
          panicImageIndex: 0,
          previousVisitLevels: [],
          previousVisitAnxiety: []
        }
    }
}

function processProgressForm() {
    var anxietyIndex = 0;
    for (var cc=1; cc<=5; cc++) {
        var qName = 'nq' + cc;
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

function displayImage(level,index) {
    var imageEl = gebi('mainImage');
    var videoEl = gebi('video');
    var imgWrap = gebi('imgWrap');
    var imagePath = imageArray[level][index].path;
    if (level < 10) {
        imageEl.setAttribute('src',imagePath);
        imageEl.style.display="block";
        videoEl.style.display='none';
        imgWrap.style.backgroundColor="white";
    }  else {
        videoEl.setAttribute('src',imagePath);
        imageEl.style.display='none';
        videoEl.style.display='block';
        imgWrap.style.backgroundColor="black";
    }
}

function storeUserInfo() {
    localStorage.userInfo = JSON.stringify(userInfo);
}

//capitalize userName in case user didn't
function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function gebi(el) { // gleefully stolen from Al!
    return document.getElementById(el);
}

function showCharts() {
    hideEl(formPopup);
    showEl(chartContainer);
    createLevelChart (generateChartData(userInfo.previousVisitLevels));
    createPhobiaChart (generateChartData(userInfo.previousVisitAnxiety));
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

function generateChartData(data) {
    var chartData = {};
    dataLength = data.length;
    var labels = [];
    var templabels = [];
    var tempdata = [];
    chartData.barColor = '#b2f9ed';
    chartData.dataPoints = [];

    templabels.push('Starting Point');
    for (var aa=1; aa <= dataLength; aa++) {
        templabels.push('Visit ' + aa);
    }
    if (dataLength >10) {
        labels[0] = templabels[0];
        labels = labels.concat(templabels.slice(-10));
        tempdata[0] = data[0];
        tempdata = tempdata.concat(data.slice(-10));    // Grab last 10 elements of the array.
    } else {
        tempdata = data;
        labels = templabels;
    }
    for (var i=0;i < Math.min(labels.length, tempdata.length) ;i++) {
        chartData.dataPoints.push([labels[i],tempdata[i]]);
    }

    return chartData;
}

function createLevelChart(data) {   // uses highcharts to display data, function taken from snippet on highcharts' website and modded.
    $('#levelChart').highcharts({
        chart: {
            Type: 'column',
            backgroundColor: '#E0CCD3'
        },
        title: {
            text: 'Highest Level Reached By Visit'
        },
        subtitle: {
            text: '(showing the last 10 visits)'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }

            },
            crosshair: true
        },
        yAxis: { // Primary yAxis
                labels: {
                    format: '{value}'
                    // style: {
                    //     fontSize: '13px',
                    //     color: Highcharts.getOptions().colors[1]
                    // }
                },
                title: {
                    text: 'Highest Level Reached',
                    style: {
                        color: '#E0CCD3'
                    }
                }
            },

        tooltip: {
            shared: true
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Highest Level Reached',
            data: data.dataPoints,
            type: 'column',
            color: data.barColor,
            tooltip: {
                valueSuffix: ''
            },
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]  // series
    });   // highcharts
}   // function

function createPhobiaChart(data) {   // uses highcharts to display data, function taken from snippet on highcharts' website and modded.
    $('#phobiaChart').highcharts({
        chart: {
            Type: 'column',
            backgroundColor: '#E0CCD3'
        },
        title: {
            text: 'Phobic Index By Visit'
        },
        subtitle: {
            text: '(showing the last 10 visits)'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            },
            crosshair: true
        },
        yAxis: { // Primary yAxis
                labels: {
                    format: '{value}'
                    // style: {
                    //     fontSize: '13px',
                    //     color: Highcharts.getOptions().colors[1]
                    // }
                },
                title: {
                    text: 'Phobic Index',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                }
            },

        tooltip: {
            shared: true
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Phobic Index',
            data: data.dataPoints,
            type: 'column',
            color: data.barColor,
            tooltip: {
                valueSuffix: ''
            },
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]  // series
    });   // highcharts
}   // function

function hideEl(el) {
    el.style.display = 'none';
}

function showEl(el) {
    el.style.display = 'block';
}

function formHandler() {
    var userName = evalform.elements.inputName.value;
    var panicImageIndex = parseInt(evalform.elements.panicimage.value);
    var phobia = evalform.elements.phobia.value;
    if (phobia === 'other') {
        alert('We regret that currently, Conquer It! only addresses arachnophobia.');
        gebi('arach').checked = true;
    } else {
        if (!userName) {
            alert('Username is required!  Please fill out your first name.');
        } else {
            userInfo.userName = capitalizeName(userName);
            userInfo.panicImageIndex = panicImageIndex;
            userInfo.evalComplete = true;

            if (evalform.elements.q5.value === 'true') { userInfo.lastLevelIndex = 10;}
            if (evalform.elements.q4.value === 'true') { userInfo.lastLevelIndex = 8;}
            if (evalform.elements.q3.value === 'true') { userInfo.lastLevelIndex = 5;}
            if (evalform.elements.q2.value === 'true') { userInfo.lastLevelIndex = 2;}
            if (evalform.elements.q1.value === 'true') { userInfo.lastLevelIndex = 1;}

            userInfo.previousVisitLevels.push (userInfo.lastLevelIndex);
            var anxietyIndex = 0;
            for (var cc=1; cc<=5; cc++) {
                var qName = 'nq' + cc;
                var inputEls = document.getElementsByClassName(qName);
                for (var dd=0; dd<inputEls.length; dd++) {
                    if (inputEls[dd].checked) {
                        anxietyIndex += parseInt(inputEls[dd].value);
                    }
                }
            }
            userInfo.previousVisitAnxiety.push(anxietyIndex);
            storeUserInfo();
            hideForm();
            showBuffer();
            showExercise();
            displayImage(userInfo.lastLevelIndex,userInfo.lastImageIndex);
            indicateLevel();
        }
    }
}

var userInfo = {};

var chartSection        = gebi('chartSection');
var formPopup           = gebi('formPopup');
var submitButton        = gebi('submitButton');
var chartContainer      = gebi('chartContainer');
var progressForm        = gebi('progressForm');
var progressFormButton  = gebi('submitProgressForm');
var evalform            = gebi('questionForm');
var evalformButton      = gebi('submitForm');

var spanEls = document.getElementsByClassName('userName');

/*****************************
    BEGINNING OF LOGIC
****************************/

if (submitButton) {
    submitButton.addEventListener('click', processQuestionnaire, false);
}

if (evalformButton) {
    evalformButton.addEventListener('click', formHandler);
}

initUserInfo();

//populate all spans with class 'userName' with (capitalized) user name
for (var bb=0; bb<spanEls.length; bb++) {
    spanEls[bb].textContent = userInfo.userName;
}
