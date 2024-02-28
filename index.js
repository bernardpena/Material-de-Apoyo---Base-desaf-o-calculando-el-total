let precio = 400000
let cantidad = 0

// precioSpan = document.querySelector(".precio-inicial");
// precioSpan.innerHTML = precio

// let resta = document.getElementById('resta');
// resta.disable = true



function agregar(valuePar){
    document.getElementById('cantidad').value;
    if(valuePar.value == 'suma'){
        cantidad--;
    } else {
        cantidad++;
    }
    document.getElementById('cantidad').textContent = cantidad;
    total = precio * cantidad
    document.getElementById('valor-total').textContent = total
}

function restar(valuePar){
    document.getElementById('cantidad').value;
    if(valuePar.value == 'resta'){
        cantidad++;
    } else {
        cantidad--;
    }
    document.getElementById('cantidad').textContent = cantidad;

    if (cantidad == 0) {
        // total = 0
        console.log(cantidad == 0)
        resta = document.querySelector('resta')
        resta.innerHTML = button.enable = false

    } else{
        total = (precio * cantidad)
        
    }
    document.getElementById('valor-total').textContent = total
}
