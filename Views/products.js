function fetchProducts(){
    fetch('/products').then(response =>{
        if(!response.ok)
            throw Error(ERROR)
        return response.json()
    }).then(data =>{
        const html=data.map(product =>{
            var image
            if(!product.image){
                image='photos/defaultImages/defaultProduct.png'
            }else{
                image=product.image
            }
            var type
            if(!product.type)
                type="Not Found"
            else
                type=product.type
            return `
            
            <div class="column">
            <div class="card">
                <div class="card__side card__side--front">
                    <div class="card__details">
                        <img src="photos/damigeana4.png" alt="">
                    </div>
                </div>
                <div class="card__side card__side--back card__side--back">
                    <div class="card__cta">
                        <div class="cardBackText">
                            <p class="cardText">${type}</p>
                            <p class="cardText2">Owner :</p>
                            <p class="cardText3">Profile</p>

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

fetchProducts();
