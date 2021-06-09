const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('welcome to out home page');
    }

    if(req.url === '/about'){
        res.end("Welcome to About Page");
    }

    res.end(`
        <h1>Oops!</h1>
        <p>Something went wrong. <a href="/">Go back</a></p>
    `)
    
})

server.listen(5000)