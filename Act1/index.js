/// nombre y semestre
function agregarDatos() {
    var nombre = document.getElementById("nombre").value;
    document.getElementById("nombre2").innerHTML = nombre.toUpperCase();
    var semestre = document.getElementById("semestre").value;
    document.getElementById("semestre2").innerHTML = semestre;
  }
//

////// Adicionar materias y sus valores
$(document).ready(function(){
    
        var maxField = 10; //Limite de incremento
        var addButton = $('#btn-add'); //Boton de agregar
        var materias = $('#materias'); //div nombre materia
        var fieldHTML = '<tr><td><input type="text" name="nmateria[]" id="nmateria"  class="form-control" placeholder="Nombre Materia" value=""></td><td><div class="input-group"><div class="input-group-prepend"><span class="input-group-text">$</span></div><input type="number" name="vmateria[]" onchange="suma();" class="form-control vmateria text-end" placeholder="Valor Materia" value=""></div></td><td> <button class="btn btn-danger btn-delete" id="btn-delete"  name="">x</button> </td></tr>'; //New input field html 
        var x = 1; //Initial field counter is 1
        
        //Adicionar button is clicked
        $(addButton).click(function(){
            //Check maximum number of input fields
            if(x < maxField){ 
                x++; //Increment field counter
                $(materias).append(fieldHTML); //Add field html
            }
        });
        
        // Eliminar button is clicked
        $(materias).on('click', '.btn-delete', function(e){
            e.preventDefault();
            $(this).parent('tr').remove(); //Elimina field html
            x--; //Disminuir field counter
        });


        $("body").on("click",".btn-delete", function() {
            $(this).parent().parent().remove();
            sumar_columnas();
        });
       
    

    
  });


// fin adicionar materias

//

function suma() {
    var add = 0;
    const pdcto = 20;
    var total = 0;
    const papeleria = 20000;
    const carnet = 8000;
    //contador = 1;
    $('.vmateria').each(function() { /// busco la class para no afectar los id no los name
      if (!isNaN($(this).val())) {
        add += Number($(this).val());
        
        if (add < 0) {
          add = add * -1;
        }
  
        valor1 = add;
      }
    });
    $('#subtotal').val(valor1);

    // descuento del 20 % del total

    
    dcto = (valor1*pdcto/100); /// dcto

    $('#dcto').val(dcto);

    total=valor1-dcto;

    $('#total').val(total); // total

    granTotal= total+papeleria+carnet;

    $('#granTotal').val(granTotal); // total


  };

