var pizzaArray = [];

function savePizza() {
  let toppings = [];
  let imgTag = [];
  let pizzaName = document.getElementById("pizzaName").value;
  let pizzaPrice = document.getElementById("pizzaPrice").value;
  let pizzaHeat = document.getElementById("pizzaHeat").value;
  let checkBox = document.getElementsByClassName("checkbox");
  let pictureBox = document.getElementsByClassName("pics");
  let pictureInput = document.getElementsByClassName("pictureCheck");
  for (var i = 0; i < pictureBox.length; i++) {
    if (pictureInput[i].checked) {
      imgTag.push(pictureBox[i].innerHTML);
    }
  }

  for (var i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked) {
      toppings.push(checkBox[i].value);
    }
  }
  if (toppings.length >= 2) {
    pizzaArray.push({ pizzaName, pizzaPrice, pizzaHeat, toppings, imgTag });

    sessionStorage.setItem("pizzaEntry", JSON.stringify(pizzaArray));
    document.pizzaForm.reset();
  } else alert("Please select atleast 2 toppings!");
}
