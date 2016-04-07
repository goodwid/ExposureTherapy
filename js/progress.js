var chartSection = gebi('chartSection');
var formPopup = gebi('formPopup');

function showQuestionnaire() {
    chartSection.style.display = 'none';
    formPopup.style.display = 'block';
}

function showCharts() {
    formPopup.style.display = 'none';
    chartSection.style.display = 'flex';
}


window.onload = showQuestionnaire();
