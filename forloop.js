//JSON Object
var arr = [{"name"  :  "guvi"} , {"class_name" :  "zenclass"} , {"online" :  "true"}]
// for loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
// for of loop
for(let key of arr){
    console.log(key);
}
// for in loop
for(let key in arr){
    console.log(arr[key]);
}
//for each loop
arr.forEach( key=>(console.log(key)));