/// nombre y semestre
function agregarDatos() {
    var nombre = document.getElementById("nombre").value;
    document.getElementById("nombre2").innerHTML = nombre.toUpperCase();
    var semestre = document.getElementById("semestre").value;
    document.getElementById("semestre2").innerHTML = semestre;
  }
//

$(".btn_add").on("click", function() {
    var column1 = $(this).closest('tr').children()[0].textContent;
    var column2 = $(this).closest('tr').children()[1].textContent;
    var column4 = $(this).closest('tr').children()[3].textContent;
    var column5 = $(this).closest('tr').children()[4].textContent;
    
   if($("#second_table .copy_"+column1).length == 0)
    {
  
      $("#second_table").append("<tr class='copy_"+column1+"'><td>" + column1 + "</td><td>" + column2 + "</td><td>" + column4 + " </td><td class='vmateria text-end'>" + column5 + "</td><td><button class='btn btn-danger btn_remove'>- Eliminar</button></td></tr>");
    }

    sumar_columnas();
    
  });
  

  
  $("body").on("click",".btn_remove", function() {
      $(this).parent().parent().remove();
      sumar_columnas();
  });

  function sumar_columnas(){
    var sum = 0;
    $('.vmateria').each(function(x,y){
     sum += parseInt($(this).text());                                  
    });
    $("#subtotal").val(sum);
    valor1 = sum;

    const pdcto = 20;
    var total = 0;
    const papeleria = 20000;
    const carnet = 8000;

    dcto = (valor1*pdcto/100); /// dcto

    $('#dcto').val(dcto);

    total=valor1-dcto;

    $('#total').val(total); // total

    granTotal= total+papeleria+carnet;

    $('#granTotal').val(granTotal); // total

    }


    
  




