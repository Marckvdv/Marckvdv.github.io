var tags = [ 'b', 'p', 'a', 'h3', 'hr' ];

var elements = [];
for (var i = 0; i < tags.length; ++i) {
    var tag = tags[i];
    var elementsOfTag = Array.prototype.slice.call(document.getElementsByTagName(tag));
    elements = elements.concat(elementsOfTag);
}

var intervalID;

function unhideElement() {
	if(elements.length == 0) {
		clearInterval(intervalID);
		return;
	}

	var randomIndex = (Math.random() * elements.length) | 0;
	var randomElement = elements.splice(randomIndex, 1)[0];
	randomElement.style.visibility = 'visible';
	randomElement.style.opacity = 1;
}

intervalID = setInterval(unhideElement, 20);
