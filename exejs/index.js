//window.onload = function() {
//  document.getElementById('main-content').innerHTML = 'Hello, github pages :)'
//}
var context = {};

if (localStorage.exejs) {
	context.exejs = JSON.parse(localStorage.exejs)
} else {
	context.exejs = [];
}

function exejsFunc() {
	context.exejs.push($("#exejs").val());
	localStorage.exejs = JSON.stringify(context.exejs);
	showExejsHistory();

	try {
		eval($("#exejs").val());
	} catch (err) {}
}

function clearHistory() {
	localStorage.exejs = '';
	context.exejs = [];
	showExejsHistory();
}

function showExejsHistory() {
	$("#historyContainer").empty();
	for (let [index, value] of context.exejs.entries()) {
		$("#historyContainer").append("<div>" + index + ":" + value + "</div>")
	}
}

window.onload = function () {
	showExejsHistory();
}
