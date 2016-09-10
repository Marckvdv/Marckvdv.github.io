var boldTags = Array.prototype.slice.call(document.getElementsByTagName('b'));
var paragraphTags = Array.prototype.slice.call(document.getElementsByTagName('p'));
var linkTags = Array.prototype.slice.call(document.getElementsByTagName('a'));

var elements = linkTags.concat(boldTags.concat(paragraphTags));

for(var i = 0; i < elements.length; ++i) {
	element = elements[i];
	element.style.opacity = 0;
	element.style.visibility = 'hidden';
}

var intervalID;

function unhideElement() {
	if(elements.length == 0) {
		clearInterval(intervalID);
		console.log("OI");
		return;
	}

	var randomIndex = (Math.random() * elements.length) | 0;
	var randomElement = elements.splice(randomIndex, 1)[0];
	randomElement.style.visibility = 'visible';
	randomElement.style.opacity = 1;
}

intervalID = setInterval(unhideElement, 20);

