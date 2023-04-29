module.exports = { request }

const http = require('http')
const { resolve } = require('path')

function request(method,protocal,host,port,path,payload,headers)
{
    return new Promise( (resolve) => {
        const options = {
            method: method ,
            protocal: protocal ,
            host: host,
            port: port,
            path:path,
            headers: headers
        }
    
        if(method === `POST`)
        {
            payload = JSON.stringify(payload)
        }
    
        let req = http.request(options,(resp)=> {
            
            let respdata = ``
        
            resp.on(`data`,(chunk)=>{
                respdata += chunk.toString()
            })
        
            resp.on(`end`, function(){
                //console.log(respdata)
                let resp = convertStringtoJSON(respdata)
                resolve(resp)

            })
        })
        req.end() 

    } )

     
}

function convertStringtoJSON(data)
{
    try{  
        return JSON.parse(data) 
    }catch(excp){  
        return data 
    }
}