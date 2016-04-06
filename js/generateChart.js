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
        chartData.axisTitle = 'Max Level Reached';
    } else {
        chartData.axisTitle = 'Phobic Index';
    }
}
