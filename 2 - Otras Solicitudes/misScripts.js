fetch('https://jsonplaceholder.typicode.com/posts/5',{
    method: 'PATCH',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        title: 'TITULO MODIFICADO'
    })
})
.then(respuesta => respuesta.json())
.then(data => console.log(data))
.catch(error => console.error('Error: ' + error))