const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function(evt) {
    const contenido = evt.target.result;
    const lineas = contenido.split("\n");

    lineas.forEach((linea) => {
      const datos = linea.split(";");

      // Guardar cada parte en una variable utilizando la sintaxis de desestructuración       
      let [nombres,apellidos,diaN,mesN,anoN, ciudadNacimiento, departamentoNacimiento, paisNacimiento,grupoSanguineo,rh,genero] = datos;
      let IDL="";
      let letrasMayusculas='';

      for (let i = 0; i < nombres.length; i++) {
          const caracter = nombres.charAt(i);
          if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
          letrasMayusculas += caracter;
          }
      }
      for (let i = 0; i < apellidos.length; i++) {
          const caracter = apellidos.charAt(i);
          if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
              letrasMayusculas += caracter;
          }
      }

      IDL+=letrasMayusculas;
      function convertirFecha(dia, mes, anio) {
        // Convertir mes a número
        const meses = {
          "enero": "01",
          "febrero": "02",
          "marzo": "03",
          "abril": "04",
          "mayo": "05",
          "junio": "06",
          "julio": "07",
          "agosto": "08",
          "septiembre": "09",
          "octubre": "10",
          "noviembre": "11",
          "diciembre": "12"
        };
        const mesNum = meses[mes.toLowerCase().trim()];
      
        // Convertir día y año a números con ceros a la izquierda si son de un solo dígito
        const diaStr = dia < 10 ? "0" + dia : dia.toString();
        const anioStr = anio.toString();
      
        // Unir los tres valores en un string de números
        const fechaNum = diaStr + mesNum + anioStr;
      
        return fechaNum;
      }


      IDL+=convertirFecha(diaN,mesN,anoN);


      function obtenerPrimerasTresLetras(texto) {
        // Obtener las primeras tres letras utilizando substring o slice
        var primerasTresLetras = texto.slice(0, 4);
      
        // Devolver las primeras tres letras en una variable
        return primerasTresLetras;
      }

      let ciudad=obtenerPrimerasTresLetras(ciudadNacimiento);
      let departamento=obtenerPrimerasTresLetras(departamentoNacimiento);
      let pais=obtenerPrimerasTresLetras(paisNacimiento);

      function eliminarUltimosCaracteres(cadena) {
        if (cadena.length > 9) {
          // Eliminar los últimos caracteres de la cadena
          const nuevaCadena = cadena.slice(0, 9);
      
          return nuevaCadena;
        } else {
          // Devolver la cadena original si tiene 9 caracteres o menos
          return cadena;
        }
      }

      IDL+=ciudad+departamento+pais;

      IDL+=genero.charAt(0);

      IDL+=grupoSanguineo;
      IDL+=rh+1;

      function eliminarEspacios(cadena) {
        // Reemplazar todos los espacios en blanco por una cadena vacía
        const nuevaCadena = cadena.replace(/\s+/g, "");
      
        return nuevaCadena;
      }

      let pegaditos=eliminarEspacios(IDL);

      let idls = [];
    
        idls = pegaditos;















        console.log((idls));
    });
  }

  function readFile(file) {
      if (!file || !file.type || !file.type.match('text/plain')) {
          console.error('Invalid file type');
          return;
      }
      reader.readAsText(file);
  }

  readFile(file);
});