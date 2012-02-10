jq = jQuery.noConflict();
var names;

function appendName(name) {
	jq('#playerList').append('<li>'+name+'</li>');
}

function loadNames() {
	for (var i = 0; i < names.length; i++) {
		appendName(names[i]);
	}
}

function saveName(e) {
	var name = jq('#playerName').val();
	names.push(name);
	if (typeof(localStorage) !== "undefined") {
		localStorage.names = JSON.stringify(names);
	}

	appendName(name);
}

jq(document).ready(function () {
	if (typeof(localStorage) === "undefined" || typeof(localStorage.names) === "undefined") {
		names = new Array();
	} else {
		names = JSON.parse(localStorage.names);
	}

	loadNames();
	jq('#submitName').click(saveName);
});