function ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    console.log(array[0]);
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function fetchProductsCSV() {
    let id=localStorage.getItem('id')
    fetch(`/productsUserIDExport/${id}`).then(response => {
        if (!response.ok)
            throw Error(ERROR)
        return response.json()
    }).then(data => {
        aux={"title":"title","type" : "type","price" :"price","origin":"origin","utilisation":"utilisation","label":"label"}
        aux.push(data)
        console.log(aux)
        csv=ConvertToCSV(aux)
        var name='products'
        download(name +'.csv',csv)
    }).catch(error => {
        console.log(error)
    })
}

