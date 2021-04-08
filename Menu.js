var menu = JSON.parse(sessionStorage.getItem("pizzaEntry"));

var options = [];
for (var i = 0; i < menu.length; i++) {
  options.push(menu[i]);
}
console.log(menu);
function makeUL(array) {
  var list = document.createElement("ul");


  for (var i = 0; i < array.length; i++) {
    var pizzaName = document.createElement("li");
    var pizzaHeat = document.createElement("li");
    var pizzaPrice = document.createElement("li");
    var toppings = document.createElement("li");
    var imgTag = document.createElement("li");
    var br =  document.createElement("br");

    pizzaName.appendChild(
      document.createTextNode("Pizza name: " + array[i].pizzaName)
    );
    pizzaHeat.appendChild(
      document.createTextNode("Spiciness: " + array[i].pizzaHeat)
    );
    pizzaPrice.appendChild(
      document.createTextNode("Pizza price: " + array[i].pizzaPrice + "€")
    );
    toppings.appendChild(
      document.createTextNode("Toppings: " + array[i].toppings)
    );
    imgTag.innerHTML = array[i].imgTag;

    list.appendChild(pizzaName, pizzaHeat, pizzaPrice, toppings, imgTag);
    list.appendChild(pizzaHeat);
    list.appendChild(pizzaPrice);
    list.appendChild(toppings);
    list.appendChild(imgTag);
    list.appendChild(br);
  }
  console.log(list);
    return list;
}

document.getElementById("pizzaDisplay").appendChild(makeUL(menu));
