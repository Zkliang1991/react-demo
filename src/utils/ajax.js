

// Promise  

//  new Promise(function(resolve,reject){

// })

// // then   成功回调 
// // catch  错误回调

// Promise.prototype.then = resolve
// Promise.prototype.catch = reject

// const fs  = require("fs");
const querystring = require("querystring");

export const ajax = {
    get(url,params){
       const promise = new Promise(function(resolve,reject){
            const handler = function(){
                if(this.readyState!==4){
                    return ;
                }
                if(this.status == 200){
                    // 成功
                    resolve({data:this.response});
                }else{
                    // 失败
                    reject(new Error(this.statusText))
                }
            }
            // ajax 4
            // 1 . 创建请求他头
            var xhr = new XMLHttpRequest();
            // 2. 打开 请求头 
            xhr.open("GET",url+"?"+querystring.stringify(params),true);
            // 3. send 发送请求
            xhr.responseType = "json";
            xhr.setRequestHeader("Accept","application/json");
            xhr.send();
            // 4. 监听后端返回数据 
            xhr.onreadystatechange = handler;  // 

            // xhr.onreadystatechange = function(response){
            //     if(response.status==200 && response.readyState == 4){

            //     }
            // }
       })
       return promise;
    },
    post(){

    }
}
