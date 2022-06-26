/// Datos
function calcularDatos() {
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    let v3 = document.getElementById("v3").value;
    let v4 = document.getElementById("v4").value;
    
    


    if ( isNaN(v1) || isNaN(v2) || isNaN(v3) || isNaN(v4)) {

      document.getElementById("respuesta").innerHTML = "<p class='alert alert-danger'>Error debe digitar números.</p>";

    } else {
      
      let A = parseFloat(v1);
      let B = parseFloat(v2);
      let C = parseFloat(v3);
      let D = parseFloat(v4);

      

      if ( (A != B) && (A != C) && (A != D) && (B != C) && (B != D) && (C != D) ){

        const arreglo = [A, B, C, D];

        console.log(arreglo);

        let mayor = Math.max(...arreglo);
        let menor = Math.min(...arreglo);

        document.getElementById("respuesta").innerHTML = `<p class='alert alert-success'>El valor mínimo ingresado es ${menor} y el valor mayor es ${mayor} </p>`;

      } else {

        document.getElementById("respuesta").innerHTML = `<p class='alert alert-danger'>Hay dos o más datos iguales por favor verifique. </p>`;

      }
    
    }

  }
//



