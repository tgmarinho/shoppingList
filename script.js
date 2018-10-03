var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelector("li");

var btnDelete = document.getElementById


function inputLength() {
	return input.value.length;
}

function createButtonDelete() {
	var btnDelete = document.createElement("button");
	var lblButton = document.createTextNode("Delete");
	btnDelete.classList.add("delete");
	btnDelete.appendChild(lblButton);
	btnDelete.addEventListener("click", function(event) {
		event.target.parentNode.remove()
	})
	return btnDelete;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(createButtonDelete());
	ul.appendChild(li);

	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function flipDone(event) {
	console.log(event)
	li = event.target
	li.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", flipDone)

