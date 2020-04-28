var server=require('http');//server is a reference to http module
//request n response are built in nodejs

var visitorcount=0;
function processRequest(request, response){ 
    //audio/mp3, video/mp4, imagge/jpg, document/Excel, document/Word
    //These are called  MIME types
    console.log("*******************");
    response.writeHead(200, {'Content-Type' : 'text/html'}); 
    var today=new Date();
   // response.end('<HTML><BODY>');
   var str='<HTML><BODY><B>First NodeJS</B><BR>';
   visitorcount++;
   str +='<B>Visitor#  </B>' + visitorcount;
   str +='<B>Today : ' + today + '<BR>';
    str +='<B>Today : ' + today + '<BR>';
    str+='<B><I>Welcome to NodeJS</I></B><BR></BODY></HTML>';
    response.end(str);
 }
//code for running this.js file as server
var s=server.createServer(processRequest);
s.listen(8080);
console.log("Started server. waiting for client request")