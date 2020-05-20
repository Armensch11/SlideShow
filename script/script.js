let imageShow = document.getElementsByClassName('nested-image');
let positionHolder = 0;

let backBtn = document.getElementsByTagName('button')[0];
let iconBorder = document.getElementsByClassName('icon-image');

backBtn.addEventListener('click', backWard);

let forwardBtn = document.getElementsByTagName('button')[1];

forwardBtn.addEventListener('click', forWard);
let randomBtn = document.getElementById('random');
let stopSlide;
let stopBtn = document.getElementById('stop');

stopBtn.addEventListener('click', () => clearInterval(stopSlide));
randomBtn.addEventListener('click', randSlide);

addEventListener('keydown', function(event) {
	if (event.which === 37) {
		backWard();
	} else if (event.which === 39) {
		forWard();
	}
	let stopSlide;
	// if (event.which === 38) {
	// 	stopShow = setInterval(randomShow, 3000);
	// }
});

function backWard() {
	for (image of imageShow) {
		image.style.zIndex = -1;
	}
	for (border of iconBorder) {
		border.style.border = '1px solid';
	}

	if (positionHolder === 0) {
		positionHolder = imageShow.length - positionHolder - 1;
		imageShow[positionHolder].style.zIndex = 1;

		iconBorder[positionHolder].style.border = '3px solid darkgrey';
	} else {
		positionHolder = positionHolder - 1;
		imageShow[positionHolder].style.zIndex = 1;

		iconBorder[positionHolder].style.border = '3px solid darkgrey';
	}
}
function forWard() {
	for (image of imageShow) {
		image.style.zIndex = -1;
	}
	for (border of iconBorder) {
		border.style.border = '1px solid grey';
	}
	if (positionHolder === imageShow.length - 1) {
		positionHolder = 0;
		imageShow[positionHolder].style.zIndex = 1;
		iconBorder[positionHolder].style.border = '3px solid yellow';
	} else {
		positionHolder = positionHolder + 1;
		imageShow[positionHolder].style.zIndex = 1;
		iconBorder[positionHolder].style.border = '3px solid yellow';
	}
}
function randomShow() {
	for (image of imageShow) {
		image.style.zIndex = -1;
	}
	for (border of iconBorder) {
		border.style.border = '1px solid grey';
	}
	let randomiser = Math.floor(Math.random() * imageShow.length);
	imageShow[randomiser].style.zIndex = 1;
	iconBorder[randomiser].style.border = '3px solid purple';
}
function randSlide() {
	stopSlide = setInterval(randomShow, 3000);
}
// setTimeout(noAction, 10000);
