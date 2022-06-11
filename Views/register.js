const myForm= document.getElementById('myForm')
myForm.addEventListener('submit',function(e){
    e.preventDefault()
    var username=document.getElementById('username').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    fetch('/users',{
        method: 'POST',
        body: JSON.stringify({
            username: username,
        email: email,
        password: password}),
        headers: {'Content-type':'application/json'}
    }).then(function(response){
        return response.json()})
        .then(function(data)
        {console.log(data)
            title=document.getElementById("title")
            body=document.getElementById("bd")
            title.innerHTML = data.title
            body.innerHTML = data.body
        }).catch(error => console.error('Error:', error));
})


