var medium_small = window.matchMedia("(max-width: 991px)")
var img_dos = document.getElementById("second_section_img").innerHTML;

function changesInMediumSmallScreen(screenSize){
	if(screenSize.matches)putInlineImg(img_dos)
	else putImgBack(img_dos)
}

function putInlineImg(img){
	document.getElementById("second_section_img").innerHTML = "";
	document.getElementById("second_section_text").innerHTML += img;
}

function putImgBack(img){
	let container = document.querySelector("#second_section_text");
	if(container.getElementsByTagName("img").length > 0){
		container.lastElementChild.remove();
		document.getElementById("second_section_img").innerHTML += img;
	}		
}

changesInMediumSmallScreen(medium_small)
medium_small.addListener(changesInMediumSmallScreen)