


// ES6 

export const word = "daydayup";

export const getSome = ()=>{
    return "<h2> Are you ok </h2>"
}

const url = require("url");


// 得到 query 
export function getQuery(search){
   return  url.parse(search,true).query;
}