function deleteUserByID(){
    user_id=document.getElementById('user_id').value
    console.log(user_id)
    fetch(`/users/${user_id}`,{method:'DELETE'})
        .then(res => res.text())
        .then(res => console.log(res))
}
