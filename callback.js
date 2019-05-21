var fs = require('fs');

// function read(){
//     fs.readFile('.testlong');
// }

// function read2(){
//     fs.readFile('.test');
// }

// read();
// read2();

function callbackFunc(callback){
    fs.readFile('./example.txt','utf8',function(err,result){
        if(err){
            console.error(err);
            throw err;
        }
        else{
            console.log("두번째 기능인데 시간이..");
            callback(result);
        }
    });
}

console.log("A");
callbackFunc(function (data){
    console.log(data);
    console.log("c");
})