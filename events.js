const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data,nddata)=>{
    console.log('received')
    console.log(data)
    console.log(nddata)
})

customEmitter.emit('response','hello world',{name:'ryan'})
