let httpProxy = require('http-proxy');

const proxy = httpProxy.createServer({
    target: 'https://testibapp.fibabanka.com.tr/FIBABANKA',
    changeOrigin: true,
    secure: true
}).listen(82);