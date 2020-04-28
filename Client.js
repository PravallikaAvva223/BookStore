var network=require('net');
var client=network.connect({port : 5300}, function(){
    console.log('Connected to server...');
});
client.on('data',function(data){
    console.log('Server response: '+ data.toString());
    client.end();
});

client.on('end',function(){
    console.log('Disconnected from server...');
    
})
