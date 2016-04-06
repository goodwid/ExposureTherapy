/*
Assuming userInfo object's previousVisitData will be replaced by:
previousVisitLevels
previousVisitEvalResults
*/

//Examples to work from:
//visitLevels: [2, 4, 7, 8];
//visitEvalResults: [6, 5, 5, 4];

function generateChartData(visitInfo) {     //where parameter visitInfo is either visitLevels or visitEvalResults
    var chartData = {};
    chartData.visits = [];
    for (var aa=1; aa<=userInfo[visitInfo].length; aa++) {
        charttData.visits.push('Visit ' + aa);
    }
    if (visitInfo = visitLevels) {
        chartData.chartTitle = 'Highest Level Reached By Visit'
        chartData.axisTitle = 'Highest Level Reached'; //Not sure if this will be x-axis or y-axis, but it is the non-"Visit" axis
        chartData.dataPoints = userInfo.visitLevels;
    } else {
        chartData.chartTitle = 'Phobic Index By Visit'
        chartData.axisTitle = 'Phobic Index';
        chartData.dataPoints = userInfo.visitEvalResults;
    }
    return chartData;
}
