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
        {console.log(data)})
})


