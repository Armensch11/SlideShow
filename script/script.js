let imageShow = document.getElementsByClassName('nested-image');
let positionHolder = 0;

let backBtn = document.getElementsByTagName('button')[0];
let iconFrame = document.getElementsByClassName('icon-image');
console.log(iconFrame);
backBtn.addEventListener('click', function() {
	for (image of imageShow) {
		image.style.zIndex = -1;
	}
	if (positionHolder === 0) {
		positionHolder = imageShow.length - positionHolder - 1;
		imageShow[positionHolder].style.zIndex = 1;
	} else {
		positionHolder = positionHolder - 1;
		imageShow[positionHolder].style.zIndex = 1;
	}
});

let forwardBtn = document.getElementsByTagName('button')[1];

forwardBtn.addEventListener('click', function() {
	for (image of imageShow) {
		image.style.zIndex = -1;
	}
	if (positionHolder === imageShow.length - 1) {
		positionHolder = 0;
		return (imageShow[positionHolder].style.zIndex = 1);
	} else {
		positionHolder = positionHolder + 1;
		return (imageShow[positionHolder].style.zIndex = 1);
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
