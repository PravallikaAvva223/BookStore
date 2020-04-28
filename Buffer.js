var b=new Buffer(300);//store 300 characters
b.write("it is a light weight platform");//save or write data
console.log("data in buffer:"+ b.toString());//read dats from buffer
console.log("2-10 position :"+b.toString('ascii',2,10));//ascii - 8 bits
console.log("2-10 position :"+b.toString('utf8',2,10));//utr- 16 bits
console.log();
var str=new String('');
for(i=2;i<=10;i++)
{
    //str+= String.fromCharCode(b[i]);
    process.stdout.write(String.fromCharCode(b[i]));
}
    process.stdout.write('\n');    
//console.log("str : "+ str); 


console.log("hii");
process.stdout.write("hello");
process.stdout.write("bye");

    
    
    
