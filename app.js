const nreq = require('./lib/NReq')
async function showRequest()
{
    console.log( await nreq.request('POST','http','localhost',10001,'/player/get/15001'))
    console.log( await nreq.request('GET','http','localhost',10001,'/player/get/15005'))
    console.log( await nreq.request('POST','http','localhost',10001,'/player/get/15005'))
    

    
}
showRequest() 
