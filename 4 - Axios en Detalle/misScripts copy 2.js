let datos = {
    title: "Nuevo post",
    body: 'Mi contenido'
}

axios.post('https://jsonplaceholder.typicode.com/posts', datos)
.then(respuesta => console.log('El post fue creado con éxito ' + respuesta.data))
.catch(error => console.log('Error al publicar'+ error))
