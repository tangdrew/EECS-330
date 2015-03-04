var device = "";
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
}