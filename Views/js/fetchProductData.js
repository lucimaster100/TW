function fetchProduct(){
    var product_id=localStorage.getItem('product_id')
    fetch(`/products/${product_id}`).then(response =>{
        if(!response.ok)
            throw Error(ERROR)
        return response.json()
    }).then(data =>{
        var image
        if(!data.image){
            image='photos/defaultImages/DefaultProduct.jpg'
        }else{
            image=user.image
        }
        console.log(data)
    })
}
fetchProduct()
