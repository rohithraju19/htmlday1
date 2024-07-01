console.log("hi welcome to js");
a=8;
var a=8;
let g=23;
// let g=39;
{
    var a=23;
    let g=34;
    console.log(g);
}
console.log(a);
console.log(g);
console.log(g);
console.log(typeof(a));
var b="hello";
console.log(typeof(b))
var c=false;
console.log(typeof(c))
let person={name:"maya",age:22,location:"tvm"};
console.log(person.name)
let arr=["meera",92,"hello"]
console.log(arr[2])
console.log(arr.length)
let arrobj=[{age:20,name:"maya",location:"tvm"}]
console.log(arrobj[0].location)
function add(a,b){
    sum=a+b;
    return sum
}
var result=add(20,30);
 console.log(result)
 var z=5;
 var x=z++;
 console.log(x)
 var y=++z;
 console.log(y)
 var a1=15;
 var a2="15";
 if(a2>a1){
    console.log("a2 is greater")

 }
 else if(a1===a2){
    console.log("a1 is equal to a2")
 }
else{
    console.log("a1 is greater")
}
for(var i=0;i<arr.length;i++){
    console.log(i)
}
for(const i in arr){
    console.log(arr[i])
}
for(const i of arr){
    console.log(i)
}