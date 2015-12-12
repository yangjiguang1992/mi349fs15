var LEFT_IMAGE = 0;
var RIGHT_IMAGE = 4; 
var IMAGES_TO_SHOW = 4;
var SELECTED_IMAGE = 0;
var largeImageClass;

var IMAGES = [];
IMAGES[0] = "images/image0.jpg";
IMAGES[1] = "images/image1.jpg";
IMAGES[2] = "images/image2.jpg";
IMAGES[3] = "images/image3.jpg";
IMAGES[4] = "images/image4.jpg";
IMAGES[5] = "images/image5.jpg";
IMAGES[6] = "images/image6.jpg";
IMAGES[7] = "images/image7.jpg";

function $(id) {
	var element = document.getElementById(id);
	
	if (element == null)
		window.alert("missing id: " + id);
	return element;
	
}

function init(){
	var leftArrowElement;
	var rightArrowElement;
	console.log("working");
	largeImageClass = $("largeImageId");
	largeImageClass.src= IMAGES[SELECTED_IMAGE];
	for(var i = LEFT_IMAGE; i < RIGHT_IMAGE; i++){
		var currentImageElement =$("smallImageId_"+i);
		currentImageElement.className = "smallImageClass";
		currentImageElement.type = i;
		currentImageElement.src = IMAGES[i];
		currentImageElement.addEventListener("click", imageClick);
	}
	leftArrowElement = $("rightArrow");
	leftArrowElement.className = "arrowButtons";
	leftArrowElement.src = "images/right_arrow.png";
	leftArrowElement.addEventListener ("click", scrollRight);
	
	rightArrowElement = $("leftArrow");
	rightArrowElement.className = "arrowButtons";
	rightArrowElement.src = "images/left_arrow.png";
	rightArrowElement.addEventListener ("click", scrollLeft);
}
function imageClick(e){
	var targetProp = e.target;
	var largeImageElement = $("largeImageId");
	console.log("clicking");
	SELECTED_IMAGE = targetProp.type;
	largeImageClass.className = "largeImageClass";
	largeImageClass.src = IMAGES[SELECTED_IMAGE];
	
}

function scrollRight() {
	
	if (RIGHT_IMAGE < IMAGES.length){
		LEFT_IMAGE++;
		RIGHT_IMAGE++;
		
		for(var i = 0; i < IMAGES_TO_SHOW; i++) {
			var currentImageElement = $("smallImageId_"+i);
			currentImageElement.src = IMAGES[i + LEFT_IMAGE];
			currentImageElement.type = i + LEFT_IMAGE;
			}
	}
	
}

function scrollLeft() {
	
	if (RIGHT_IMAGE > IMAGES_TO_SHOW){
		RIGHT_IMAGE--;
		LEFT_IMAGE--;
		
		for(var i = 0; i < IMAGES_TO_SHOW; i++) {
			currentImageElement = $("smallImageId_"+i);
			currentImageElement.src = IMAGES[i + LEFT_IMAGE];
			currentImageElement.type = i + LEFT_IMAGE;
		}
	}
	
}
window.onload = init;