const http = require ('http')
const player = require('./player_data.json')
const PORT = process.env.PORT || 10001

let server = http.createServer(onClientRequest)
    server.listen(PORT)
    console.log('Server started listening in ' + PORT)
function onClientRequest(request, response)
{
    let statcode = 200
    let method = request.method
    let requrl = request.url
    let result = ""

    let id = requrl.split('/')
    console.log(requrl,id)
    //console.log(player)
    ///console.log(`/${id[1]} ${id[2]}/`,`/${id[1]} ${id[2]}/` === '/player/get')

    if(method === `GET` )
    {
        statcode = 404
        result = JSON.stringify({"code": 4, "msg":"nothing"})
    }
    else if(method === `POST` && `/${id[1]}/${id[2]}/` === '/player/get/')
    {
        result = player.find((player) =>{
            if(player.player_id === `${id[3]}`){
                player.code = 1 
                return player
            }
        })

        if(result === undefined ) {
            result = {"code": 3, "msg":"player not found"}
        }
        result = JSON.stringify(result)
        console.log(result)
        
    }
    console.log(statcode)
    response.writeHead(statcode)
    response.write(result)
    
    response.end()

}