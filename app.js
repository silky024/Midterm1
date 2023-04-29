const nreq = require('./lib/NReq')
//console.log(nreq.request('POST','http','localhost',10001,'/player/get/15001'))
//console.log(nreq.request('GET','http','localhost',10001,'/player/get/15001'))
/*
nreq.post('http', 'localhost:9818/hi')
nreq.request('GET', 'https','covid19.th-stat.com/api/open/today')
let payload = {"player_id" : 15003}
nreq.post('http','localhost:10002/reward/collected', payload)

let payload = {"player_id" : 15001}
nreq.post('http','localhost:10002/reward/collected', payload) */

async function showRequest()
{
    //console.log( await nreq.request('POST','http','localhost',10001,'/player/get/15001'))
    //console.log( await nreq.request('GET','http','localhost',10001,'/player/get/15005'))
   //console.log( await nreq.request('POST','http','localhost',10001,'/player/get/15005'))

   console.log( await nreq.request('POST','http','localhost',10002,'/reward/collect/15001'))


    

    
}
showRequest() 
