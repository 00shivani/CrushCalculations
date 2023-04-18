
//      ❤️ Love Calculator API ❤️   //

var tab1 = document.querySelector(".tab1");
var tab1result = document.querySelector(".tab1result");
var percentage = document.querySelector("#percentage");
var names = document.querySelector("#names");
var result = document.querySelector("#result");

tab1result.style.display = "none";

function returnText() {
    var nameOne = document.getElementById("nameOne").value;
    // console.log(nameOne);
    var nameTwo = document.getElementById("nameTwo").value;
    // console.log(nameTwo);

    var baseURL = "https://love-calculator.p.rapidapi.com/";
    var apiHost = "love-calculator.p.rapidapi.com";
    var apiKey = "05a0718b65msh3f8b2bd2887efe7p196466jsn7d7454e5ab57";
    var url = baseURL + "getPercentage?" + "sname=" + nameTwo + "&fname=" + nameOne;

    var options = {
        headers: {
            'X-RapidAPI-Key': apiKey, 
            'X-RapidAPI-Host': apiHost
        }
    };
    
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            percentage.textContent = "Compatibility: "+ response.percentage + "%"
            names.textContent = response.fname + " & " + response.sname + ":"
            result.textContent = response.result
        })
        .catch(err => console.error(err));

tab1.style.display = "none";
tab1result.style.display = "block";

}

function tryAgain () {
    tab1result.style.display = "none";
    tab1.style.display = "block";
}
