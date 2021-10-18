
var Peliculas = {
    "movie": [
    {"imagen" : "../img/pelicula1.jpg",
    "Titulo" : "Venom2",
    "Duracion" : "60min",
    "Clasificacion" : "B",
    "Butacas" : "Argentina V03",
    "Horarios" : [
        "7:00 am - 9:00am",
        "10:00 am - 12:00md"
    ]
    },
    {"imagen" : "../img/pelicula2.jpg",
    "Titulo" : "Spiderman",
    "Duracion" : "60min",
    "Clasificacion" : "B",
    "Butacas" : "Argentina V03",
    "Horarios" : [
        "7:00 am - 9:00am",
        "10:00 am - 12:00md"
    ]
    },  
    {"imagen" : "../img/pelicula3.jpg",
    "Titulo" : "Los pitufos",
    "Duracion" : "60min",
    "Clasificacion" : "B",
    "Butacas" : "Argentina V03",
    "Horarios" : [
        "7:00 am - 9:00am",
        "10:00 am - 12:00md"
    ]
    }, 
  ]
}
    function cargarDatos(datos){
        var total = datos.length
        data = "<div class='peliculas'>"
        for(var i = 0; i<total; i++){
            
            data += "<div id='nombrePelicula'>"+datos[i].Titulo+"</div>"
            data += "<div id='imagenPelicula'>"
            data += "<img src='" + datos[i].imagen+"' alt=''"
            data += "</div>"
            data += "<div id='peliculaInformacion'>"
            data += "<div id='info1'>" 
            data += "<h4>"+datos[i].Clasificacion+"</h4> <h4 id='duracionPelicula'>"+datos[i].Duracion+"</h4>"
            data += "</div>"
            data += "<div id='peliculaInformacionRecuadro'>"
            data += "<table>"
            data += "<tr>"
            data += "<td>Formato peliculas (2D, 3D)</td>"
            data += "</tr>"
            data += " <tr>"
            data += " <td>Horarios:"
            data += "<span>"+datos[i].Horarios+"</span>"
            data += "</td>"
            data += "</tr>"
            data += "<tr>"
            data += "<td> <div id='btnContainer'><button id='btnComprar'>Reservar Tickets</button></div></td>"
            data += "</tr>"
            data += "</table>"
            data += "</div>"
            data += "</div>"
           
        }
        data += "</div>"
        return data
    }

    var div= document.getElementById("catalogo")
    div.innerHTML = cargarDatos(Peliculas.movie)

    for(var i= 0; i < document.getElementsByTagName("button").length; i++){
        console.log(i)
        const buttonComprar = document.getElementById("btnComprar")
        var contador = 0
        buttonComprar.addEventListener("click", () =>{
            contador++
            if(contador == 1){
                const nuevoNodo = document.createElement("input")
                nuevoNodo.setAttribute("type", "number")
                nuevoNodo.setAttribute("name", "numeroTickets")
                nuevoNodo.setAttribute("id", "numeroTickets")
                nuevoNodo.setAttribute("maxlength", "1")
                nuevoNodo.setAttribute("minlength", "1")
                const buttonRealizarCompra = document.createElement("input")
                buttonRealizarCompra.setAttribute("type", "submit")
                buttonRealizarCompra.setAttribute("name", "realizarCompra")
                buttonRealizarCompra.setAttribute("value", "Comprar tickets")
                const redireccion = document.createElement("a")
                redireccion.setAttribute("href", "../html/index2.html")
                redireccion.appendChild(buttonRealizarCompra)
                const container = document.getElementById("btnContainer")
                
                container.appendChild(nuevoNodo)
                container.appendChild(redireccion)
            }
           
        })
    }
    

    localStorage.setItem("Movies", JSON.stringify(Peliculas));

  
