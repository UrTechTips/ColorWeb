const titleEle = document.getElementById("title");

const redBtn = document.getElementById("redBtn");

redBtn.addEventListener("click", () => {
	document.getElementById("Background").style.backgroundColor = "#ff0000";
});

const greenBtn = document.getElementById("greenBtn");

greenBtn.addEventListener("click", () => {
	document.getElementById("Background").style.backgroundColor = "#00ff00";
});

const blueBtn = document.getElementById("blueBtn");

blueBtn.addEventListener("click", () => {
	document.getElementById("Background").style.backgroundColor = "#0000ff";
});
