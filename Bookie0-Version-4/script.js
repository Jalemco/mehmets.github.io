// const el = document.querySelector("h2")
// const observer = new IntersectionObserver( 
//   ([e]) => e.target.classList.toggle("pinned", e.intersectionRatio < 1),
//   { threshold: [1] }
// );

// observer.observe(el);

// dark/light theme

localStorage.setItem("test", "test")

var testing = localStorage.getItem("test")

console.log(testing)


var i;
var currentTheme;


if (localStorage.getItem("theme") === null) {
	localStorage.setItem("theme", "light")
}

// IT WORKS NOW WHOOO!!! (i think)

function checkTheme() {

  currentTheme = localStorage.getItem("theme");
	
	if (currentTheme == "dark") {
		document.body.classList.toggle("dark");
    document.body.classList.add("dark");
	}
	else if (currentTheme == "light") {
		document.body.classList.toggle("light");
    document.body.classList.add("light");
	}
  else {
    document.body.classList.toggle("light");
    document.body.classList.add("light");
  }

	console.log(currentTheme);
}

function theme() {

  currentTheme = localStorage.getItem("theme");


	if (currentTheme == "dark") {
		localStorage.setItem("theme", "light");
    document.body.classList.add("light");
		document.body.classList.remove("dark");

    currentTheme = "light";
    // location.reload();

		console.log(currentTheme); 

	}

	else if (currentTheme == "light") {
		localStorage.setItem("theme", "dark");
		document.body.classList.add("dark");
		document.body.classList.remove("light");

    currentTheme = "dark";
    // location.reload();

		console.log(currentTheme); 

	}

	document.querySelector(".theme").classList.toggle("rotated");
}


// scroll to top
function up() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// random sentence generator
var sentences = ["Satranç konusunda iyiyimdir.", "Çoğu Projelerim teliflidir XD Alıntı yaparken kaynak olarak belirtin.", "Mardinliyim BD", "Aktif bir 1000k Kullanıcısıyım", "Kendimi Seviyorum"]

function newSentence() {
	var sentence = Math.floor(Math.random() * sentences.length);
	document.querySelector(".sentence").innerText = sentences[sentence];
}



function openNav() {
	document.querySelector(".top").classList.toggle("full");
	document.querySelector(".line.line1").classList.toggle("line1-bent");
	document.querySelector(".line.line2").classList.toggle("line2-bent");
	document.querySelector(".line.line3").classList.toggle("line3-bent");
}

