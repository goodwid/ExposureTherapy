
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

function generateChartData() {
    var chartData = {};
    chartData.barLabels = [];
    for (var aa=1; aa <= userInfo.previousVisitLevels.length; aa++) {
        chartData.barLabels.push('Visit ' + aa);
    }

    chartData.barChartTitle = 'Highest Level Reached By Visit'
    chartData.barAxisTitle = 'Highest Level Reached'; //Not sure if this will be x-axis or y-axis, but it is the non-"Visit" axis
    chartData.barDataPoints = userInfo.previousVisitLevels;
    chartData.splineChartTitle = 'Phobic Index By Visit'
    chartData.splineAxisTitle = 'Phobic Index';
    chartData.splineDataPoints = userInfo.previousVisitAnxiety;
    chartData.chartTitle = 'Summary of Visit Levels and Phobic Index'
    return chartData;
}

function showChart(data) {   // uses highcharts to display data, function taken from snippet on highcharts' website and modded.
    $('#achieveChart').highcharts({
        chart: {
            zoomType: 'xy',
            backgroundColor: '#ffffff'
        },
        title: {
            text: data.chartTitle
        },
        // subtitle: {
        //     text: 'Source: WorldClimate.com'
        // },
        xAxis: [{
            categories: data.barLabels,
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: data.splineAxisTitle,
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: data.barAxisTitle,
                style: {
                    color: '#EAAB16'
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: '#EAAB16'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 45,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FAFAFA'
        },
        series: [{
            name: data.barAxisTitle,
            type: 'column',
            yAxis: 1,
            data: data.barDataPoints,
            color: '#00041F',
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: data.splineAxisTitle,
            type: 'spline',
            data: data.splineDataPoints,
            color: '#EAAB16',
            tooltip: {
                valueSuffix: ''
            }
        }]
    });
}



var chartSection = gebi('chartSection');
var formPopup = gebi('formPopup');
var submitButton = gebi('submitProgressForm');
var chartIntro = gebi('chartIntro');

showChart (generateChartData());
// submitButton.addEventListener('click', processQuestionnaire, false);

// window.onload = showQuestionnaire();
