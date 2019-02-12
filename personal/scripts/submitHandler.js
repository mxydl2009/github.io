function submitHandler(ev) {
	submitInfo();
	// var submitBtn = getActivedObject(ev);
	ev.preventDefault();
	var submitMark = false;
	var inputs = document.getElementById('buy').getElementsByTagName('input');
	for(var i = 0; i < inputs.length; i ++) {//保证每个输入控件都有值；
		if(inputs[i].value == '') {
			alert("Please choose the " + inputs[i].name);
			return false;
		}
	}
	var submitMark = true;
	var buy = document.getElementById('buy');
	if(submitMark) {
		buy.submit();
	}
}