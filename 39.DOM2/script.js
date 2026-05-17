
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 

// e[2].matches("#redbox")
// false

// e[3].matches("#redbox")
// true

// e[3].closest("#redbox")
// <div class=​"box" id=​"redbox" style=​"background-color:​ green;​">​3​</div>​

// e[3].closest(".container")
// <div class=​"container">​…​</div>​

// e[3].closest("html")
// <html lang=​"en">​view-sourcescroll<head>​…​</head>​<body>​…​</body>​</html>​

// document.querySelector(".container").contains(e[2])
// true

// document.querySelector(".container").contains(e[0])
// true

// document.querySelector(".container").contains(e[6])
// false