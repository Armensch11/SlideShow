let imageShow = document.getElementsByClassName('nested-image');
let positionHolder = 0;

let backBtn = document.getElementsByTagName('button')[0];
let iconBorder = document.getElementsByClassName('icon-image');
console.log(iconBorder);
backBtn.addEventListener('click', function() {
	for (image of imageShow) {
		image.style.zIndex = -1;
	}
	for (border of iconBorder) {
		border.style.border = '1px solid';
	}

	if (positionHolder === 0) {
		positionHolder = imageShow.length - positionHolder - 1;
		imageShow[positionHolder].style.zIndex = 1;

		iconBorder[positionHolder].style.border = '3px solid darkgreen';
	} else {
		positionHolder = positionHolder - 1;
		imageShow[positionHolder].style.zIndex = 1;

		iconBorder[positionHolder].style.border = '3px solid darkgreen';
	}
});

let forwardBtn = document.getElementsByTagName('button')[1];

forwardBtn.addEventListener('click', function() {
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
});

let randomBtn = document.getElementsByTagName('button')[2];
// let stop = setInterval(function() {
// 	for (image of imageShow) {
// 		image.style.zIndex = -1;
// 	}
// 	let randomiser = Math.floor(Math.random() * imageShow.length);
// 	return (imageShow[randomiser].style.zIndex = 1);
// }, 5000);
// randomBtn.addEventListener(
// 	'click',
// 	setInterval(function() {
// 		for (image of imageShow) {
// 			image.style.zIndex = -1;
// 		}
// 		let randomiser = Math.floor(Math.random() * imageShow.length);
// 		return (imageShow[randomiser].style.zIndex = 1);
// 	}, 1000)
// );
// console.log(stop);
// let stopBtn = document.getElementsByTagName('button')[3];
// stopBtn.addEventListener('click', function() {
// 	return clearInterval(stop);
// });
// =====================
// let backBtn = document.getElementsByTagName('button')[0];
// console.log(backBtn);
// backBtn.addEventListener('click', function() {
// 	for (image of imageShow) {
// 		image.style.zIndex = -1;
// 	}
// 	let randomiser = Math.floor(Math.random() * imageShow.length);
// 	return (imageShow[randomiser].style.zIndex = 1);
// });
// let forwardBtn = document.getElementsByTagName('button')[1];
// console.log(forwardBtn);
// forwardBtn.addEventListener('click', function() {
// 	for (image of imageShow) {
// 		image.style.zIndex = -1;
// 	}
// 	let randomiser = Math.floor(Math.random() * imageShow.length);
// 	return (imageShow[randomiser].style.zIndex = 1);
// // });
// let stop = setInterval(function() {
// 	for (image of imageShow) {
// 		image.style.zIndex = -1;
// 	}
// 	let randomiser = Math.floor(Math.random() * imageShow.length);
// 	return (imageShow[randomiser].style.zIndex = 1);
// }, 5000);
// setInterval(function() {
// 	for (image of imageShow) {
// 		image.style.zIndex = -1;
// 	}
// 	let randomiser = Math.floor(Math.random() * imageShow.length);
// 	return (imageShow[randomiser].style.zIndex = 1);
// }, 5000);
// clearInterval(stop);
