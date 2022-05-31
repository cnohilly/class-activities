var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods


li1.textContent = "Apples";
// listEl.appendChild(li1);
li2.textContent = "Pizza";
// listEl.appendChild(li2);
li3.textContent = "Dumplings";
// listEl.appendChild(li3);
li4.textContent = "Cupcakes";
// listEl.appendChild(li4);
listEl.append(li1,li2,li3,li4);
body.append(listEl);

var setListStyle = function(element,bgColor){
    element.setAttribute("style","color:#fff;padding:5px;margin-left:35px;background-color:"+bgColor+";");
}

listEl.setAttribute("style","background-color:#333333;padding:20px;");
setListStyle(li1,'blue');
setListStyle(li2,'red');
setListStyle(li3,'green');
setListStyle(li4,'orange');

//listEl.className = "list-class";
listEl.className += " list-class-two";
document.querySelector('.list-class-two').style.color = 'teal';