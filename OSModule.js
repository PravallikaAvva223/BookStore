var osmodule = require('os');
var disk = require('diskusage');
console.log('CPU Architecture : '+ osmodule.arch());
console.log('Free memory : '+ osmodule.freemem());
console.log('Total memmory : '+ osmodule.totalmem());
console.log('Network interfaces : '+ osmodule.networkInterfaces());
console.log('Temporary directory :'+ osmodule.tmpdir() );
console.log('Host/Machine name : '+ osmodule.hostname());
console.log('OS Type : '+ osmodule.type());
console.log('os platform : '+ osmodule.platform());
console.log('os version : '+ osmodule.release());

function diskinfo(err,info)
{
    console.log('free space:'+ info.free);
    console.log('total disk space:'+ info.total);
}
disk.check('/',diskinfo);