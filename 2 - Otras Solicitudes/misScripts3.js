fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Nuevo titulo',
        body: 'Nueva descripcion'
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ' + error))