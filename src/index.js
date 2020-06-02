//  const { Client } = require('@iota/iota-rs-wasm/web')

console.log("Hello world!")
import * as client from '@iota/iota-rs-wasm/web'

console.log("Hello world1!")
console.log(client)

const uri = 'https://nodes.comnet.thetangle.org'
client.addNode(uri).then(() => {

    client.getNodeInfo().then(nodeInfo => {

        console.log("nodeInfo", nodeInfo)
    })

})
