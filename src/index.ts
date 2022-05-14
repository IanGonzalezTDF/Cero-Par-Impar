rotulo.innerHTML = "Ingrese un número";

let boton = document.getElementById("calcular");

boton.addEventListener("click", () => {
  let num: number = Number(dato.value);

  if (num == 0) {
    console.log("El " + num + " ingresado es CERO");
  } else if (num % 2 == 0) {
    console.log("El " + num + " ingresado es PAR");
  } else {
    console.log("El " + num + " ingresado es IMPAR");
  }
});
