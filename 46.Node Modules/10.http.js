const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        return res.end('Welcome to home page');
    }
    if(req.url === '/about'){
        return res.end('This is the about page');
    }
    res.end(`
        <h1>Oops!</h1>
        <p>page not found</p>
        <a href="/">back home</a>
    `)
})

server.listen(2000);