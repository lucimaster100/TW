const http= require('http');
const fs = require('fs');
var path = require('path');

function send404(response){
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404: Resource not found.');
    response.end();
}
const mimeLookup = {
    '.js': 'application/javascript',
    '.html': 'text/html',
    '.css':'text/css'
};

const server = http.createServer((req, res) => {
    if(req.method == 'GET'){

        let fileurl;
        if(req.url == '/'){
            fileurl = 'Views/login.html' +req.url;
        }else{
            fileurl = 'Views/'+req.url;
        }
        let filepath = path.resolve('./' + fileurl);

        let fileExt = path.extname(filepath);
        let mimeType = mimeLookup[fileExt];

        if(!mimeType) {
            send404(res);
            return;
        }

        fs.exists(filepath, (exists) => {
            if(!exists){
                send404(res);
                return;
            }

            res.writeHead(200, {'Content-Type': mimeType});
            fs.createReadStream(filepath).pipe(res);

        });

    }
});

server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000')
})