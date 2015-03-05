var device = "";
//FitCoin session storage
if(typeof(Storage) !== "undefined") {
    var fitCoin = sessionStorage.getItem("fitCoin");
} else {
    var fitCoin = 1000;
}
if(typeof fitCoin == 'undefined'){
	alert('undefined');
}
else{
	if(fitCoin == null){
		fitCoin = 1000;
	}
}
//Graph Data session storage
if(sessionStorage.getItem("timeArray") == null || sessionStorage.getItem("coinArray") == null) {
    sessionStorage.setItem("timeArray", [0, 1, 2, 3, 4, 5]);
	sessionStorage.setItem("coinArray", [950, 1075, 1120, 920, 930, 1000]);
}
//Redeemed Array session storage
if(sessionStorage.getItem("redeemedArray") == null) {
	sessionStorage.setItem("redeemedArray", []);
}

function selected(id){
	document.getElementById(id).classList.add('selected');
	if(id == "applewatch"){
		document.getElementById("jawbone").classList.remove('selected');
		document.getElementById("fuelband").classList.remove('selected');
	}
	if(id == "jawbone"){
		document.getElementById("applewatch").classList.remove('selected');
		document.getElementById("fuelband").classList.remove('selected');
	}
	if(id == "fuelband"){
		document.getElementById("jawbone").classList.remove('selected');
		document.getElementById("applewatch").classList.remove('selected');
	}
	device = id;
}
function showDevice(id){
	var selected;
	if(id == "applewatch"){
		document.getElementById('apple-panel').classList.remove('hidden');
		$('#myModal').modal('hide')
	}
	if(id == "jawbone"){
		document.getElementById('jawbone-panel').classList.remove('hidden');
		$('#myModal').modal('hide')
	}
	if(id == "fuelband"){
		document.getElementById('nike-panel').classList.remove('hidden');
		$('#myModal').modal('hide')
	}
	document.getElementById(id).classList.remove('selected');
	document.getElementById(id).classList.add('hidden');
}
function redeem(value, id){
	var beforeAmount = 1000;
	if(typeof(Storage) !== "undefined") {
		if(!isNaN(sessionStorage.getItem("fitCoin"))) {
			beforeAmount = sessionStorage.getItem("fitCoin");
		}
	} 
	var amount = parseInt(beforeAmount) + parseInt(value);
	sessionStorage.setItem("fitCoin", amount);
	var timeArray = sessionStorage.getItem("timeArray").split(",");
	sessionStorage.setItem("timeArray", sessionStorage.getItem("timeArray")+", "+timeArray.length);
	sessionStorage.setItem("coinArray", sessionStorage.getItem("coinArray")+", "+parseInt(parseInt(fitCoin)+parseInt(value)));
	sessionStorage.setItem("redeemedArray", sessionStorage.getItem("redeemedArray")+" "+id);
}
function reset(){
	sessionStorage.setItem("fitCoin", 1000);
	sessionStorage.setItem("timeArray", [0, 1, 2, 3, 4, 5]);
	sessionStorage.setItem("coinArray", [950, 1075, 1120, 920, 930, 1000]);
	sessionStorage.setItem("redeemedArray", []);
}