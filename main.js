var queue = new Array;
function operate(operation) {
    var newValue = document.getElementById("newValue").value;
    if (operation == 1) {
        queue.unshift(newValue);//左侧入
        document.getElementById('newValue').value = "";
    }
    if (operation == 2) {
        queue.push(newValue);//右侧入
        document.getElementById('newValue').value = "";
    }

    if (operation == 3) {
        alert(queue.shift());//左侧出
        document.getElementById('newValue').value = "";
    }

    if (operation == 4) {
        alert(queue.pop());//右侧出
        document.getElementById('newValue').value = "";
    }

	var newHtml = "<div id='queue'>";
	for(var i = 0; i < queue.length ; i++){
		newHtml += "<div id='Values'>"  + queue[i] +  "</div>";

	}

	document.getElementById('body').innerHTML = newHtml + "</div>"

}

