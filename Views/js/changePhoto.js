const myForm= document.getElementById('imageForm')
myForm.addEventListener('submit',function(e) {
    e.preventDefault()
    var img=document.getElementById('image').value
    var user_id=localStorage.getItem('id')
    fetch(`/users/${user_id}`,{
        method:'PUT',
        body: JSON.stringify({
            img: img
        }),
        headers: {'Content-type':'application/json'}
    }).then(function(response){
        return response.json()})
        .then(function(data)
        {console.log(data)})
})
