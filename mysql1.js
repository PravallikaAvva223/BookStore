var mysql=require('mysql');
var session=require('cookie-session');
var express=require('express');
var xss = require('xss-clean');//locating / searching for suspicious scripts embedded inside the page.
var xssFilter = require('x-xss-protection');//searching for suspicious scripts embedded in downloaded doc's.
var expapp=express();
var expdate= new Date(Date.now() + 3* 60* 1000);
var sesscookie={name : 'cookie1',keys : ['3307', 'localhost'], 
cookie :{secure : true, httpOnly : true, domain : 'localhost.com', expires:expdate}
};

expapp.use(session(sesscookie));
// this will automatically filter-out all suspicious scripts
//generally, any scripts which are not having any header info, is considered as suspicious
expapp.use(xss());
expapp.use(xssFilter({reportUri : '/storeReport'}));    //deep checkingof virus/malwares/spywares
const mysqlconn=mysql.createConnection
({host:'localhost',port : '3307',user:'root',password:'Pravallika1998',database:'mysql'})

function testconn(err){
    console.log(err);
    if(err){
        console.log("unable to connect to the database....")

    }else{
        console.log("Connected successfully.....")
        console.log(200);
    }

}

var req;
var res;

mysqlconn.connect(testconn);
function printEmployees(err,rows){ //callback func
    res.cookie('name', sesscookie.name, {expires: sesscookie.expires, 
        httpOnly:sesscookie.httpOnly, secure : sesscookie.secure, domain: sesscookie.domain} );
    res.send(rows)

}
function getAllEmployee(request,response){//call back func
    req=request;
    res=response;
    
    mysqlconn.query('select * from employee' ,printEmployees);//static sql

}
function getFewEmployee(request, response) //Call back function
{
    req=request;
    res=response;
    qry='select * from employee where emp_id > ' + request.params.empid1 + ' and emp_id < ' + 
        request.params.empid2;
    mysqlconn.query(qry, printEmployees); //Static SQL
}

expapp.get('/',getAllEmployee);
expapp.get('/:empid1/:empid2', getFewEmployee);
expapp.listen(8081);
console.log("Server started at port 8081")
