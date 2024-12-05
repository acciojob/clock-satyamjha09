
// const displayTime = document.getElementById("timer");

// let currentTime = new Date();

// setInterval(

// 	function() {
// 		currentTime = new Date()
// 		displayTime.innerHTML = currentTime.toLocaleString();
// 	},1000
	
// )

const displayTime = document.getElementById("timer");

let currentTime = new Date()

setInterval(() => {
	currentTime = new Date()
	displayTime.innerHTML = currentTime.toLocaleString();
},1000)

