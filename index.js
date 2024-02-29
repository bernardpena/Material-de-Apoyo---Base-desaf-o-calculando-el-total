let precio = 400000;
let cantidad = 0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = Intl.NumberFormat('es-419').format(precio);

function agregar(valuePar) {
  cantidad++;
  cantidadTotal = document.querySelector(".cantidad"); 
  cantidadTotal.innerHTML = Intl.NumberFormat('es-419').format(cantidad);
  total = precio * cantidad;

  document.getElementById("valor-total").textContent = Intl.NumberFormat('es-419').format(total);
  //   console.log(cantidad + " " + total + " sumando");
}

function restar(valuePar) {
  cantidad--;
  cantidadTotal = document.querySelector(".cantidad"); 
  cantidadTotal.innerHTML = Intl.NumberFormat('es-419').format(cantidad);

  if (cantidad <= 0) {
    total = 0;
    cantidad = 0;

    valorTotal = document.querySelector(".valor-total"); 
    valorTotal.innerHTML = Intl.NumberFormat('es-419').format(total);
    document.getElementById("cantidad").textContent = 0;

  } else {
    total = precio * cantidad;
    // console.log(cantidad + " " + total + " restando");
  }
  document.getElementById("valor-total").textContent = Intl.NumberFormat('es-419').format(total);
}
