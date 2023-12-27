let usuario = 'Fibonacci';
let password = 'javascript1';
let token = 'miToken';

// fetch('https://jsonplaceholder.typicode.com/posts',{
//   method : 'GET',
//   credentials: 'include',
//   headers:{
//     'Authorization': 'Basic' + btoa(usuario + ":" + password),
//     'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .then(error => console.log(error));

// fetch('https://jsonplaceholder.typicode.com/posts',{
//   method : 'GET',
//   credentials: 'include',
//   headers:{
//     'Authorization': 'Bearer' + token,
//     'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .then(error => console.log(error));

//cache
// fetch('https://jsonplaceholder.typicode.com/posts',{
//   method : 'GET',
//   credentials: 'include',
//   cache: 'default',
//   headers:{
//     'Authorization': 'Bearer' + token,
//     'Content-Type': 'application/json'
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .then(error => console.log(error));


//Redirección
fetch('https://jsonplaceholder.typicode.com/posts',{
  method : 'GET',
  credentials: 'include',
  cache: 'only-if-cached',
  redirect: 'manual',
  headers:{
    'Authorization': 'Bearer' + token,
    'Content-Type': 'application/json'
  }
})
  .then(response =>{
    if(response.type === 'opaquerediret'){
      let nuevaUbicacion = response.get('Location');
      console.log("Redirigiendo a: ", nuevaUbicacion);
    }else{
      return response.json()
    }
  })
  .then(data => console.log(data))
  .then(error => console.log(error));