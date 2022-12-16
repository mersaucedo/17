function getUsers(){
    fetch('http://localhost:9000/api/users')
    .then(response => response.json())
    .then(data =>console.log(data));
}
getUsers()

function getUsersId(id){
    fetch(`http://localhost:9000/api/users/${id}`)
    .then(response => response.json())
    .then(data =>console.log(data));
}
getUsersId("639cd7562d7a167bf5c8d7a4")

