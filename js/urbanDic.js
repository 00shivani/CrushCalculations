
//      📒 Urban Dictionary API 📒      //

var tab2 = document.querySelector(".tab2");
var tab2result = document.querySelector(".tab2result");
var result1 = document.querySelector("#result1");
var example1 = document.querySelector("#example1");
var name1 = document.querySelector ("#name1")

var result2 = document.querySelector("#result2");
var example2 = document.querySelector("#example2");
var name2 = document.querySelector ("#name2")

tab2result.style.display = "none";

function returnDef () {
	var term = document.getElementById("crushDef").value;

	var baseURL = "https://mashape-community-urban-dictionary.p.rapidapi.com/";
	var apiHost = "mashape-community-urban-dictionary.p.rapidapi.com";
	var apiKey = "05a0718b65msh3f8b2bd2887efe7p196466jsn7d7454e5ab57";
	var url = baseURL + "define?term=" + term;

	var options = {
		headers: {
			'X-RapidAPI-Key': apiKey, 
			'X-RapidAPI-Host': apiHost
		}	
	};

	fetch(url, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			name1.textContent = term;
			result1.textContent = response.list[0].definition;
			example1.textContent = response.list[0].example;

			name2.textContent = term;
			result2.textContent = response.list[1].definition;
			example2.textContent = response.list[1].example;

			name3.textContent = term;
			result3.textContent = response.list[2].definition;
			example3.textContent = response.list[2].example;
		})

		.catch(err => console.error(err));
	
tab2.style.display = "none";
tab2result.style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function tryAgain2 () {
    tab2result.style.display = "none";
    tab2.style.display = "block";
}