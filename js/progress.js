
// function showQuestionnaire() {
//     chartSection.style.display = 'none';
//     formPopup.style.display = 'block';
// }

function showCharts() {
    if (!userInfo.evalComplete) {
        chartIntro.textContent = 'The chart below shows the highest level reached for each of your past visits to Conquer It! If you see ups and downs, don\'t get discouraged. Remember that each visit to the Exercises page means progress, whether you advanced a level, stayed put, or returned to a previous level. You\'re working to conquer your fear, and you should be proud of that!';
    }
    hideEl(formPopup);
    showEl(chartContainer);
    createLevelChart (generateLevelChartData());
    createPhobiaChart (generatePhobiaChartData());

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

function generateLevelChartData() {
    var chartData = {};
    dataLength = userInfo.previousVisitLevels.length;
    var labels = [];
    var tempdata = [];
    chartData.barColor = '#b2f9ed';
    chartData.dataPoints = [];

    labels.push('Starting Point');
    for (var aa=1; aa <= dataLength; aa++) {
        labels.push('Visit ' + aa);
    }
    if (dataLength >10) {
        tempdata[0] = userInfo.previousVisitLevels[0];
        tempdata.push(userInfo.previousVisitLevels.slice(-10));    // Grab last 10
    } else {
        tempdata = userInfo.previousVisitLevels;
    }
    for (var i=0;i < Math.max(labels.length, tempdata.length) ;i++) {
        chartData.dataPoints.push([labels[i],tempdata[i]]);
    }
    chartData.chartTitle = 'Highest Level Reached By Visit'
    chartData.axisTitle = 'Highest Level Reached';

    // chartData.chartTitle = 'Summary of Visit Levels';

    return chartData;
}

function generatePhobiaChartData() {
    var chartData = {};
    chartData.barColor = '#b2f9ed';
    chartData.labels = [];
    chartData.labels.push('Starting Point');
    for (var bb=1; bb <= userInfo.previousVisitAnxiety.length; bb++) {
        chartData.labels.push('Visit ' + bb);
    }
    chartData.chartTitle = 'Phobic Index By Visit'
    chartData.axisTitle = 'Phobic Index';
    chartData.dataPoints = [userInfo.previousVisitAnxiety[0]];
    chartData.dataPoints = userInfo.previousVisitAnxiety.slice(Math.max(userInfo.previousVisitAnxiety.length-10,0));   // grab only the last 10 data points.
    // chartData.chartTitle = 'Summary of Phobic Index';

    return chartData;
}

function createLevelChart(data) {   // uses highcharts to display data, function taken from snippet on highcharts' website and modded.
    $('#levelChart').highcharts({
        chart: {
            Type: 'column',
            backgroundColor: '#E0CCD3'
        },
        title: {
            text: data.chartTitle
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
                    text: data.AxisTitle,
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
            name: data.axisTitle,
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
            text: data.chartTitle
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
                    text: data.AxisTitle,
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
            name: data.axisTitle,
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

var chartSection = gebi('chartSection');
var formPopup = gebi('formPopup');
var submitButton = gebi('submitButton');
var chartIntro = gebi('chartIntro');
var chartContainer = gebi('chartContainer');

// hideEl(formPopup);
submitButton.addEventListener('click', processQuestionnaire, false);

// window.onload = showQuestionnaire();
