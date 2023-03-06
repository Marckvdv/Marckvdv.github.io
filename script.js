var boldTags = Array.prototype.slice.call(document.getElementsByTagName('b'));
var paragraphTags = Array.prototype.slice.call(document.getElementsByTagName('p'));
var linkTags = Array.prototype.slice.call(document.getElementsByTagName('a'));

var elements = linkTags.concat(boldTags.concat(paragraphTags));

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

