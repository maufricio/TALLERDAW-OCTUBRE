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
    "Titulo" : "Spider-Man",
    "Duracion" : "60min",
    "Clasificacion" : "B",
    "Butacas" : "Argentina V03",
    "Horarios" : [
        "7:00 am - 9:00am",
        "10:00 am - 12:00md"
    ]
    },  
    {"imagen" : "../img/pelicula3.jpg",
    "Titulo" : "Pitufos",
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

function Cargar(datos){
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
        data += "<td><button>Comprar Tickets</button></td>"
        data += "</tr>"
        data += "</table>"
        data += "</div>"
        data += "</div>"
       
    }
    data += "</div>"
    return data
}

var also = JSON.parse(localStorage.getItem("Movies", JSON.stringify(Peliculas[1])));
console.log(also);

