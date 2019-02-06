/*
function MenuItem(name, kCal, lactose, gluten, img) {
    this.name = name;
    this.kCal = kCal;
    this.lactose = lactose;
    this.gluten = gluten;
    this.img = img;
}

// Objects are then instantiated using the new keyword
var menu = new MenuItem("Hot burger", 648, true, false, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KzXAxg1n5JTHwl6LtLTRPnBmBOd29vlsg0uJiBod_o5J9Tmp");
var menu1 = new MenuItem("Big burger", 434, true, true, "http://www.zarksburgers.ph/wp-content/uploads/2017/08/IMG_0052.jpg");
var menu2 = new MenuItem("Small burger", 357, false, true, "https://www.thespruceeats.com/thmb/ivY7T2DRygJN2nHwAFYqVxfbvs4=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Hamburger-Hot-Dog-58add5f03df78c345bdef6ff.jpg");
var menu3 = new MenuItem("Medium burger", 2405, true, true, "https://foremangrillrecipes.com/wp-content/uploads/2013/05/american-hamburger-foreman-grill.jpg");
var menu4 = new MenuItem("Cheese burger", 542, true, false, "https://cdn.dearcreatives.com/wp-content/uploads/2013/03/Hamburger-Recipes-All-American-Hamburger-Grilled-burger-recipes-perfect-for-grilling-season-and-beyond.-.jpg");
var menu5 = new MenuItem("Strange burger", 754, false, true, "https://cdn20.patchcdn.com/users/790386/20180525/063909/styles/T800x600/public/processed_images/shutterstock_337714676-1527287683-3245.jpg");

var menuItems = [menu,menu1,menu2,menu3,menu4,menu5];
*/

var myElement = document.getElementById("wrapper");

for(meny in food) {
    var listItem = document.createElement("div");
    var namn = document.createElement("h3");
    namn.appendChild(document.createTextNode(food[meny].name));
    listItem.appendChild(namn);

    var img = document.createElement("img");
    img.src = food[meny].img;
    img.style.width = "300px";

    listItem.appendChild(img);
    if((food[meny].lactose)) {
      var laktos = document.createElement("li");
      laktos.appendChild(document.createTextNode("Lactose"));
      listItem.appendChild(laktos);
    }
    if((food[meny].gluten)) {
      var gluten = document.createElement("li");
      gluten.appendChild(document.createTextNode("Gluten"));
      listItem.appendChild(gluten);

    }
    var kcal = document.createElement("li");
    kcal.appendChild(document.createTextNode(food[meny].kCal));
    listItem.appendChild(kcal);

    var check = document.createElement("p");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = food[meny].name;
    checkbox.name = "ordered"
    check.appendChild(checkbox);
    listItem.appendChild(check);

    myElement.appendChild(listItem);
}

function burgerOrder() {
  var allBurgers = document.getElementsByName("ordered");
  var selectedBurgers = [];

  for(var i = 0; i < allBurgers.length; ++i) {
    if(allBurgers[i].checked) {
      selectedBurgers.push(allBurgers[i].id);
    }
  }
  return selectedBurgers;
}

function getInfo() {
  var name = document.getElementsByName("fn")[0].value;
  var email = document.getElementsByName("em")[0].value;
  var gatuadress = document.getElementsByName("st")[0].value;
  var husnummer = document.getElementsByName("ho")[0].value;
  var betalmetod = document.getElementsByName("payment")[0].value;

  var genderArray = document.getElementsByName("male");
  var gender;
  for(var i = 0; i < genderArray.length; ++i) {
    if(genderArray[i].checked) {
      gender = genderArray[i].value;
    }
  }

  var burgers = burgerOrder();
  var allInfo = [name, email, gatuadress, husnummer, betalmetod, gender, burgers];
  return allInfo;
}

function printOrder() {
  document.getElementById("bekrJS").innerHTML = "";
  var info = getInfo();
  var order = document.getElementById("bekrJS");
  var title = document.createElement("h3");
  title.appendChild(document.createTextNode("Order summary(JS)"));
  order.appendChild(title);

  var burgers = document.createElement("p");
  burgers.appendChild(document.createTextNode("Burgers: " + info[6]));
  order.appendChild(burgers);

  var name = document.createElement("p");
  name.appendChild(document.createTextNode("Name: " + info[0]));
  order.appendChild(name);

  var email = document.createElement("p");
  email.appendChild(document.createTextNode("Email: " + info[1]));
  order.appendChild(email);

  var gatuadress = document.createElement("p");
  gatuadress.appendChild(document.createTextNode("Street: " + info[2]));
  order.appendChild(gatuadress);

  var husnummer = document.createElement("p");
  husnummer.appendChild(document.createTextNode("House: " + info[3]));
  order.appendChild(husnummer);

  var betalmetod = document.createElement("p");
  betalmetod.appendChild(document.createTextNode("Payment method: " + info[4]));
  order.appendChild(betalmetod);

  var gender = document.createElement("p");
  gender.appendChild(document.createTextNode("Gender: " + info[5]));
  order.appendChild(gender);


}
