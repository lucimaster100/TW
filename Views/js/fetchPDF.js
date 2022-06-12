function fetchProductsPDF(){
    let id=localStorage.getItem('id')
    fetch(`/productsUserIDExport/${id}`).then(response => {
        if (!response.ok)
            throw Error(ERROR)
        return response.json()
    }).then(data => {
        var doc=new jsPDF()
        doc.setFontSize(12)
        data.forEach(function(product,i){
            doc.text(10,10+(i*10),
                " Title:  " + product.title +
                " Type:  " + product.type +
                " Price:  "+ product.price +
                " Origin:  "+ product.origin +
                " Utilisation:  "+ product.utilisation +
                " Label:  "+ product.label
            )
        })
        doc.save("Products.pdf")
    })
}
fetchProductsPDF()
