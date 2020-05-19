let imageShow = document.getElementsByClassName('nested-image');
let positionHolder = 0;

let backBtn = document.getElementsByTagName('button')[0];
let iconBorder = document.getElementsByClassName('icon-image');

backBtn.addEventListener('click', backWard);

let forwardBtn = document.getElementsByTagName('button')[1];

forwardBtn.addEventListener('click', forWard);

addEventListener('keydown', function(event) {
	if (event.which == 37) {
		backWard();
	} else if (event.which === 39) {
		forWard();
	}
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

// let randomBtn = document.getElementsByTagName('button')[2];

// function randomChange() {
// 	for (image of imageShow) {
// 		image.style.zIndex = -1;
// 	}
// 	let randomiser = Math.floor(Math.random() * imageShow.length);
// 	imageShow[randomiser].style.zIndex = 1;
// }
// randomBtn.addEventListener('click', function() {
// 	setInterval((randomChange, 5000));
// });
