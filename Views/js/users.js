function fetchUsers(){
    fetch('/users').then(response =>{
        if(!response.ok)
            throw Error(ERROR)
        return response.json()
    }).then(data =>{
        const html=data.map(user =>{
            var image
            if(!user.image){
                image='photos/defaultImages/DefaultUser.jpg'
            }else{
                image=user.image
            }
            return `
            <div class="column">
            <div class="card">
        <div class="card__side card__side--front">
          <div class="card__details">
            <img src="${image}" alt="">
          </div>
        </div>
        <div class="card__side card__side--back card__side--back">
          <div class="card__cta">
            <div class="cardBackText">
              <p class="cardText">${user.username}</p>
              <a  href="VisitProfile.html" class="buttonCard disabled-link">Visit</a>

            </div>
            </div>
          </div>
        </div>
      </div>`
        }).join('')
        console.log(html)
        document.querySelector(".row").innerHTML = html
    }).catch(error =>{
        console.log(error)
    })
}

fetchUsers();
