const fs  = require('fs')

fs.readFile('./1.txt','utf8',function(err,dataStr){
    console.log(err);
    console.log(dataStr);
})

const b=null;
if(b){
    console.log("======b"+b);
}else{
    console.log("------b"+b);
}