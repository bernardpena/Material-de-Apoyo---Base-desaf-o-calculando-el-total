let precio = 400000;
let cantidad = 0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

function agregar(valuePar) {
  document.getElementById("cantidad").value;
  if (valuePar.value == "suma") {
    cantidad--;
  } else {
    cantidad++;
  }

  document.getElementById("cantidad").textContent = cantidad;
  total = precio * cantidad;

  document.getElementById("valor-total").textContent = total;
  console.log(cantidad + " " + total + " sumando");
}

function restar(valuePar) {
  document.getElementById("cantidad").value;
  if (valuePar.value == "resta") {
    cantidad++;
  } else {
    cantidad--;
  }
  document.getElementById("cantidad").textContent = cantidad;

  if (cantidad <= 0) {
    total = 0;
    cantidad = 0;
    document.getElementById("valor-total").textContent = total;
    document.getElementById("cantidad").textContent = 0;
  } else {
    total = precio * cantidad;
    console.log(cantidad + " " + total + " restando");
  }
  document.getElementById("valor-total").textContent = total;
}
