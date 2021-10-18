/*
Buscador de GIFs para GIPHY y envío de formulario de contacto

La aplicación deberá permitir ingresar un
texto y buscar una lista de GIFs con el texto ingresado.
Utilizaremos las APIs de https://developers.giphy.com/
Al buscar, deberá mostrar la imagen y la descripción de cada item recibido.
La aplicación tendrá una sección de contacto, donde se ingresará Nombre, Apellido, Email, Telefono y Detalle. Hacer que estos datos ingresados se muestren en otra página debajo de un mensaje que diga: "Se ha enviado el mensaje correctamente".

Se deberá utilizar todos los aprendido
hasta el momento.

Api key: uOzNt4S1zh2ZqlIy1tzwx3JkZkf2dggG
link: https://api.giphy.com/v1/gifs/search?api_key=uOzNt4S1zh2ZqlIy1tzwx3JkZkf2dggG

{
    "data":[],
    "pagination":{"total_count":0,
    "count":0,
    "offset":0
},
    "meta": {
        "status":200,
        "msg":"OK",
        "response_id":"go1iedohmaws011q5pjsiz7wjycs30ijcfnq16qg"
    }
}
*/


const enviar = () => {
    let nicks = $('#nickname').val();
    let data = {
        type: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=uOzNt4S1zh2ZqlIy1tzwx3JkZkf2dggG&q=${nicks}`,
        data: {
            "data":[],
            "pagination":{"total_count":0,
            "count":0,
            "offset":0
        },
            "meta": {
                "status":200,
                "msg":"OK",
                "response_id":"go1iedohmaws011q5pjsiz7wjycs30ijcfnq16qg"
            }
        },
        dataType: "json",
        success: (respuesta) => {
            $('#contenedor > *').remove('#stilish');
            for(i of respuesta.data) {
                $('#contenedor').append(`
                <div id="stilish">
                    <img id="imagenRef" src="${i.images.downsized_large.url}">
                    <div id="detalle">
                        <p>TITLE: ${i.title}</p>
                        <p>TYPE: ${i.type}</p>   
                        <a href="${i.url}">URL</a>
                    </div>
                </div>
                `);
            }
        },
        error: () => {
            console.log('Error..');
        }
    };
    $.ajax(data);
}




const agregarUsuario = () => {
    var urls = document.location.href;
    if(urls.indexOf('?')>0) {
        var cadena = urls.split('?')[1];
        var corte = cadena.split('&');
        var obtenido = {};
        for(var i = 0, l = corte.length; i < l; i++){
            var temporal = corte[i].split('=');
            obtenido[temporal[0]] = unescape(decodeURI(temporal[1]));
        }
        var detalle2 = obtenido.detalle.replaceAll('+', ' ');
        let div = $('#pagina2');
        div.append(`
        <h3>${obtenido.nombre}</h3>
        <h3>${obtenido.apellido}</h3>
        <h3>${obtenido.telefono}</h3>
        <h3>${detalle2}</h3>
        `) 
    }
}
agregarUsuario();
