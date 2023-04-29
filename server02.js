const http = require ('http')
const nreq = require('./lib/NReq')
const PORT = process.env.PORT || 10002

let server02 = http.createServer(onClientRequest)
    server02.listen(PORT)
    console.log('Server02 started listening in ' + PORT)
    
    



    async function onClientRequest(request, response)
    { 
        //{"code": 1, "msg":"player collected this rewards"}//testfor02
        let statcode = 200
        let method = request.method
        let result = ""
        await nreq.request('POST','http','localhost',10001,'/player/get/15001')
        if(method === `GET` )
        {
            statcode = 404
            result = JSON.stringify({"code": 4, "msg":"nothing"})
            
        }
        else if(method === `POST` && '/reward/collect')
        {
            //result = 
            
        }    



        console.log(statcode)
        //console.log(response)
        response.writeHead(statcode)
        //response.write(result)
        response.end()
    }    
