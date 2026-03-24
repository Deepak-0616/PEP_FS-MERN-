function array()
{
let arr=[1,2,3,4,5];
let arr2=[...arr,6,7];
for(let i=0;i<arr2.length;i++){
    document.write(arr2[i] + " ");
}      
// document.write(arr.push());
// document.write(arr.pop());
document.write(arr2.unshift(0));
// document.write(arr.shift());
// document.write(arr.length);
// document.write(arr.concat(6));
// document.write(arr.find(x => x > 3));
// document.write(arr.reverse());
}